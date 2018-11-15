import React from "react";
//Router
import { Router, Route, browserHistory } from "react-router";

//Import containers
import PhotosContainer from "../containers/PhotosContainer";
import ProductsContainer from "../containers/ProductsContainer";

const Root = () => (
  <Router>
    <Route path="/pets" component={PhotosContainer} />
  </Router>
);

export default Root;
