import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import art from './img/art.png';
import places from './img/places.png';
import clouds from './img/clouds.png';
import baby from './img/05.JPG';
import wander from './img/13.jpg';
import whiteSands from './img/19-3.png';
import glassAnimals from './img/17.jpeg';
import sinking from './img/19.png';
import coding from './img/coding.png';
import linkedin from './img/linkedin.svg';
import twitter from './img/twitter.svg';
import plane from './img/plane.svg';
import github from './img/github.svg';
import volta from './img/volta.png';
import unloop2 from './img/unloop2.png';
import login from './img/login.png';
import './App.css';
import HorizontalTimeline from 'react-horizontal-timeline';
import TimelineCard from './TimelineCard';
import { SwitchTransition, CSSTransition } from "react-transition-group";

const VALUES = [ '2005-06-02', '2013-10-02', '2018-08-02', '2019-01-20', '2020-11-01' ];
const artWords = [
  {
    'title': 'Unicorns',
    'desc': 'This is probably the oldest drawing of mine that I have! As you can see, once a horse girl, always a horse girl.',
    'img': baby
  },
  {
    'title': 'Wanderer',
    'desc': 'Ah yes, my good old photography days. Rumor has it I used to be a little bit ~ instagram famous ~. This is Kayla, my friend from NJ who I photographed with :)',
    'img': wander
  },
  {
    'title': 'How to Be a Human Being',
    'desc': 'My favorite thing to do during this time was draw with colored pencils, and my favorite album at the time (and now) was the Glass Animals\' How to Be a Human Being, so naturally, I drew this piece that was inspired by their album colors.',
    'img': glassAnimals
  },
  {
    'title': 'White Sands',
    'desc': '2019 marked the beginning of me getting back into digital art (I had a huge phase back in 2011 when I got my first tablet)! I gained inspiration for the background from a national park in my roommate\'s home state (NM).',
    'img': whiteSands
  },
  {
    'title': 'Sinking',
    'desc': 'Fall semester of my junior year, I took a student-run class called the Photoshop and Illustrator decal. Our assignment for this one was to create a meaningful image using text.',
    'img': sinking
  }
]

const techWords = [
  {
    'title': 'Blueprint, Tech for Nonprofits',
    'desc': 'ugh ugh ugh',
    'link': 'google.com'
  }
]

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      index: 2,
      prevIndex: 2
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
            title={artWords[0].title}
            text={artWords[0].desc}
            img={artWords[0].img}
          />
        break;
      case 1:
        content = 
          <TimelineCard
            title={artWords[1].title}
            text={artWords[1].desc}
            img={artWords[1].img}
          />
        break;
      case 2:
        content = 
          <TimelineCard
            title={artWords[2].title}
            text={artWords[2].desc}
            img={artWords[2].img}
          />
        break;
      case 3:
        content = 
          <TimelineCard
            title={artWords[3].title}
            text={artWords[3].desc}
            img={artWords[3].img}
          />
        break;
      case 4:
        content = 
          <TimelineCard
            title={artWords[4].title}
            text={artWords[4].desc}
            img={artWords[4].img}
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
      <>
        <h3 className='tech-title3'>
            Blueprint, Tech for Nonprofits
        </h3>
        <div className='tech-container3'>
          {/* <div className='tech-img'/> */}
          
          <div className='tech-desc'>
            <a rel='noopener noreferrer' target='_blank' class='link-orange' href='https://calblueprint.org/'>Blueprint</a> is a <b>student-run club at Berkeley that designs and builds applications pro-bono for nonprofits</b>. 
            I've found some of my favorite people here, as well as built some pretty cool things.
          </div>
          <hr class="dashed"/>
          <div className='unloop-container'>
            
            <div className='unloop-content'>
              <h3 className='unloop-title'>
                <a rel='noopener noreferrer' target='_blank' class='link-orange' href='https://github.com/calblueprint/unloop'>Unloop</a>
              </h3>
              <div className='unloop-desc'>
                <a rel='noopener noreferrer' target='_blank' class='link-orange' href='https://www.un-loop.org/'>Unloop is a <b>nonprofit that provides a pipeline from prison to tech through education, support, and opportunity</b></a> .
                I worked on the Blueprint team as a project leader, leading a team of four developers and a designer to successful completion
                of the project's MVP.
              </div>
            </div>
            <img className='unloop-img' src={unloop2} alt='unloop app designs'/>
          </div>
          <hr class="dashed"/>
          <div className='unloop-container'>
            
            <div className='unloop-content'>
              <h3 className='unloop-title'>
                Other Exciting Things
              </h3>
              <div className='unloop-desc'>
                <b>This summer and fall (2020), I will be a co-president</b>, working to find five nonprofits to build with for the year, 
                iterate on our recruitment processes to be equitable and anti-racist, and foster important discussion around DEI in tech.
                <br/>
                In the past, <b>I've developed on the SFAI </b> 
                (<a rel='noopener noreferrer' target='_blank' class='link-orange' href='https://sfai.edu/'>nonprofit</a>, 
                <a rel='noopener noreferrer' target='_blank' class='link-orange' href='https://registry.sfai.edu/'> project</a>) 
                and <b>Homepointr </b> 
                (<a rel='noopener noreferrer' target='_blank' class='link-orange' href='https://homepointr.com/'>nonprofit</a>, 
                <a rel='noopener noreferrer' target='_blank' class='link-orange' href='https://github.com/calblueprint/HomePointrCIC'> project</a>)
                teams.
              </div>
            </div>
          </div>

          
        </div>
      </>
        
      )
    // }

    techContent.push(
      <>
        <h3 className='tech-title1'>
          18F : Civic Digital Fellowship
        </h3>
        <div className='tech-container1'>
        <div className='tech-desc'>
          CDF is a fellowship under
          <a rel='noopener noreferrer' target='_blank' class='link-orange' href='https://www.codingitforward.com/'> Coding it Forward </a> 
          that is <b>working to bring students into the civic tech space</b>.
        </div>
        <hr class="dashed"/>
        <div className='login-container'>
          
          <h3 className='login-title'>
            <a rel='noopener noreferrer' target='_blank' class='link-orange' href='https://github.com/18F/identity-idp'>Login.gov</a> 
            </h3>
          <div className='login-content'>
            <img className='login-img' src={login} alt='login.gov logo'/>
            <div className='login-desc'>
              
              In summer 2019, <b>I interned as a software developer on the 
              <a rel='noopener noreferrer' target='_blank' class='link-orange' href='https://login.gov'> Login.gov </a> 
              app dev team</b>. Along with that, I got to visit NASA, the USDS, and the FTC, meet some of the most
              amazing people, and live in Washington, DC.
            </div>
          </div>
          
        </div>
          
        </div>
      </>
    )

    techContent.push(
      <>
        <h3 className='tech-title2'>
          Volta Labs
        </h3>
        <div className='tech-container2'>
          <div className='unloop-container'>
            <img className='volta-img' src={volta} alt='volta logo'/>
            <div className='unloop-content'>
              <h3 className='unloop-title'>
                SWE Intern
              </h3>
              <div className='unloop-desc'>
                <a rel='noopener noreferrer' target='_blank' class='link-orange' href='https://www.voltalabs.co/about'>Volta Labs </a>
                is a <b>biotech startup working to automate biological protocols</b>.
                I worked on designing and building their newest platform to help biologists build workflows.
              </div>
              {/* , designing and building an app from scratch to allow biologists to build workflows. */}
            </div>
          </div>
        </div> 
      </>
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
        <div id='artist' className='other-page-container'>
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
              classNames={this.state.index >= this.state.prevIndex ? 'fade1' : 'fade2'}
            >
              {this.renderTimelineContent()}
            </CSSTransition>
          </SwitchTransition>
          {/* </div> */}
          
          <img data-aos='fade-left' data-aos-offset='-100' src={art} className='art-img' alt='logo' />
        </div>
        <div id='tech' className='other-page-container'>
          <div className='heading'>
            <h1 className='tech-heading'>tech</h1>
          </div>
          {this.renderTechContent()}
          <img data-aos='fade-right' data-aos-offset='-100' src={coding} className='coding-img' alt='logo' />
        </div>
        <div id='student' className='other-page-container'>
          <div className='heading'>
            <h1 className='about-heading'>hi, I'm Alison! and...</h1>
            <div className='heading-links'>
              <a rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/alison-dowski/' title='LinkedIn'>
                <img className='heading-link' src={linkedin} alt='linkedin'/>
              </a>
              <a rel='noopener noreferrer' target='_blank' href='https://github.com/adowski' title='GitHub'>
                <img className='heading-link' src={github} alt='github'/>
              </a>
              <a rel='noopener noreferrer' target='_blank' href='https://twitter.com/alisondowsk/' title='Twitter'>
                <img className='heading-link' src={twitter} alt='twitter'/>
              </a>
              <img className='heading-link' src={plane} alt='resume' title='Resume'/>
            </div>
          </div>
          <div className='about-container'>
            <div className='about-section'>
              <h3 className='about-title'>
                I'm graduating from UC Berkeley in Spring 2021
              </h3>
              <div className='about-desc'>
                <ul>
                  <li>with a B.A. in Computer Science</li>
                  <li>Previously: Phillips Exeter Academy</li>
                </ul>
              </div>
            </div>
            <div className='about-section'>
              <h3 className='about-title'>
                I'm from New Jersey, but I consider NJ, NH, and CA home.
              </h3>
              <div className='about-desc'>
                <ul>
                  <li>honestly, I have no idea which coast is better</li>
                  <li>the West Coast has better food, but the East Coast has better seasons</li>
                </ul>
              </div>
            </div>
            <div className='about-section'>
              <div className='about-title'>

              </div>
              <div className='about-desc'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
