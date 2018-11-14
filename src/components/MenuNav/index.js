import React from "react";
import PropTypes from "prop-types";

const MenuNav = ({ options }) => (
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
          <a
            href={option.link}
            style={{
              textDecoration: "none",
              color: "whitesmoke"
            }}
          >
            {option.text}
          </a>
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
