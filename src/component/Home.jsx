import React from "react";
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
          <h1>Thanawin Suyanan</h1>
          <h3>Front-end Developer</h3>
          <h3>UX/UI Designer</h3>
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
              <a href="https://github.com/9sThana/my-profile/blob/main/src/assets/resume.pdf">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
