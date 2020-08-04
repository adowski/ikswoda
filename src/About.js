import React from "react";

import "./About.css";

class About extends React.Component {
  render() {
    return (
      <>
        <div className="about-container">
          <div className="about-section">
            <h3 className="about-title">I want to make a difference.</h3>
            <div className="about-desc">
              <ul>
                <li>
                  <b>I thrive off of mission-driven work</b> -- whether that
                  means working with government agencies to build better and
                  more accessible technology, working with nonprofits to develop
                  an app that will help them better serve their communities, or
                  leading a club that inspires students to pursue alternative
                  routes in the tech world.
                </li>
                <li>
                  <b>I want to do this for the rest of my life.</b> If you have
                  experience looking for or doing mission-driven work, please
                  reach out!
                </li>
              </ul>
            </div>
          </div>
          <div className="about-section">
            <h3 className="about-title">
              I'm graduating from UC Berkeley in Spring 2021
            </h3>
            <div className="about-desc">
              <ul>
                <li>with a B.A. in Computer Science</li>
                <li>previously @ Phillips Exeter Academy ('17)</li>
              </ul>
            </div>
          </div>
          <div className="about-section">
            <h3 className="about-title">
              I'm from New Jersey, but I consider NJ, NH, and CA home.
            </h3>
            <div className="about-desc">
              <ul>
                <li>honestly, I have no idea which coast is better</li>
                <li>
                  the West Coast has better food, but the East Coast has better
                  seasons
                </li>
              </ul>
            </div>
          </div>
          <div className="about-section">
            <h3 className="about-title">
              I absolutely love the following TV Shows:
            </h3>
            <div className="about-desc">
              <ul>
                <li>
                  <b>Killing Eve</b> -- Cat-and-mouse game between a female
                  assassin and female MI6 agent. Lots of queer content
                </li>
                <li>
                  <b>Psych</b> -- "Psychic" detective and best friend solve
                  crimes together, along with a few other friends. #Shules
                </li>
                <li>
                  <b>Haikyuu</b> -- Super wholesome high school volleyball team
                  supports and brings out the best in each other!!!
                </li>
                <li>
                  <b>Fullmetal Alchemist</b> -- Two alchemist brothers try to
                  get their original bodies back. I'm 1/4 through this one so no
                  spoilers!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
