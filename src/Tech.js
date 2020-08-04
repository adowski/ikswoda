import React from "react";
import volta from './img/volta.png';
import unloop2 from './img/unloop2.png';
import login from './img/login.png';

import './Tech.css';


class Tech extends React.Component {
  render() {
    return (
        <>
        <div className="tech-content">
          <h3 className="tech-title3">Blueprint, Tech for Nonprofits</h3>
          <div className="tech-container3">
            <div className="tech-desc">
              <a
                rel="noopener noreferrer"
                target="_blank"
                class="link-orange"
                href="https://calblueprint.org/"
              >
                Blueprint
              </a>{" "}
              is a{" "}
              <b>
                student-run club at Berkeley that designs and builds
                applications pro-bono for nonprofits
              </b>
              . I've found some of my favorite people here, as well as built
              some pretty cool things.
            </div>
            <hr class="dashed" />
            <div className="unloop-container">
              <div className="unloop-content">
                <h3 className="unloop-title">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    class="link-orange"
                    href="https://github.com/calblueprint/unloop"
                  >
                    Unloop
                  </a>
                </h3>
                <div className="unloop-desc">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    class="link-orange"
                    href="https://www.un-loop.org/"
                  >
                    Unloop is a{" "}
                    <b>
                      nonprofit that provides a pipeline from prison to tech
                      through education, support, and opportunity
                    </b>
                  </a>{" "}
                  . I worked on the Blueprint team as a project leader, leading
                  a team of four developers and a designer to successful
                  completion of the project's MVP.
                </div>
              </div>
              <img
                className="unloop-img"
                src={unloop2}
                alt="unloop app designs"
              />
            </div>
            <hr class="dashed" />
            <div className="unloop-container">
              <div className="unloop-content">
                <h3 className="unloop-title">Other Exciting Things</h3>
                <div className="unloop-desc">
                  <b>This summer and fall (2020), I will be a co-president</b>,
                  working to find five nonprofits to build with for the year,
                  iterate on our recruitment processes to be equitable and
                  anti-racist, and foster important discussion around DEI in
                  tech.
                  <br />
                  In the past, <b>I've developed on the SFAI </b>(
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    class="link-orange"
                    href="https://sfai.edu/"
                  >
                    nonprofit
                  </a>
                  ,
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    class="link-orange"
                    href="https://registry.sfai.edu/"
                  >
                    {" "}
                    project
                  </a>
                  ) and <b>Homepointr </b>(
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    class="link-orange"
                    href="https://homepointr.com/"
                  >
                    nonprofit
                  </a>
                  ,
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    class="link-orange"
                    href="https://github.com/calblueprint/HomePointrCIC"
                  >
                    {" "}
                    project
                  </a>
                  ) teams.
                </div>
              </div>
            </div>
          </div>
          <h3 className="tech-title1">18F : Civic Digital Fellowship</h3>
          <div className="tech-container1">
            <div className="tech-desc">
              CDF is a fellowship under{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                class="link-orange"
                href="https://www.codingitforward.com/"
              >
                Coding it Forward
              </a>{" "}
              that is <b>working to bring students into the civic tech space</b>
              .
            </div>
            <hr class="dashed" />
            <div className="login-container">
              <h3 className="login-title">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  class="link-orange"
                  href="https://github.com/18F/identity-idp"
                >
                  Login.gov
                </a>
              </h3>
              <div className="login-content">
                <img className="login-img" src={login} alt="login.gov logo" />
                <div className="login-desc">
                  In summer 2019,{" "}
                  <b>
                    I interned as a software developer on the{" "}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      class="link-orange"
                      href="https://login.gov"
                    >
                      Login.gov
                    </a>{" "}
                    app dev team
                  </b>
                  . Along with that, I got to visit NASA, the USDS, and the FTC,
                  meet some of the most amazing people, and live in Washington,
                  DC.
                </div>
              </div>
            </div>
          </div>
          <h3 className="tech-title2">Volta Labs</h3>
          <div className="tech-container2">
            <div className="unloop-container">
              <img className="volta-img" src={volta} alt="volta logo" />
              <div className="unloop-content">
                <h3 className="unloop-title">SWE Intern</h3>
                <div className="unloop-desc">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    class="link-orange"
                    href="https://www.voltalabs.co/about"
                  >
                    Volta Labs
                  </a>{" "}
                  is a{" "}
                  <b>
                    biotech startup working to automate biological protocols
                  </b>
                  . I worked on designing and building their newest platform to
                  help biologists build workflows.
                </div>
                {/* , designing and building an app from scratch to allow biologists to build workflows. */}
              </div>
            </div>
          </div>
        </div>
        
      </>
    );
  }
}

export default Tech;
