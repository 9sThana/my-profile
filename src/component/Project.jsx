import React from "react";
import "./Css/content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Project() {
  return (
    <>
      <div className="content">
        <div className="header">
          <Link to="/">
            <div className="back">
              <FontAwesomeIcon icon={faChevronLeft} className="buttons" />
            </div>
          </Link>

          <p>My Previous Project</p>
        </div>
        <div className="body">
          <div className="profile">
            <h2 className="tags">CMU Durable Goods Management system</h2>
            <div className="subtags">
              <a>
                <b>Details : </b> This is 204365 Human Computer Interaction in
                class project.
              </a>
            </div>
            <div className="subtags">
              <a className="lists">
                <b>Scope :</b>
                <ul>
                  <li>
                    <a>Design UX/UI of mock program</a>
                  </li>
                  <li>
                    <a>Making interaction prototype</a>
                  </li>
                  <li>
                    <a>Make user interface look easier</a>
                  </li>
                </ul>
              </a>
            </div>
            <div className="subtags">
              <a
                className="navigate"
                href="https://www.figma.com/file/rI1uoclNcyiy89DxH0agLN/CMUGoods-Sys.?type=design&node-id=0%3A1&mode=design&t=gR9uvZ66eAPXnHgF-1"
              >
                <b>See this on figma</b>
              </a>
            </div>
          </div>
          <div className="profile">
            <h2 className="tags">Equation Smasher</h2>
            <div className="subtags">
              <a>
                <b>Details : </b> This is 204312 Simulation & Experience reality
                design in class project (VR/AR).
              </a>
            </div>
            <div className="subtags">
              <a className="lists">
                <b>Scope :</b>
                <ul>
                  <li>
                    <a>Design gameplay</a>
                  </li>
                  <li>
                    <a>Create logic with C# script in Unity</a>
                  </li>
                </ul>
              </a>
            </div>
            <div className="subtags">
              <a
                className="navigate"
                href="https://www.canva.com/design/DAGBE8EsadY/wzmUNbNn2OHxc-5GF4H0Eg/view?utm_content=DAGBE8EsadY&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              >
                <b>See presentation on Canva</b>
              </a>
              <a
                className="navigate"
                href="https://www.youtube.com/watch?v=DFplYQ6oWTA"
              >
                <b>See video on Youtube</b>
              </a>
            </div>
          </div>
          <div className="profile">
            <h2 className="tags">TH.9 Profile web application</h2>
            <div className="subtags">
              <a>
                <b>Details : </b> This is web application that show about my
                information, skills and my previous project.
              </a>
            </div>
            <div className="subtags">
              <a className="lists">
                <b>Scope :</b>
                <ul>
                  <li>
                    <a>Create this web application with ReactJS</a>
                  </li>
                </ul>
              </a>
            </div>
            <div className="subtags">
              <a
                className="navigate"
                href="https://github.com/9sThana/my-profile"
              >
                <b>See this on Github</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
