import React from "react";
import PropTypes from "prop-types";

const styleComponent = {
  cont: {
    margin: "5px auto"
  }
};

const Pet = (picture, namepet) => {
  return (
    <div style={styleComponent.cont}>
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
