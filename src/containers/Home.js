//Modulos
import React, { Component } from "react";

//Contenedores
import Welcome from "../components/HomeComponents/Welcome";
import WrappedComponent from "../components/INeedLocalStore";

const _fetch = () => {
  return fetch("https://jsonplaceholder.typicode.com/users");
};

function getData(key) {
  return localStorage.getItem(key);
}

//Contenedor Home
class Home extends Component {
  render() {
    return (
      <div>
        <Welcome
          picture="https://www.henhudschools.org/cms/lib/NY01813707/Centricity/Domain/1429/Welcome%202.jpg"
          message="UI Principal"
        />
        <WrappedComponent reallyLongApiCall={_fetch} load={getData} />
      </div>
    );
  }
}

export default Home;
