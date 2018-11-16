//Modulos
import React, { Component } from "react";

//Contenedores
import Welcome from "../components/HomeComponents/Welcome";

//Contenedor Home
class Home extends Component {
  render() {
    return (
      <Welcome
        picture="https://www.henhudschools.org/cms/lib/NY01813707/Centricity/Domain/1429/Welcome%202.jpg"
        message="UI Principal"
      />
    );
  }
}

export default Home;
