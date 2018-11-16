import React from "react";
import Photo from "../Photo";

const isEmpty = collection => (collection.length > 0 ? false : true);

const PhotoList = ({ photosCollection }) => {
  return (
    <div
      style={{
        width: "55%"
      }}
    >
      <h2>Album List</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {isEmpty(photosCollection) === false ? (
          photosCollection.map(item => {
            return (
              <Photo
                key={item.id}
                id={item.id}
                albumId={item.albumId}
                title={item.title}
                url={item.url}
                thumbnaiUrl={item.url}
              />
            );
          })
        ) : (
          <p>Sin fotos!</p>
        )}
      </div>
    </div>
  );
};

export default PhotoList;
