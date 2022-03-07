import React from "react";

import { Info } from "./info.js";
import { LinkTree } from "./linktree";

function Card() {
  return (
    <div className="">
      <div className=""><Info/></div>
      <div className=""><LinkTree/></div>
    </div>
  );
}

export { Card };
