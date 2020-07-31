import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import art from './img/art.png';
import coding from './img/coding.png';
import './App.css';
import HorizontalTimeline from 'react-horizontal-timeline';

const VALUES = [ '2020-09-01', '2020-10-01', '2020-11-01', '2020-12-01', '2021-01-01' ];

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      prevIndex: 0
    }
  }

  componentDidMount() {
    AOS.init({
      duration: 2000
     });
  }

  renderTimelineContent() {
    let index = this.state.index;

    return (
      <div>{index}</div>
    );
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
              <div className='link-orange'>
                <a href='#student'>student</a>
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
          {this.renderTimelineContent()}
          <img data-aos='fade-left' data-aos-offset='-100' src={art} className='art-img' alt='logo' />
        </div>
        <div id='tech' className='landing-container'>
          <h1>tech</h1>
          <img data-aos='fade-left' data-aos-offset='0' src={coding} className='coding-img' alt='logo' />
          techie
        </div>
        <div id='student' className='landing-container'>
          studeeeeent
        </div>
      </div>
    );
  }
  
}

export default App;
