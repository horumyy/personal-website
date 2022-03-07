import React from "react";
import "./styles/buttons.css";

function LinkTree() {
  const clickGit = () => {
    window.open("https://github.com/WaberHoruhe");
  };
  const clickLinked = () => {
    window.open("https://www.linkedin.com/in/jorgeplasenciaa/");
  };
  const clickTwitter = () => {
    window.open("https://twitter.com/JorgePAJ");
  };
  return (
    <div>
      <div className="btn-group">
        <button onClick={clickGit} className="p-btn p">
          <span className="icon-social-github" />
          ㅤGitHub
        </button>
        <button onClick={clickLinked} className="p-btn p">
          <span className="icon-social-linkedin" />
          ㅤLinkedIn
        </button>
        <button onClick={clickTwitter} className="p-btn p">
          <span className="icon-social-twitter" />
          ㅤTwitter
        </button>
      </div>
    </div>
  );
}

export { LinkTree };
