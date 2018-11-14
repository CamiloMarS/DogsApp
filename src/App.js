import React, { Component } from "react";
import Participante from "./components/Participante";
//import Publicacion from "./components/Publicacion";
//import Pet from "./components/Pet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { apiCallRequest } from "./reduxFiles/actions";
import UserMessage from "./components/Message";

class App extends Component {
  getANewPet = () => {
    const { onRequest } = this.props;
    onRequest();
  };

  render() {
    const { fetching, dog } = this.props;
    return (
      <div className="App">
        {fetching === false ? (
          ""
        ) : (
          <UserMessage color="yellow" title="Message" message="Loading" />
        )}
        <Participante name="Pet" avatar={dog} />
        <button onClick={this.getANewPet}>Get Pet</button>
        {/*<Pet picture="" namepet="otro" />*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    getDog: { fetching, dog, error }
  } = state;
  return {
    fetching,
    dog,
    errorRequest: error
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onRequest: apiCallRequest
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
