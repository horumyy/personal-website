import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Blocks from "../components/lists/Blocks";
import ThreeScene from "../components/threejs/ThreeScene";

const Home: NextPage = () => {
  const [color, setColor] = useState("hotpink");
  const blocks = [
    {
      title: "GitHub",
      url: "https://github.com/JorgePAJ",
      icon: faGithubSquare,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/jorgeplasenciaa/",
      icon: faLinkedin,
    },
    {
      title: "Twitter",
      url: "https://twitter.com/JorgePAJ",
      icon: faTwitterSquare,
    },
  ];
  return (
    <div className="h-screen w-screen ">
      <Head>
        <title>Jorge Plasencia Ahm</title>
        <meta name="description" content="Welcome to my personal website <3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#d4d4d4] h-full w-full flex justify-center items-center">
        <div className="bg-white flex flex-col w-[90vw]  sm:w-auto sm:px-4 rounded-3xl shadow items-center ">
          <div className="flex flex-col items-center mt-4">
            <div className="bg-hotpink rounded-full w-[7rem] h-[7rem] flex items-center justify-center select-none">
              <img src="./favicon.ico" alt="Jorge" className="w-[5rem]" />
            </div>

            <span className="select-none text-[2.25rem] text-transparent bg-clip-text bg-gradient-to-br from-pink-200 via-pink-300 to-blue-600">
              Jorge Plasencia
            </span>
            <span className="select-none text-[1.15rem] font-thin mb-2">
              C.S. Student & Self-taught Programmer
            </span>
            <a
              id="translate-element"
              className="text-white px-[14px] py-[6px] rounded-md transition-all duration-500 bg-gradient-to-tl to-[#9C89B8] via-[#F0A6CA] from-[#DEC0F1] bg-size-200 bg-pos-0 hover:bg-pos-100"
              href={"/CV_Jorge_Plasencia.pdf"}
              download="CV_JorgePlasencia.pdf"
            >
              <span>Download CV</span>
            </a>
          </div>
          <Blocks blocks={blocks} />
        </div>
      </div>
    </div>
  );
};

export default Home;
