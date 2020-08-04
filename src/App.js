import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import places from "./img/places.png";
import clouds from "./img/clouds.png";
import coding from "./img/coding.png";
import art from "./img/art.png";
import linkedin from "./img/linkedin.svg";
import twitter from "./img/twitter.svg";
import plane from "./img/plane.svg";
import github from "./img/github.svg";

import Art from "./Art";
import Tech from "./Tech";
import About from "./About";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 3,
      prevIndex: 3
    };
  }

  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }

  renderIntroPage() {
    return (
      <div>
        <div className="intro-container">
          <h1 className="intro">Alison Dowski</h1>
          <div className="links">
            <div>
              <a class="link-orange" href="#artist">
                artist
              </a>
            </div>
            <div>
              <a class="link-orange" href="#tech">
                technologist
              </a>
            </div>
            <div className="link-long">
              <a class="link-orange" href="#student">
                student, musician, photographer, equestrian, digital art
                enthusiast, curator of spotify playlists
              </a>
            </div>
          </div>
        </div>
        <div className="block-gradient" />
        <div className="block-img" />
        <img src={clouds} className="intro-clouds-img" alt="circle of places" />
        <img src={places} className="intro-places-img" alt="circle of places" />
      </div>
    );
  }

  renderAboutLinks() {
    return (
      <div className="heading-info">
        <div className="heading-links">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/alison-dowski/"
            title="LinkedIn"
          >
            <img className="heading-link" src={linkedin} alt="linkedin" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/adowski"
            title="GitHub"
          >
            <img className="heading-link" src={github} alt="github" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/alisondowsk/"
            title="Twitter"
          >
            <img className="heading-link" src={twitter} alt="twitter" />
          </a>
          <img
            className="heading-link"
            src={plane}
            alt="resume"
            title="Resume"
          />
        </div>
        <div className="email">adowski (at) berkeley (dot) edu</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="landing-container">{this.renderIntroPage()}</div>

        <div id="artist" className="other-page-container">
          <div className="heading">
            <h1 className="art-heading">art</h1>
          </div>
          <Art />
          <img
            data-aos="fade-left"
            data-aos-offset="-100"
            src={art}
            className="art-img"
            alt="logo"
          />
        </div>

        <div id="tech" className="other-page-container">
          <div className="heading">
            <h1 className="tech-heading">tech</h1>
          </div>
          <Tech />
          <img
            data-aos="fade-right"
            data-aos-offset="-100"
            src={coding}
            className="coding-img"
            alt="logo"
          />
        </div>

        <div id="student" className="other-page-container">
          <div className="heading">
            <h1 className="about-heading">hi, I'm Alison! and...</h1>
            {this.renderAboutLinks()}
          </div>
          <About />
        </div>
      </div>
    );
  }
}

export default App;
