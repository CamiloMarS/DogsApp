import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MenuNav = ({ options, changeCurrentUI }) => (
  <ul style={{ listStyle: "none" }}>
    {options.map((option, i) => {
      return (
        <li
          key={i}
          style={{
            margin: "0 1px",
            display: "inline",
            borderBottom: "1px inset whitesmoke",
            padding: "10px",
            height: "100%"
          }}
        >
          <Link
            to={option.text.toLowerCase()}
            style={{
              textDecoration: "none",
              color: "whitesmoke"
            }}
            onClick={() => changeCurrentUI(option.link)}
          >
            {option.text}
          </Link>
        </li>
      );
    })}
  </ul>
);

/** Validar que el "options" sea un objeto */
MenuNav.propTypes = {
  options: PropTypes.array.isRequired
};

export default MenuNav;
