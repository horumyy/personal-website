import React from "react";
import "./css/buttons.css";
import "./css/dark_mode.css";
import "./css/layout.css";
import "./css/landscape.css"
import "./css/color_palette.css";
import MyPhoto from "./Images/Untitled.png";
import ReactRoundedImage from "react-rounded-image";
import CV from "/Users/jorgeplasencia/Scripts/React/personal-website/src/CV_Jorge_Plasencia_Ahm_Jorgensen.pdf";

function Info() {
  return (
    <body className="p-layout">
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
        <p className="p-silver-500 text-high">C.S. Student & Web Developer</p>
        <a href={CV} download="CV_JorgePlasencia" target="_blank">
          <button className="p-btn p-prim-col p-btn-sm btn-high ">
            Download CV
          </button>
        </a>
      </div>
    </body>
  );
}

export { Info };
