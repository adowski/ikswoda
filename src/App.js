import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import art from './img/art.png';
import places from './img/places.png';
import clouds from './img/clouds.png';
import whiteSands from './img/19-3.png';
import glassAnimals from './img/17.jpeg';
import sinking from './img/19.png';
import coding from './img/coding.png';
import linkedin from './img/linkedin.svg';
import twitter from './img/twitter.svg';
import plane from './img/plane.svg';
import github from './img/github.svg';
import './App.css';
import HorizontalTimeline from 'react-horizontal-timeline';
import TimelineCard from './TimelineCard';
import { SwitchTransition, CSSTransition } from "react-transition-group";

const VALUES = [ '2018-08-02', '2019-01-20', '2020-11-01', '2020-12-01', '2021-01-01' ];
const artWords = {
  'one': {
    'title': 'Retrospective',
    'desc': 'My favorite thing to do during this time was draw with colored pencils, and my favorite album at the time (and now) was the Glass Animals\' How to Be a Human Being, so naturally, I drew this piece that was inspired by their album colors.',
    'img': glassAnimals
  },
  'two': {
    'title': 'White Sands',
    'desc': '2019 marked the beginning of me getting back into digital art (I had a huge phase back in 2011 when I got my first tablet)! I gained inspiration for the background from a national park in my roommate\'s home state (NM).',
    'img': whiteSands
  },
  'three': {
    'title': 'Sinking',
    'desc': 'Fall semester of my junior year, I took a student-run class called the Photoshop and Illustrator decal. Our assignment for this one was to create a meaningful image using text.',
    'img': sinking
  },
}

const techWords = [
  {
    'title': 'Beep Boop',
    'desc': 'ugh ugh ugh',
    'link': 'google.com'
  }
]

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      index: 1,
      prevIndex: 0
    }
  }

  componentDidMount() {
    AOS.init({
      duration: 1000
     });
  }

  renderTimelineContent() {
    let index = this.state.index;
    let content;

    switch (index) {
      case 0:
        content = 
          <TimelineCard
            title={artWords.one.title}
            text={artWords.one.desc}
            img={artWords.one.img}
          />
        break;
      
      case 1:
        content = 
          <TimelineCard
            title={artWords.two.title}
            text={artWords.two.desc}
            img={artWords.two.img}
          />
        break;
      case 2:
        content = 
          <TimelineCard
            title={artWords.three.title}
            text={artWords.three.desc}
            img={artWords.three.img}
          />
        break;
      default:
        break;
    }

    return content;
  }

  renderTechContent() {
    let techContent = [];

    // for (let i = 0; i < 9; i += 1) {
      techContent.push(
        <div className='tech-container1'>
          <div className='tech-img'/>
          <h3 className='tech-title'>
            {techWords[0].title}
          </h3>
          <div className='tech-desc'>
            {techWords[0].desc}
          </div>
        </div>
      )
    // }

    techContent.push(
      <div className='tech-container2'>
        <div className='tech-img'/>
        <h3 className='tech-title'>
          {techWords[0].title}
        </h3>
        <div className='tech-desc'>
          {techWords[0].desc}
        </div>
      </div>
    )

    // techWords.forEach((tech) => {
    //   techContent.push(
    //     <div className='tech-container'>
    //       <div className='tech-img'/>
    //       <h3 className='tech-title'>
    //         {tech.title}
    //       </h3>
    //       <div className='tech-desc'>
    //         {tech.desc}
    //       </div>
    //     </div>
    //   )
    // });

    return <div className='tech-content'>{techContent}</div>
  }
  

  render() {
    return (

      <div>
        <div className='landing-container'>
          <div className='intro-container'>
            <h1 className='intro'>Alison Dowski</h1>
            <div className='links'>
              <div>
                <a class='link-orange' href='#artist'>artist</a>
              </div>
              <div>
                <a class='link-orange' href='#tech'>technologist</a>
              </div>
              <div className='link-long'>
                <a class='link-orange' href='#student'>student, musician, equestrian, digital art enthusiast, curator of spotify playlists</a>
              </div>
            </div>
            
          </div>
          <div className='block-gradient'/>
          <div className='block-img'/>
          <img src={clouds} className='intro-clouds-img' alt='circle of places'/>
          <img src={places} className='intro-places-img' alt='circle of places'/>
          
        </div>
        <div id='artist' className='landing-container'>
          <div className='heading'>
            <h1 className='art-heading'>art</h1>
          </div>
          <div className='timeline'>
            <HorizontalTimeline
              index={this.state.index}
              indexClick={(index) => {
                this.setState({ 
                  index: index, 
                  prevIndex: this.state.index
                });
              }}
              getLabel={ function(date) { 
                let dateObj = new Date(date);
                let month = dateObj.toLocaleString('default', { month: 'short' });
                let year = dateObj.getFullYear();
                return `${month} ${year}`; 
              } }
              values={ VALUES } 
              styles={{ 
                background: '#fffced',  
                foreground: '#ff9901', 
                outline: '#e0daba' 
              }}
              minEventPadding={100}
              maxEventPadding={100}
            />
            {/* {this.renderTimelineContent()} */}
          </div>
          {/* <div className='timeline-content'> */}
          <SwitchTransition mode='out-in'>
            <CSSTransition
              key={this.state.index}
              addEndListener={(node, done) => {
                node.addEventListener('transitionend', done, false);
              }}
              classNames={this.state.index > this.state.prevIndex ? 'fade1' : 'fade2'}
            >
              {this.renderTimelineContent()}
            </CSSTransition>
          </SwitchTransition>
          {/* </div> */}
          
          <img data-aos='fade-left' data-aos-offset='-100' src={art} className='art-img' alt='logo' />
        </div>
        <div id='tech' className='landing-container'>
          <div className='heading'>
            <h1 className='tech-heading'>tech</h1>
          </div>
          {this.renderTechContent()}
          <img data-aos='fade-right' data-aos-offset='-100' src={coding} className='coding-img' alt='logo' />
        </div>
        <div id='student' className='landing-container'>
          <div className='heading'>
            <h1 className='about-heading'>hi, I'm Alison! and...</h1>
            <div className='heading-links'>
              <a rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/alison-dowski/'>
                <img className='heading-link' src={linkedin} alt='linkedin'/>
              </a>
              <a rel='noopener noreferrer' target='_blank' href='https://github.com/adowski'>
                <img className='heading-link' src={github} alt='github'/>
              </a>
              <a rel='noopener noreferrer' target='_blank' href='https://twitter.com/alisondowsk/'>
                <img className='heading-link' src={twitter} alt='twitter'/>
              </a>
              <img className='heading-link' src={plane} alt='resume'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
