import React from "react";
import Pet from "../Pet/index";

const paintHistory = list => {
  if (Array.isArray(list) && list.length > 0) {
    return list.map((pet, i) => <Pet picture={pet.picture} namepet={i} />);
  } else {
    return <p>Empty!</p>;
  }
};

const HistoryPets = ({ history }) => {
  return <div>{paintHistory(history)}</div>;
};

export default HistoryPets;
