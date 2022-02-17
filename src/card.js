import React from "react";
import "./css/buttons.css";
import "./css/dark_mode.css";
import "./css/layout.css";
import "./css/color_palette.css";
import MyPhoto from "./Images/Untitled.png";
import ReactRoundedImage from "react-rounded-image";
import CV from "/Users/jorgeplasencia/Scripts/React/personal-website/src/CV_Jorge_Plasencia_Ahm_Jorgensen.pdf"

function Card() {


    const clickGit = () =>{
        window.open("https://github.com/WaberHoruhe")
    }
    const clickLinked = () =>{
        window.open("https://www.linkedin.com/in/jorgeplasenciaa/")
    }
    const clickTwitter = () =>{
        window.open("https://twitter.com/JorgePAJ")
    }


  return (
    <body class="p-layout">
      <div class="center-image">
        <ReactRoundedImage
        image={MyPhoto}
        roundedSize="0"
        imageWidth="120"
        imageHeight="120"
      />
      </div>
      <h1 class="">Jorge Plasencia</h1>
      <p class="p-silver-500">C.S. Student & Web Developer</p>
      <a href={CV} download="CV_JorgePlasencia" target='_blank'>
        <button class="p-btn p-prim-col p-btn-sm btn-high">Download CV</button>
      </a>
      <div class="btn-group"> 
        <button onClick={clickGit} class="p-btn">
          <span class="icon-social-github" />
          ㅤGitHub
        </button>
        <button onClick={clickLinked} class="p-btn">
            <span class="icon-social-linkedin"/>
            ㅤLinkedIn
        </button>
        <button onClick={clickTwitter} class="p-btn">
            <span class="icon-social-twitter"/>
            ㅤTwitter
        </button>
      </div>

      
    </body>
  );
}

export { Card };
