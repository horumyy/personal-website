import React, { Fragment } from "react";
import "./styles/buttons.css";
import MyPhoto from "./Images/Untitled.png";
import ReactRoundedImage from "react-rounded-image";
import CV from "./CV_Jorge_Plasencia.pdf";
import { Modal } from "./modal";
import { useState } from "react";

function Info() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="">
        <div className="">
          <button href="#" class="" onClick={() => setShow(true)}>
            <ReactRoundedImage
              image={MyPhoto}
              roundedSize="0"
              imageWidth="100"
              imageHeight="100"
            />
          </button>
        </div>
        <div className="">
          <h1 className="text-[2.25rem] text-transparent bg-clip-text bg-gradient-to-br from-pink-200 via-pink-300 to-blue-600">
            Jorge Plasencia
          </h1>
          <p className="mb-4 text-[1.15rem] font-thin ">
            C.S. Student & Self-taught Programmer
          </p>
          <a href={CV} download="CV_JorgePlasencia" rel="noopener">
            <button className="p-btn p-prim-col p-btn-sm btn-high">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <Modal onClose={() => setShow(false)} show={show}></Modal>
    </>
  );
}

export { Info };
