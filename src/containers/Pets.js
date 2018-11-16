import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Components
import Participante from "../components/Participante";
import UserMessage from "../components/Message";

//Acciones
import { apiCallRequest } from "../reduxFiles/actions";

class Pets extends Component {
  getANewPet = () => {
    const { onRequest } = this.props;
    onRequest();
  };

  render() {
    const { dog, fetching } = this.props; //Props del store

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        {fetching === false ? (
          ""
        ) : (
          <UserMessage color="yellow" title="Message" message="Loading..." />
        )}
        <Participante name="Pet" avatar={dog}>
          <button onClick={this.getANewPet}>Obtener perro</button>
        </Participante>
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
)(Pets);
