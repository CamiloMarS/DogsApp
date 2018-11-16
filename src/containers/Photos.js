import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  actionsPhotos,
  actionsAlbums,
  filterPhotosAlbum
} from "../reduxFiles/actions/index";

//Components
import AlbumList from "../components/AlbumList";
//import Photo from "../components/Photo";
import UserMessage from "../components/Message";
import PhotoList from "../components/PhotoList";

//Contenedor
class Photos extends Component {
  componentDidMount() {
    //Solicitad los albunes
    const { getAlbumsList, getPhotoList } = this.props;
    getAlbumsList();
    getPhotoList();
  }

  componentWillUnmount() {
    console.log("Eliminando el componente");
  }

  //Funcion para solicitar las fotos del album
  getRequestPhotosAlbum = idAlbum => {
    console.log("Photos del Album: ", idAlbum);
    const { photoList, filterByAlbumPhotos } = this.props;
    filterByAlbumPhotos({ album: idAlbum, photoList });
  };

  showUserMessage = () => {
    /** Muestra el mensaje de usuario o carga la lista de albums */
    const { loading, albums } = this.props;
    return loading ? (
      <UserMessage color="#ccc" title="User Message" message="Loading ..." />
    ) : (
      <AlbumList albums={albums} onclick={this.getRequestPhotosAlbum} />
    );
  };

  showPhotosAlbum = () => {
    const { photos } = this.props;
    return <PhotoList photosCollection={photos} />;
  };

  render() {
    //Props de store
    return (
      <div
        style={{
          padding: "5px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        {this.showUserMessage()}
        {this.showPhotosAlbum()}
      </div>
    );
  }
}

//Conectar el componente con el store
const mapStateToProps = state => {
  const { loading, list, message, photos } = state.albums;
  return {
    albums: list,
    loading,
    message,
    photos,
    photoLoading: state.photos.loading,
    photoList: state.photos.list,
    photoMessage: state.photos.message
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getAlbumsList: actionsAlbums.apiRequestAlbum,
      getPhotoList: actionsPhotos.apiRequestPhoto,
      filterByAlbumPhotos: filterPhotosAlbum
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos);
