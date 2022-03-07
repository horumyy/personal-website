import React from "react";
import "./styles/buttons.css";
import MyPhoto from "./Images/Untitled.png";
import ReactRoundedImage from "react-rounded-image";
import CV from "./CV_Jorge_Plasencia.pdf";

import { useState } from "react";

function Info() {
  const [show, setShow] = useState(false);

  const Modal = (props) => {
    if (!props.show) {
      return null;
    }
    return (
      <div className="fixed left-[0] top-[0] right-[0] bottom-[0] bg-[rgba(0,0,0,0.5) flex items-center justify-center backdrop-brightness-50">
        <div className="p-4 modal-content bg-gray-200 w-[40%] sm:w-[20%] drop-shadow-2xl rounded-lg">
          <div className="modal-header">
            <h1 className="modal-title">Thank you</h1>
          </div>
          <div className="modal-body">For visiting my page!🥰</div>
          <div className="modal-footer">
          <hr style={{
            backgroundColor: "#808080",
            height:1,
            padding: 0.5,
            margin: 3
          }}/>
            <button onClick={props.onClose} className="text-blue-500">Buh-bye!</button>
          </div>
        </div>
      </div>

    );
  };

  return (
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
        <Modal onClose={()=>setShow(false)} show={show}></Modal>
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
  );
}

export { Info };
