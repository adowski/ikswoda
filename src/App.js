import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import art from './img/art.png';
import whiteSands from './img/19-3.png';
import glassAnimals from './img/17.jpeg';
import sinking from './img/19.png';
import coding from './img/coding.png';
import './App.css';
import HorizontalTimeline from 'react-horizontal-timeline';
import TimelineCard from './TimelineCard';
import { SwitchTransition, CSSTransition } from "react-transition-group";

const VALUES = [ '2018-08-02', '2019-01-20', '2020-11-01', '2020-12-01', '2021-01-01' ];
const artWords = {
  'one': {
    'title': 'Retrospective',
    'desc': 'Hello my name is Alison and here is my art that I would like to talk about today it is very cool here I am hahahhhahaah',
    'img': glassAnimals
  },
  'two': {
    'title': 'White Sands',
    'desc': 'Hello my name is Alison and here is my art that I would like to talk about today it is very cool here I am hahahhhahaah',
    'img': whiteSands
  },
  'three': {
    'title': 'Sinking',
    'desc': 'Hello my name is Alison and here is my art that I would like to talk about today it is very cool here I am hahahhhahaah',
    'img': sinking
  },
}

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
  

  render() {
    return (

      <div>
        <div className='landing-container'>
          <div className='intro-container'>
            <h1 className='intro'>Alison Dowski</h1>
            <div className='links'>
              <div className='link-orange'>
                <a href='#artist'>artist</a>
              </div>
              <div className='link-blue'>
                <a href='#tech'>technologist</a>
              </div>
              <div className='link-green link-long'>
                <a href='#student'>student, musician, curator of spotify playlists</a>
              </div>
            </div>
          </div>
          
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
              classNames='fade'
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
          <img data-aos='fade-right' data-aos-offset='-100' src={coding} className='coding-img' alt='logo' />
        </div>
        <div id='student' className='landing-container'>
          <div className='heading'>
            <h1 className='about-heading'>about me</h1>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
