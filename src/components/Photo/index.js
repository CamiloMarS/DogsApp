import React from "react";
import PropTypes from "prop-types";

const Photo = ({ albumId, id, title, url, thumbnaiUrl }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "210px",
        margin: "5px",
        backgroundImage: `url(${thumbnaiUrl})`,
        backgroundPosition: "cover",
        border: "1px solid #ccc"
      }}
      id={id}
    >
      <div>
        <h4>Album: {albumId}</h4>
        <p>
          <span>{id}</span>
          {title}
        </p>
      </div>
    </div>
  );
};

Photo.propTypes = {
  albumId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumbnaiUrl: PropTypes.string.isRequired
};

export default Photo;
