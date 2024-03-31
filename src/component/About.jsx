import React from "react";
import "./Css/content.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="content">
        <div className="header">
          <a>
            <Link to="/">Thanawin Suyanan, Nine</Link>
          </a>
        </div>
        <div className="body">
          <div className="profile">
            <h2 className="tags">Information</h2>
            <div className="subtags">
              <a>
                <b>Address</b> : 146 Moo.3 Ban Mae Tuen
              </a>
            </div>
            <div className="subtags">
              <a>
                <b>Subdistinct</b> : Mae Tuen
              </a>
            </div>
            <div className="subtags">
              <a>
                <b>Distinct</b> : Li
              </a>
            </div>
            <div className="subtags">
              <a>
                <b>Province</b> : Lamphun
              </a>
            </div>
          </div>
          <div className="profile">
            <h2 className="tags">Education</h2>
            <div className="subtags">
              <a>
                <b>High school</b> : TheeraKarn Banhong school
              </a>
            </div>
            <div className="subtags">
              <a>
                <b>University</b> : Chaing Mai university
              </a>
              <a>Faculty of Science, Computer Science</a>
            </div>
            <div className="subtags">
              <a>
                <b>Internship</b> : Seagate Techology
              </a>
            </div>
          </div>
          <div className="profile">
            <h2 className="tags">Skills</h2>
            <div className="subtags">
              <a>
                <b>Language</b> : Thai, English
              </a>
            </div>
            <div className="subtags">
              <a>
                <b>Programming</b> : Javascript, Python, HTML, SQL
              </a>
            </div>
            <div className="subtags">
              {" "}
              <a>
                <b>Tools</b> : Figma, Visual Studio Code, Microsoft Office, Unity, DBeaver
              </a>
            </div>
          </div>
          <div className="profile">
            <h2 className="tags">Contact</h2>
            <div className="subtags">
              <a>
                <b>Email</b> : <a>th.suyanan@gmail.com</a>
              </a>
            </div>
            <div className="subtags">
              <a>
                <b>LinkedIn</b> :{" "}
                <a
                  className="link"
                  href="https://www.linkedin.com/in/thanawin-suyanan-209892258/?trk=opento_sprofile_topcard"
                >
                  Thanawin Suyanan
                </a>
              </a>
            </div>
            <div className="subtags">
              <a>
                <b>Tel.</b> : 091-836-3210
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
