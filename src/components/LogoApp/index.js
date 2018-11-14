import React from "react";

const LogoApp = ({ url, image }) => {
  return (
    <div>
      <a href={url} style={{ textDecoration: "none" }}>
        <img src={image} alt="" style={{ width: "100px" }} />
      </a>
    </div>
  );
};

export default LogoApp;
