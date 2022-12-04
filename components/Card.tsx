import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect, useState } from "react";
import Blocks from "./lists/Blocks";
import Avatar from "./threejs/Avatar";
import { Mixpanel } from "../utils/mixpanel";
import * as THREE from "three";
import Modal from "./ContactModal";
import "98.css";

interface iCardProps {
  isMobile: boolean;
  modal: boolean;
  setModal: (modal: boolean) => void;
  blocks: {
    title: string;
    url?: string;
    rel?: string;
    icon: IconProp;
    setAction?: () => void;
  }[];
}

function Card({ isMobile, blocks, modal, setModal }: iCardProps) {
  const loadingManager = new THREE.LoadingManager();

  useEffect(() => {
    const card = document.getElementById("card");
    const titleBar = document.getElementById("titlebar");
    const avatar = document.getElementById("avatar");
    const titleBarModal = document.getElementById("titlebarModal");

    card?.classList.remove("opacity-0");
    card?.classList.add("opacity-100");

    if (titleBar != undefined) {
      titleBar.style.background = "linear-gradient(90deg,#F0A6CA,#9C89B8)";
    }

    if (avatar != undefined) {
      avatar.style.background = "#e3bfd4";
    }
    if (titleBarModal != undefined) {
      titleBarModal.style.background = "linear-gradient(90deg,#F0A6CA,#9C89B8)";
    }
  }, []);

  return (
    <div className="fixed  bg-transparent z-40 top-0 h-full w-full flex justify-center items-center">
      <div
        id="card"
        className={`window transition-all duration-[4000ms] flex flex-col  w-[90vw] static  sm:w-auto sm:px-4  items-center`}
      >
        <div className="title-bar w-full" id="titlebar">
          <div className="title-bar-text">https://horuhe.dev</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" className="cursor-none" />
            <button aria-label="Maximize" className="cursor-none" />
            <button aria-label="Close" className="cursor-none" />
          </div>
        </div>

        <div className={`window-body `}>
          <div
            className={` flex flex-col items-center my-4 landscape:mx-4 select-none ${
              isMobile && "landscape:mr-10"
            }
            ${
              isMobile
                ? "landscape:flex-row portrait:flex-col"
                : "flex-col opacity-100"
            }
            
            text-center`}
          >
            <div className="flex flex-col items-center">
              <div
                className="bg-hotpink window w-[7rem] h-[7rem] flex items-center justify-center select-none"
                id="avatar"
              >
                {isMobile ? (
                  <img
                    src="./favicons/favicon.ico"
                    alt="Jorge"
                    className="w-max"
                  />
                ) : (
                  <Avatar isMobile={isMobile} />
                )}
              </div>

              <h1 className="select-none text-[2rem] text-transparent bg-clip-text bg-gradient-to-br from-pink-200 via-pink-300 to-blue-600">
                Jorge Plasencia
              </h1>

              <span className="select-none text-[0.8rem]  mb-2">
                C.S. Student & Self-taught Programmer
              </span>
              <a
                id="translate-element"
                className="cursor-none text-[#dc98c0] select-none px-[14px] py-[6px] rounded-md transition-all duration-500 "
                href={"/CV_Jorge_Plasencia.pdf"}
                download="CV_JorgePlasencia.pdf"
                onClick={() => {
                  Mixpanel.track("Download CV");
                }}
              >
                <button className="cursor-none text-white select-none px-[14px] py-[6px]  transition-all duration-500 bg-gradient-to-tl to-[#9C89B8] via-[#F0A6CA] from-[#DEC0F1] bg-size-200 bg-pos-0 hover:bg-pos-100">
                  Download CV
                </button>
              </a>
            </div>

            <Blocks blocks={blocks} mobile={isMobile} />
          </div>
        </div>
      </div>
      <Modal isOpen={modal} setIsOpen={setModal} />
    </div>
  );
}

export default Card;
