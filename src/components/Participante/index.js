import React from "react";
import BtnStart from "../BtnStart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { startCount } from "../../reduxFiles/actions";

const styles = {
  container: {
    width: "200px",
    height: "250px",
    backgroundColor: "#dddddd",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  picture: {
    width: "100px",
    height: "100px",
    backgroundColor: "whitesmoke",
    borderRadius: "50%",
    padding: "5px"
  }
};

//@connect() -> con eso bastaría, pero lo mejor es hacerlo con mapStateToProps
const Participante = ({ avatar, name, startWithCount, count }) => {
  const startCountYeah = () => {
    startWithCount(!count);
  };

  return (
    <div style={styles.container}>
      <img src={avatar} alt={""} style={styles.picture} />
      <h3>{name}</h3>
      <BtnStart onclick={startCountYeah} />
    </div>
  );
};

/** Conectar redux con mi componente */
const mapStateToProps = state => {
  return {
    count: state.startCount.countTime
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      startWithCount: startCount
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Participante);
