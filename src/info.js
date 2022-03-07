import React from "react";
import "./styles/buttons.css"
import MyPhoto from "./Images/Untitled.png";
import ReactRoundedImage from "react-rounded-image";
import CV from "./CV_Jorge_Plasencia.pdf";

function Info() {
  return (
    <div className="">
      <div className="">
        <ReactRoundedImage
          image={MyPhoto}
          roundedSize="0"
          imageWidth="100"
          imageHeight="100"
        />
      </div>
      <div className="">
        <h1 className="text-[2.25rem] text-transparent bg-clip-text bg-gradient-to-br from-pink-200 via-pink-300 to-blue-600">Jorge Plasencia</h1>
        <p className="mb-4 text-[1.15rem] font-thin ">
          C.S. Student & Self-taught Programmer
        </p>
        <a href={CV} download="CV_JorgePlasencia" target="_blank">
          <button className="p-btn p-prim-col p-btn-sm btn-high">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
}

export { Info };
