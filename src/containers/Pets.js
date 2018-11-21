import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Components
import Participante from "../components/Participante";
import UserMessage from "../components/Message";

//Acciones
import { apiCallRequest } from "../reduxFiles/actions";

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

class Pets extends Component {
  getANewPet = () => {
    const { onRequest } = this.props;
    onRequest();
  };

  componentWillUnmount() {
    console.log("El component se quitará!");
  }

  render() {
    const { dog, fetching } = this.props; //Props del store

    return (
      <div style={styles.content}>
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
