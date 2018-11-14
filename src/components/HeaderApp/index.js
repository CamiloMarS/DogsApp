import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const HeaderApp = ({ logo, listOptions }) => {
  return (
    <div className="contentHeader">
      <div className="contentLogo">{logo}</div>
      <div className="contentOptions">{listOptions}</div>
    </div>
  );
};

HeaderApp.propTypes = {
  logo: PropTypes.element.isRequired, //una imagen
  listOptions: PropTypes.element.isRequired //UNa lista de elementos
};

export default HeaderApp;
