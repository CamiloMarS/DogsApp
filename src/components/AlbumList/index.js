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

const createAlbum = (collection, getPhotos) => {
  return collection.map(s => {
    return (
      <PhotosAlbum
        key={s.id}
        idAlbum={s.id}
        albumTitle={s.title}
        showAllPhotos={() => getPhotos(s.id)}
      />
    );
  });
};

const AlbumList = ({ albums, onclick }) => {
  return (
    <div style={style.content}>
      <h2>Album List</h2>
      <div style={style.albums}>
        {isEmpty(albums) === false ? (
          createAlbum(albums, onclick)
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
