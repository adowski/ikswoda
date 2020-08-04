import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import TimelineCard from "./TimelineCard";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import baby from "./img/05.JPG";
import wander from "./img/13.jpg";
import whiteSands from "./img/19-3.png";
import glassAnimals from "./img/17.jpeg";
import luminescent from "./img/17-1.jpg";
import sinking from "./img/19.png";
import eve from "./img/19-0.png";
import postcard from "./img/postcard.PNG";

import "./Art.css";


const VALUES = [
  "2005-06-02",
  "2013-10-02",
  "2016-12-10",
  "2018-08-02",
  "2019-01-20",
  "2019-11-01",
  "2020-01-15",
  // "2020-07-05"
];
const artWords = [
  {
    title: "Unicorns",
    desc:
      "This is probably the oldest drawing of mine that I have! As you can see, once a horse girl, always a horse girl.",
    img: baby
  },
  {
    title: "Wanderer",
    desc:
      "Ah yes, my good old photography days. Rumor has it I used to be a little bit ~ instagram famous ~ (check it out @floatdown_ on instagram but please don't judge LOL). This is Kayla, my friend from NJ who I photographed with :)",
    img: wander
  },
  {
    title: "Luminescent",
    desc:
      "A triptych I did for my high school senior art show. The goal was to incorporate light in different ways (hence the name), and also use my own reference photographs! The models you see are my friends Leila and Kelsey.",
    img: luminescent
  },
  {
    title: "How to Be a Human Being",
    desc:
      "My favorite thing to do during this time was draw with colored pencils, and my favorite album at the time (and now) was the Glass Animals' How to Be a Human Being, so naturally, I drew this piece that was inspired by their album colors.",
    img: glassAnimals
  },
  {
    title: "White Sands",
    desc:
      "2019 marked the beginning of me getting back into digital art (I had a huge phase back in 2011 when I got my first tablet)! I gained inspiration for the background from a national park in my roommate's home state (NM).",
    img: whiteSands
  },
  {
    title: "Sinking",
    desc:
      "Fall semester of my junior year, I took a student-run class called the Photoshop and Illustrator decal. Our assignment for this one was to create a meaningful image using text.",
    img: sinking
  },
  {
    title: "Killing Eve",
    desc:
      "I absolutely love the show Killing Eve. 100/100 would recommend checking it out. This is a work in progress of a digital painting of Eve and Villanelle -- eventually they'll be standing on top of armored horses.",
    img: eve
  },
  // {
  //   title: "Berkeley Misses You",
  //   desc:
  //     "A drawing for a friend of a view she enjoys on UC Berkeley's campus! To be made into a postcard. Berkeley (and I) really miss everyone during this time. :(",
  //   img: postcard
  // }
];

class Art extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 3,
      prevIndex: 3
    };
  }

  renderTimelineContent() {
    let index = this.state.index;
    let content;

    switch (index) {
      case 0:
        content = (
          <TimelineCard
            title={artWords[0].title}
            text={artWords[0].desc}
            img={artWords[0].img}
          />
        );
        break;
      case 1:
        content = (
          <TimelineCard
            title={artWords[1].title}
            text={artWords[1].desc}
            img={artWords[1].img}
          />
        );
        break;
      case 2:
        content = (
          <TimelineCard
            title={artWords[2].title}
            text={artWords[2].desc}
            img={artWords[2].img}
          />
        );
        break;
      case 3:
        content = (
          <TimelineCard
            title={artWords[3].title}
            text={artWords[3].desc}
            img={artWords[3].img}
          />
        );
        break;
      case 4:
        content = (
          <TimelineCard
            title={artWords[4].title}
            text={artWords[4].desc}
            img={artWords[4].img}
          />
        );
        break;
      case 5:
        content = (
          <TimelineCard
            title={artWords[5].title}
            text={artWords[5].desc}
            img={artWords[5].img}
          />
        );
        break;
      case 6:
        content = (
          <TimelineCard
            title={artWords[6].title}
            text={artWords[6].desc}
            img={artWords[6].img}
          />
        );
        break;
      // case 7:
      //   content = (
      //     <TimelineCard
      //       title={artWords[7].title}
      //       text={artWords[7].desc}
      //       img={artWords[7].img}
      //     />
      //   );
      //   break;
      default:
        break;
    }

    return content;
  }

  render() {
    return (
      <>
        <div className="timeline">
          <HorizontalTimeline
            index={this.state.index}
            indexClick={index => {
              this.setState({
                index: index,
                prevIndex: this.state.index
              });
            }}
            getLabel={function(date) {
              let dateObj = new Date(date);
              let month = dateObj.toLocaleString("default", { month: "short" });
              let year = dateObj.getFullYear();
              return `${month} ${year}`;
            }}
            values={VALUES}
            styles={{
              background: "#fffced",
              foreground: "#ff9901",
              outline: "#e0daba"
            }}
            minEventPadding={100}
            maxEventPadding={100}
          />
        </div>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={this.state.index}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames={
              this.state.index >= this.state.prevIndex ? "fade1" : "fade2"
            }
          >
            {this.renderTimelineContent()}
          </CSSTransition>
        </SwitchTransition>
      </>
    );
  }
}

export default Art;
