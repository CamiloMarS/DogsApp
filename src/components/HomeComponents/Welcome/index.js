import React from "react";
import PropTypes from "prop-types";

const styles = {
  main: {
    width: "100%",
    height: "90vh",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  contentPicture: {
    width: "300px",
    background: "transparent",
    borderBottom: "2px dashed #ccc"
  },
  picture: {
    width: "300px"
  }
};

const Welcome = ({ picture, message }) => {
  return (
    <div style={styles.main}>
      <div style={styles.contentPicture}>
        <img src={picture} alt={"imagen"} style={styles.picture} />
      </div>
      <h3>{message}</h3>
    </div>
  );
};

Welcome.propTypes = {
  message: PropTypes.string.isRequired
};

export default Welcome;
