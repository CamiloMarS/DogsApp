import React from "react";
import PhotosAlbum from "../Album";

const AlbumList = ({ albums }) => {
  return (
    <div
      style={{
        backgroundColor: "pink",
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "330px"
      }}
    >
      {albums !== undefined ? (
        albums.map(s => (
          <PhotosAlbum
            key={s}
            idAlbum={s}
            showAllPhotos={() => console.log("Function")}
          />
        ))
      ) : (
        <p>No hay albums</p>
      )}
    </div>
  );
};

export default AlbumList;
