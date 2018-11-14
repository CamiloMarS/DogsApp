import React from "react";
const styles = {
  container: {
    width: "150px",
    height: "200px",
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
const Participante = ({ avatar, name, children }) => {
  return (
    <div style={styles.container}>
      <img src={avatar} alt={""} style={styles.picture} />
      <h3>{name}</h3>
      {children}
    </div>
  );
};

export default Participante;
