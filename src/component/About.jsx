import React from "react";
import "./Css/content.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <div className="content">
        <div className="header">
          <Link to="/">
            <div className="back">
              <FontAwesomeIcon icon={faChevronLeft} className="buttons" />
            </div>
          </Link>
          <a>Thanawin Suyanan, Nine</a>
        </div>
        <div className="body">
          <div className="profile">
            <h2 className="tags">Information</h2>
            <div className="subtags">
              <a>
                <b>Address</b> : 146 Moo.3 Mae Tuen village
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
              <a>Math - Science program</a>
              <a>GPAX : 3.62</a>
            </div>
            <div className="subtags">
              <a>
                <b>University</b> : Chaing Mai university
              </a>
              <a>Faculty of Science, Computer Science</a>
              <a>GPAX : 2.82</a>
            </div>
            <div className="subtags">
              <a>
                <b>Internship</b> : Seagate Techology
              </a>
              <a>April, 2023 - September, 2023 as full-stack developer</a>
              <a>
                Developed web application to support engineers in Maintenace
                engineer team
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
                <b>Programming</b> :React.Js, Javascript, Python, HTML, SQL
              </a>
            </div>
            <div className="subtags">
              <a>
                <b>Tools</b> : Figma, Visual Studio Code, Microsoft Office,
                Unity, DBeaver
              </a>
            </div>
          </div>
          <div className="profile">
            <h2 className="tags">Contact</h2>
            <div className="subtags">
              <a>
                <b>Email</b> :{" "}
                <a className="link" href="mailto:th.suyanan@gmail.com">
                  th.suyanan@gmail.com
                </a>
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
