import React from "react";
import "./Css/content.css";
import resume from "../assets/resume.pdf";

function Resume() {
  return (
    <div>
      <div className="content">
        <div className="body">
          <iframe src={resume} />
        </div>
      </div>
    </div>
  );
}

export default Resume;
