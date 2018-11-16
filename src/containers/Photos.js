import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsPhotos } from "../reduxFiles/actions/index";

//Components
import AlbumList from "../components/AlbumList";
//import Photo from "../components/Photo";
import UserMessage from "../components/Message";

//Function for get Albums List
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

//Contenedor
class Photos extends Component {
  componentDidMount() {
    //Realizar la petición al server
    const { getAlbumsList } = this.props;
    getAlbumsList();
  }

  showUserMessage = () => {
    const { loading, albums } = this.props;

    return loading ? (
      <UserMessage color="#ccc" title="User Message" message="Loading ..." />
    ) : (
      <AlbumList albums={getByDifferentAlbum(albums)} />
    );
  };

  render() {
    //Props de store
    return <div style={{ padding: "5px" }}>{this.showUserMessage()}</div>;
  }
}

//Conectar el componente con el store
const mapStateToProps = state => {
  const { loading, list, message } = state.photos;
  return {
    albums: list,
    loading,
    message
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getAlbumsList: actionsPhotos.apiRequestPhoto
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos);
