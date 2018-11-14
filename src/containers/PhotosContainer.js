import React, { Component } from "react";
import { connect } from "react-redux";
import AlbumList from "../components/AlbumList";

const getByDifferentAlbum = list => {
  Array.prototype.unique = (function(a) {
    return function() {
      return this.filter(a);
    };
  })(function(a, b, c) {
    return c.indexOf(a, b + 1) < 0;
  });

  if (list.length > 0) {
    let actual = 1;

    const albums = [];
    for (let current of list) {
      if (current.albumId !== actual) {
        actual = current.albumId;
      } else albums.push(current.albumId);
    }

    return albums.unique();
  }
};

class PhotosContainer extends Component {
  /** Obtener los albums */

  render() {
    const PhotosAlbums = getByDifferentAlbum(this.props.list);

    return (
      <div>
        <AlbumList albums={PhotosAlbums} />
      </div>
    );
  }
} //end class

/**
 * Conectar con StoreRedux
 */

const mapStateToProps = state => {
  const { loading, list, message } = state["photos"];
  return {
    loading,
    list,
    message
  };
};

export default connect(mapStateToProps)(PhotosContainer);
