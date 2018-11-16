import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Acciones
import { changeUi } from "./reduxFiles/actions/index";

//Route
import Root from "./Route";

//Componentes
import HeaderApp from "./components/HeaderApp";
import LogoApp from "./components/LogoApp";
import MenuApp from "./components/MenuNav";

//Opciones del Menú
const menu = [
  { text: "Home", link: "home" },
  { text: "Pets", link: "pets" },
  { text: "Photos", link: "photos" },
  { text: "Music", link: "music" },
  { text: "Todos", link: "todos" },
  { text: "Contacts", link: "contacts" }
];

const logo = {
  url: "/home",
  image:
    "https://sngular.com/wp-content/uploads/2017/04/logo-header-sngular-web.png"
};

//Component App
class App extends Component {
  changingUI = proxUI => {
    const { changeProxUI } = this.props;
    changeProxUI(proxUI);
  };

  render() {
    const { currentUi } = this.props;
    return (
      <Router>
        <div>
          <HeaderApp
            logo={<LogoApp image={logo.image} url={logo.url} />}
            listOptions={
              <MenuApp options={menu} changeCurrentUI={this.changingUI} />
            }
          />
          <Root name={currentUi} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUi: state.startCount["currentUI"]
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeProxUI: changeUi
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
