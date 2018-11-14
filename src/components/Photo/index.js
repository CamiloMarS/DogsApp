import React from "react";
import PropTypes from "prop-types";

const Photo = ({ albumId, id, title, url, thumbnaiUrl }) => {
  return (
    <div style={{ width: "200px", height: "300px" }}>
      <div style={{ width: "100%", height: "150px" }}>
        <image src={url} alt={id} style={{ width: "100%", height: "100%" }} />
      </div>
      <div>
        <h4>Album: {albumId}</h4>
        <p>
          <span>{id}</span>
          {title}
        </p>
        <p>{thumbnaiUrl}</p>
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
