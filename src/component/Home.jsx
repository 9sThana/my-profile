import React from "react";
import resume from "../assets/resume.pdf";
import { Link, Route } from "react-router-dom";

function Home() {
  // function toggleHam() {
  //   const hamMenu = document.querySelector(".ham-menu");
  //   hamMenu.classList.toggle("change");

  //   let myMenu = document.getElementById("myMenu");
  //   if (myMenu.className === "menu") {
  //     myMenu.className += " menu-active";
  //   } else {
  //     myMenu.className = "menu";
  //   }
  // }

  return (
    <>
      <div className="container">
        <div className="info">
          <h1>Hi, </h1>
          <h2>
            You can call me "<u>Nine</u>
            ".
          </h2>
          <h2>Nice to meet you.</h2>
          <div className="skill-list">
            <h3>Front-end Developer</h3>
            <h3>Full-stack Developer</h3>
            <h3>UX/UI Designer</h3>
          </div>
        </div>
        <div className="nav">
          <ul className="menu">
            <li>
              <a>
                <Link to="/about">About</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/project">Project</Link>
              </a>
            </li>
            <li>
              <a href={resume}>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
