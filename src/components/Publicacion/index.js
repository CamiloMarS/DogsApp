import React from "react";

const Publicacion = information => {
  return (
    <div style={{ backgroundColor: "#ccc", width: "100%", minHeight: "300px" }}>
      <h4>Camilo Salazar</h4>
      <div
        style={{
          maxWidth: "350px",
          height: "50%",
          backgroundImgeUrl:
            "https://okdiario.com/img/2017/04/06/unnamed-655x368.jpg"
        }}
      >
        {" "}
      </div>
      <div>
        <p>
          Uno de los beneficios de Redux es que hace que los cambios en el
          estado sean predecibles y transparentes. Cada vez que se envía una
          acción, se calcula y se guarda el nuevo estado.
        </p>
      </div>
      {/** Aquí iran los botones de reacciones */}
    </div>
  );
};

export default Publicacion;
