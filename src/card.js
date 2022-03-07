import React from "react";

import { Info } from "./info.js";
import { LinkTree } from "./linktree";

function Card() {
  return (
    <div className="p-layout flex-container">
      <div className="flex-child landscapeInfo"><Info/></div>
      <div className="flex-child"><LinkTree/></div>
    </div>
  );
}

export { Card };
