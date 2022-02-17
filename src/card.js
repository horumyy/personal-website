import React from "react";
import "./css/buttons.css";
import "./css/dark_mode.css";
import "./css/layout.css";
import "./css/color_palette.css";
import "./css/landscape.css"
import { Info } from "./info.js";
import { LinkTree } from "./linktree";

function Card() {
  return (
    <body className="p-layout flex-container">
      <div className="flex-child landscapeInfo"><Info/></div>
      <div className="flex-child"><LinkTree/></div>
    </body>
  );
}

export { Card };
