import React from "react";
import PhotosAlbum from "../Album";
import UserMessage from "../Message";

const style = {
  content: {
    backgroundColor: "whitesmoke",
    textAlign: "left",
    maxWidth: "350px"
  },
  albums: {
    display: "flex",
    flexWrap: "wrap",
    maxHeight: "80vh",
    overflow: "auto"
  }
};

const isEmpty = collection =>
  typeof collection === "undefined" || collection.length === 0;

const createAlbum = collection => {
  return collection.map(s => {
    return (
      <PhotosAlbum
        key={s}
        idAlbum={s}
        showAllPhotos={() => console.log("Function")}
      />
    );
  });
};

const AlbumList = ({ albums }) => {
  return (
    <div style={style.content}>
      <h2>Album List</h2>
      <div style={style.albums}>
        {isEmpty(albums) === false ? (
          createAlbum(albums)
        ) : (
          <UserMessage
            color="rgba(245, 0, 10, .5)"
            title="User Message"
            message={`Total albums: ${0}`}
          />
        )}
      </div>
    </div>
  );
};

export default AlbumList;

/**
 * {isEmpty(albums) === false ? (
        createAlbum(albums)
      ) : (
        <UserMessage
          color="rgba(245, 0, 10, .5)"
          title="User Message"
          message={`Total albums: ${0}`}
        />
      )}
 */
