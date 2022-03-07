import React from "react";

import MyPhoto from "./Images/Untitled.png";
import ReactRoundedImage from "react-rounded-image";
import CV from "./CV_Jorge_Plasencia.pdf";

function Info() {
  return (
    <div className="p-layout">
      <div className="center-image">
        <ReactRoundedImage
          image={MyPhoto}
          roundedSize="0"
          imageWidth="100"
          imageHeight="100"
        />
      </div>
      <div className="test">
        <h1 className="text-high">Jorge Plasencia</h1>
        <p className="p-silver-500 text-high">
          C.S. Student & Self-taught Programmer
        </p>
        <a href={CV} download="CV_JorgePlasencia" target="_blank">
          <button className="p-btn p-prim-col p-btn-sm btn-high ">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
}

export { Info };
