import React from "react";
import "./Css/content.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

//Import asset section
import resume from "../assets/resume.pdf";
import tkblogo from "../assets/tkb.png";
import cmulogo from "../assets/cmu.png";
import seagatelogo from "../assets/seagate.png";

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
          <a>
            All about "<u>Nine</u>"
          </a>
        </div>
        <div className="body">
          <div className="profile">
            <h2 className="tags">Introducing</h2>
            <div className="subtags">
              <a className="para">
                Hi,
                <br />
                My name is Thanawin Suyanan, You can call me Nine. <br />
                I'm a junior front-end developer. During my internship at
                Seagate Technology (Thailand), I developed numerous web
                applications using React.js. I'm passionate about creating
                beautiful interfaces and user-friendly web designs.
                <br />
                <br />
                In my opinion, a good web application is one that is easy to
                use.
              </a>
            </div>
          </div>
          <div className="profile">
            <h2 className="tags">Education</h2>
            <div className="card-list">
              <div className="card">
                <div className="subtags">
                  <div className="logo">
                    <img src={tkblogo} />
                  </div>
                  <a>
                    <b>High school</b> : TheeraKarn Banhong school
                  </a>
                  <a>Mathematics - Science program</a>
                  <a>Since 2014 - 2020</a>
                  <a>GPAX : 3.62</a>
                </div>
              </div>
              <div className="card">
                <div className="subtags">
                  <div className="logo">
                    <img src={cmulogo} />
                  </div>
                  <a>
                    <b>University</b> : Chaing Mai university
                  </a>
                  <a>Faculty of Science, Computer Science</a>
                  <a>Since 2020 - 2024</a>
                  <a>GPAX : 2.82</a>
                </div>
              </div>
            </div>
          </div>
          <div className="profile">
            <h2 className="tags">Work experience</h2>
            <div className="card-list">
              <div className="card">
                <div className="subtags">
                  <div className="logo">
                    <img src={seagatelogo} />
                  </div>
                  <a>
                    <b>Internship</b> : Seagate Techology
                  </a>
                  <a>As full-stack developer</a>
                  <a>April, 2023 - September, 2023</a>
                  <a>
                    Developed web application to support engineers in Maintenace
                    engineer team
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="profile">
            <h2 className="tags">Skills</h2>
            <div className="box">
              <h3>Languages</h3>
              <div className="card-list">
                <div className="mini-card">
                  <div className="subtags">
                    <a>Thai</a>
                  </div>
                </div>
                <div className="mini-card">
                  <div className="subtags">
                    <a>English</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <h3>Tech stack</h3>
              <div className="card-list">
                <div className="mini-card">
                  <div className="subtags">
                    <a>React.js</a>
                  </div>
                </div>
                <div className="mini-card">
                  <div className="subtags">
                    <a>Javascript</a>
                  </div>
                </div>
                <div className="mini-card">
                  <div className="subtags">
                    <a>HTML</a>
                  </div>
                </div>
                <div className="mini-card">
                  <div className="subtags">
                    <a>CSS</a>
                  </div>
                </div>
                <div className="mini-card">
                  <div className="subtags">
                    <a>Python</a>
                  </div>
                </div>
                <div className="mini-card">
                  <div className="subtags">
                    <a>Node.js</a>
                  </div>
                </div>
                <div className="mini-card">
                  <div className="subtags">
                    <a>C#</a>
                  </div>
                </div>
                <div className="mini-card">
                  <div className="subtags">
                    <a>MySQL</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <h3>Tools</h3>
              <div className="card-list">
                <div className="mini-card">
                  <div className="subtags">
                    <a>Visual Studio Code</a>
                  </div>
                </div>
                <div className="mini-card">
                  <div className="subtags">
                    <a>Microsoft office</a>
                  </div>
                </div>
                <div className="mini-card">
                  <div className="subtags">
                    <a>DBeaver</a>
                  </div>
                </div>
                <div className="mini-card">
                  <div className="subtags">
                    <a>Figma</a>
                  </div>
                </div>
                <div className="mini-card">
                  <div className="subtags">
                    <a>Unity</a>
                  </div>
                </div>
              </div>
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
            <div className="subtags">
              <a className="btn" href={resume}>
                Get my resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
