import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Navbar, NavItem, Nav, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";

function App() {
  return (
    <div>
      <div id="header" className="header-area">
        <div className="overlay-section">
          <div className="top-bar">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12">
                  <div>
                    <a href="index.html" className="headerTitle">
                      Cláudio Lopes
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12">
                  <ul className="">
                    <a
                      href="#aboutMe"
                      className="btn-style-one btn-style-topbar"
                    >
                      About me
                    </a>
                    <a href="#work" className="btn-style-one btn-style-topbar">
                      Work
                    </a>

                    <a href="#links" className="btn-style-one btn-style-topbar">
                      Links
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-content container">
            <div className="inner-content">
              <h1>Greetings!</h1>

              <h1>
                My name is Cláudio and I'm an Outsystems Fullstack Developer
                getting into the UX/UI environment, currently based in Lisbon,
                Portugal.
              </h1>
              <h1>This is my website!</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutme-area">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="title-body">
                <a className="anchor" id="aboutMe"></a>

                <h2>About Me</h2>
                <p>
                  Graduated in <b>Computer Engineering</b> in 2017 and in the
                  process of finishing a Master's Degree in <b>Multimedia</b>.
                  Designated by ISCTE as <b>ISTA Top Talent</b> in the 2018. I
                  see myself as a
                  <b>collaborative, easy to work with and efficient</b>{" "}
                  co-worker, who can get along very well and work in teams.
                  Always looking to
                  <b>learn and improve</b> by absorving knowledge from everyone
                  I get along with. Discovered the world of
                  <b>User Experience</b> in the later days of my Bachelor's
                  Degree and since then I've been aiming to enter into this
                  universe. Always enjoyed{" "}
                  <b>analysing the user and its interactions</b> in every
                  project I'm in. Currently employed as an Outsystems, Front-end
                  focused, Fullstack developer for CGI since March, 2019.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row rowSection">
            <div className="col-md-6 col-sm-6">
              <div className="dom-list">
                <h4>Education</h4>
                <h5>ISCTE-Instituto Universitário de Lisboa</h5>
                <h6>Bachelor's Degree in Computer Engineering 2014-2017</h6>
                <h6>
                  Master's Degree in Multimedia Applied to Computer Engineering
                  2017-(to be completed)
                </h6>
                <h6>
                  Postgraduate in Multimedia Applied to Computer Engineering
                  (2017-2018)
                </h6>
                <h6>
                  ISTA Top Talent 2018 - Student of Merit in the Academic Year
                  of 2017-18
                </h6>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="dom-list">
                <h4>Work</h4>
                <h5>CGI</h5>
                <h6>Outsystems Consultant</h6>
                <h6>March, 2019 - Present</h6>
              </div>
            </div>
          </div>
          <div className="row rowSection">
            <div className="col-md-6 col-sm-6">
              <div className="dom-list">
                <h5>Soft Skills</h5>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <h6>Adaptability</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Teamwork</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Communication</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Motivation</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Proactivity</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Autonomy</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Problem-Solving</h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <div className="dom-list">
                <h5>Technical Skills</h5>
                <table class="table">
                  <tbody>
                    <tr>
                      <td>
                        <h6>Outsystems</h6>
                      </td>
                      <td>
                        <ProgressBar now={85} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>HTML</h6>
                      </td>
                      <td>
                        <ProgressBar now={89} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>CSS</h6>
                      </td>
                      <td>
                        <ProgressBar now={87} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Java</h6>
                      </td>
                      <td>
                        <ProgressBar now={70} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Usability Testing</h6>
                      </td>
                      <td>
                        <ProgressBar now={72} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Human-Computer Interaction</h6>
                      </td>
                      <td>
                        <ProgressBar now={72} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Prototyping</h6>
                      </td>
                      <td>
                        <ProgressBar now={70} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Heuristic Evaluation</h6>
                      </td>
                      <td>
                        <ProgressBar now={74} />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="table-responsive"></div>
              </div>
            </div>
          </div>
          <div className="row rowSection">
            <div className="col-md-6 col-sm-6">
              <div className="dom-list">
                <h5>Software</h5>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <h6>Outsystems Service Studio</h6>
                        </td>
                        <td>
                          <ProgressBar now={90} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Adobe Photoshop</h6>
                        </td>
                        <td>
                          <ProgressBar now={80} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Adobe Ilustrator</h6>
                        </td>
                        <td>
                          <ProgressBar now={65} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Adobe Xd</h6>
                        </td>
                        <td>
                          <ProgressBar now={68} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Figma</h6>
                        </td>
                        <td>
                          <ProgressBar now={64} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Balsamiq</h6>
                        </td>
                        <td>
                          <ProgressBar now={81} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Eclipse</h6>
                        </td>
                        <td>
                          <ProgressBar now={78} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Unity</h6>
                        </td>
                        <td>
                          <ProgressBar now={64} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Android Studio</h6>
                        </td>
                        <td>
                          <ProgressBar now={74} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <div className="dom-list">
                <h5>Communication</h5>
                <div className="table-responsive">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>
                          <h6>Portuguese (Native)</h6>
                        </td>
                        <td>
                          <ProgressBar now={100} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>English (C1)</h6>
                        </td>
                        <td>
                          <ProgressBar now={80} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Spanish (A2)</h6>
                        </td>
                        <td>
                          <ProgressBar now={65} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="education-work-area">
        <div className="container">
          <div className="row rowSection">
            <div className="col-lg-12">
              <div className="title-body">
                <a className="anchor" id="work"></a>
                <h2>Work</h2>
                <p></p>

                <div>
                  <VerticalTimeline>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="12/2019 - present"
                    >
                      <h3 className="vertical-timeline-element-title">
                        claudiolopes.pt : My own domain!
                      </h3>
                      <p>My personal domain with projects and information</p>
                      <p>HTML, CSS, JavaScript, React</p>
                      <p>Currently in development</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="08/2019 - present"
                    >
                      <h3 className="vertical-timeline-element-title">
                        Outsystems: EDPSU MerCom
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        CGI, Lisbon
                      </h4>
                      <p>
                        Communication and case management for contact center
                      </p>
                      <p>Elitricity Market Values Manager</p>
                      <p>Outsystems Service Studio, CSS, SQL</p>
                      {/* A JSX comment 
            <div>
              <ModalCompnt ref={this.showModalRef}></ModalCompnt>
              <a onClick={this.onShowModalClick}>Detalhes</a>
            </div>*/}
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="04/2019 - 08/2019"
                    >
                      <h3 className="vertical-timeline-element-title">
                        Outsystems: EDP Collect
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        CGI, Lisbon
                      </h4>
                      <p>Billing/payments manager</p>
                      <p>Elitricity Market Values Manager</p>
                      <p>Outsystems Service Studio, CSS, SQL</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="09/2018 - 12/2018"
                    >
                      <h3 className="vertical-timeline-element-title">
                        Media Center Concept
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        ISCTE-IUL, Lisbon
                      </h4>
                      <p>3D Moddeling and printing </p>
                      <p>Usabitlity testing</p>
                      <p>User studying and targeting</p>
                      <p>Low-Fy approach</p>
                      <p>
                        Solid Edge, Photoshop, Nielsen Heuristic, Adobe XD,{" "}
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="09/2018 - 12/2018"
                    >
                      <h3 className="vertical-timeline-element-title">
                        Multi and Singleplayer Question Game
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        ISCTE-IUL, Lisbon
                      </h4>
                      <p>Android</p>
                      <p>Java</p>
                      <p>Photoshop</p>
                      <p>Adobe XD</p>
                      <p>Firebase</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="09/2017 - 12/2017"
                    >
                      <h3 className="vertical-timeline-element-title">
                        'Reddit-like' website
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        ISCTE-IUL, Lisbon
                      </h4>
                      <p>HTML & CSS</p>
                      <p>Python</p>
                      <p>Balsamiq</p>
                      <p>JavaScript</p>
                      <p>
                        Image, Video and/or text Posts, with accounts, comments
                        and upvotes
                      </p>
                      <div id="modalComp"></div>
                    </VerticalTimelineElement>
                  </VerticalTimeline>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="education-work-area">
        <div className="container">
          <div className="row rowSection">
            <div className="col-lg-12">
              <div className="title-body">
                <a
                  style={{ marginTop: "60px" }}
                  className="anchor"
                  id="links"
                ></a>
                <h2>Links</h2>
                <p></p>
                <div></div>

                <div
                  style={{ marginTop: "60px", marginBottom: "60px" }}
                  className="grid-container"
                >
                  <div className="item1">
                    <a href="./files/PortfolioClaudioLopes.pdf" download>
                      <img
                        data-toggle="tooltip"
                        title="Download My Portfolio"
                        src="./files/portfolioCover.png"
                        className="icon"
                      ></img>
                    </a>
                  </div>
                  <div className="item1">
                    <a href="https://www.linkedin.com/in/lopes-claudio/">
                      <img
                        data-toggle="tooltip"
                        title="Check My LinkedIn"
                        src="./files/linkedin.png"
                        className="icon"
                      ></img>
                    </a>
                  </div>
                  <div className="item1">
                    <div>
                      <a href="https://github.com/cjcls-isctept/">
                        <img
                          data-toggle="tooltip"
                          title="Check My Github"
                          src="./files/github-image.png"
                          className="icon"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <div className="footer-content text-center">
                <a href="#">
                  Cláudio <span>Lopes</span>
                </a>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fas fa-rss"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                </ul>
                <p className="footer-company-name">
                  All Rights Reserved. &copy; 2020
                  <a href="#">Cláudio Lopes</a> Design By :
                  <a href="">Cláudio Lopes</a>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
