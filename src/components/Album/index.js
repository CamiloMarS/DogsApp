import React from "react";

const styles = {
  album: {
    width: "100px",
    height: "120px",
    backgroundColor: "whitesmoke",
    boxShadow: "5px 4px 0px #ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "4px"
  }
};

const PhotosAlbum = ({ idAlbum, showAllPhotos }) => {
  return (
    <div onClick={showAllPhotos} style={styles.album}>
      <p>Album </p>
      <h3>{idAlbum}</h3>
    </div>
  );
};

export default PhotosAlbum;
