import React from "react";

const styles = {
  album: {
    width: "100px",
    height: "130px",
    backgroundColor: "#ddd",
    boxShadow: "5px 4px 0px #ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "3px",
    padding: "1px"
  },
  titleAlbum: { fontSize: "10px", marginBottom: "4px", textAlign: "center" },
  noAlbum: {
    display: "block",
    position: "relative",
    bottom: 0,
    textAlign: "right"
  }
};

const PhotosAlbum = ({ idAlbum, showAllPhotos, albumTitle }) => {
  return (
    <div onClick={showAllPhotos} style={styles.album}>
      <span style={styles.titleAlbum}>{albumTitle}</span>
      <span style={styles.noAlbum}>No. {idAlbum}</span>
    </div>
  );
};

export default PhotosAlbum;
