import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Acciones
import { apiCallRequest, actionsPhotos } from "./reduxFiles/actions";

//Componentes
import Participante from "./components/Participante";
import UserMessage from "./components/Message";
import HeaderApp from "./components/HeaderApp";
import LogoApp from "./components/LogoApp";
import MenuApp from "./components/MenuNav";

//Containers
import PhotosContainer from "./containers/PhotosContainer";

//Opciones del Menú
const menu = [
  { text: "Home", link: "/home" },
  { text: "Pets", link: "/pets" },
  { text: "Photos", link: "/photos" },
  { text: "Music", link: "/music" },
  { text: "Todos", link: "/todos" },
  { text: "Contacts", link: "/contacts" }
];

const logo = {
  url: "/home",
  image:
    "https://sngular.com/wp-content/uploads/2017/04/logo-header-sngular-web.png"
};

//Component App
class App extends Component {
  getANewPet = () => {
    const { onRequest, getPhoto } = this.props;
    onRequest();
    //getPhoto();
  };

  render() {
    const { dog, loadingPhotos } = this.props; //Props del store

    return (
      <div className="App">
        <HeaderApp
          logo={<LogoApp url={logo.url} image={logo.image} />}
          listOptions={<MenuApp options={menu} />}
        />

        {loadingPhotos === false ? (
          ""
        ) : (
          <UserMessage color="yellow" title="Message" message="Loading..." />
        )}

        <Participante name="Pet" avatar={dog}>
          <button onClick={this.getANewPet}>Obtener perro</button>
        </Participante>
        <PhotosContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    photos: { loading },

    getDog: { fetching, dog, error }
  } = state;
  return {
    loadingPhotos: loading,
    fetching,
    dog,
    errorRequest: error
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onRequest: apiCallRequest,
      getPhoto: actionsPhotos.apiRequestPhoto
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
