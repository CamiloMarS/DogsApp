import React from "react";
//Router
import { Route } from "react-router-dom";

//Import containers
import Home from "../containers/Home";
import Pets from "../containers/Pets";
import Photos from "../containers/Photos";

const CONTAINERS = [
  { id: 1, name: "", container: Home },
  { id: 2, name: "home", container: Home },
  { id: 3, name: "pets", container: Pets },
  { id: 4, name: "photos", container: Photos }
];

const find = name => {
  return CONTAINERS.find(continer => continer.name === name);
};

function recursive(rute) {
  if (typeof rute !== "undefined") {
    const { name, container } = find(rute.toLowerCase());
    return <Route path={`/${name}`} component={container} />;
  }
}

const Root = ({ name }) => recursive(name);

export default Root;
