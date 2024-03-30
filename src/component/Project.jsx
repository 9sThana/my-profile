import React from "react";
import "./Css/content.css";

function Project() {
  return (
    <>
      <div className="content">
        <div className="header">
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
            <h2 className="tags">TH.9 Profile web application</h2>
            <div className="subtags">
              <a>
                <b>Details : </b> This is web application is show about my
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
                href="https://www.figma.com/file/rI1uoclNcyiy89DxH0agLN/CMUGoods-Sys.?type=design&node-id=0%3A1&mode=design&t=gR9uvZ66eAPXnHgF-1"
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
