import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect } from "react";
import Blocks from "./lists/Blocks";
import Avatar from "./threejs/Avatar";
import mixpanel from "mixpanel-browser";

interface iCardProps {
  isMobile: boolean;
  blocks: {
    title: string;
    url: string;
    icon: IconProp;
  }[];
}

function Card({ isMobile, blocks }: iCardProps) {
  useEffect(() => {
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "");
  }, []);

  useEffect(() => {
    const card = document.getElementById("card");
    card?.classList.remove("opacity-0");
    card?.classList.add("opacity-100");
  }, []);

  return (
    <div className="absolute bg-transparent z-[100] top-0 h-full w-full flex justify-center items-center">
      <div
        id="card"
        className={`transition-all duration-[4000ms]  bg-white flex ${
          isMobile
            ? "landscape:flex-row portrait:flex-col"
            : "flex-col opacity-0"
        } w-[90vw] sm:w-auto sm:px-4 rounded-3xl shadow items-center`}
      >
        <div
          className={`flex flex-col items-center my-4 landscape:mx-4 select-none ${
            isMobile && "landscape:mr-10"
          } text-center`}
        >
          <div className="bg-hotpink rounded-full w-[7rem] h-[7rem] flex items-center justify-center select-none">
            {isMobile ? (
              <img src="./favicon.ico" alt="Jorge" className="w-[5rem]" />
            ) : (
              <Avatar isMobile={isMobile} />
            )}
          </div>

          <span className="select-none text-[2.25rem] text-transparent bg-clip-text bg-gradient-to-br from-pink-200 via-pink-300 to-blue-600">
            Jorge Plasencia
          </span>
          <span className="select-none text-[1.15rem] font-thin mb-2">
            C.S. Student & Self-taught Programmer
          </span>
          <a
            id="translate-element"
            className="text-white select-none px-[14px] py-[6px] rounded-md transition-all duration-500 bg-gradient-to-tl to-[#9C89B8] via-[#F0A6CA] from-[#DEC0F1] bg-size-200 bg-pos-0 hover:bg-pos-100"
            href={"/CV_Jorge_Plasencia.pdf"}
            download="CV_JorgePlasencia.pdf"
            onClick={() => {
              mixpanel.track("Download CV");
            }}
          >
            <span className="select-none">Download CV</span>
          </a>
        </div>
        <Blocks blocks={blocks} mobile={isMobile} />
      </div>
    </div>
  );
}

export default Card;
