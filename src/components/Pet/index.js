import React from "react";
import PropTypes from "prop-types";

const Pet = (picture, namepet) => {
  return (
    <div>
      <img src={picture} alt={namepet} />
      <p>{namepet}</p>
    </div>
  );
};

Pet.propTypes = {
  picture: PropTypes.string.isRequired,
  namepet: PropTypes.string.isRequired
};

export default Pet;
