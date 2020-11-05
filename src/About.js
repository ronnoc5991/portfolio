import React, { useState } from 'react';
import './App.css'
import Tent from './tent.png'
import Mountains from './mountains.png'
import Chef from './chef.png'
import Backpack from './backpack.png'
import Portrait from './portrait.JPG'
import USA from './united-states.png'
import Spain from './spain.png'
import Nederland from './netherlands.png'

function About() {

  const [openStatus, setOpenStatus] = useState([true, false, false]);

  //system that displays one of four different divs based on state
  //intro
  //bio
  //dev bio
  //hobbies

  function handleClick (section) {
    let newStatus = [false, false, false];
    newStatus[section] = true;
    setOpenStatus(newStatus);
  }

  return (
    <div className="About" id="about">   

        <div className="portrait-container">
          <img src={ Portrait } alt=""/>
        </div>
        
        <div className="description">
          <p>
           I'm <strong>Connor Streng</strong>, a <strong>Front End Developer</strong> based in <strong>Zeist, NL</strong>.
          </p>
        </div>

        <div className="about-links-container">
          <div className="bio-link about-links" onClick={ () => handleClick(0) }>
            Bio
          </div>

          <div className="dev-link about-links" onClick={ () => handleClick(1) }>
            Skills
          </div>

          <div className="hobbies-link about-links" onClick={ () => handleClick(2) }>
            Hobbies
          </div>
        </div>

        <div className={`about-section bio ${openStatus[0] ? 'open-section': ''}`}>
          <div className="america section">
            <img src={USA} alt=""/>
            <p>
              I was born and raised in the USA.
            </p>
          </div>
          <div className="spain section">
            <img src={Spain} alt=""/>
            <p>
              After University, I moved to Spain, 
              where I lived and worked as a teacher for two years. 
            </p>
          </div>
          <div className="nederland section">
            <img src={Nederland} alt=""/>
            <p>
              While there, I met my partner
              with whom I now live in the Netherlands.
            </p>
          </div>
        </div>

        <div className={`about-section dev-bio ${openStatus[1] ? 'open-section': ''}`}>
          <p>
            I am a self-taught developer that enjoys learning and working with new technologies.
          </p>
          <p>
            I usually work with: <br/><br/> HTML, CSS/SCSS, Javascript/TypeScript, ReactJS, Git, Github 
          </p>
        </div>

        <div className={`about-section hobbies ${openStatus[2] ? 'open-section': ''}`}>
          <p>
            Outside of Web Development, I enjoy hiking, camping, travelling and cooking.
          </p>
          <div className="hobbies-container">
            <img src={ Tent } alt=""/>
            <img src={ Mountains } alt=""/>
            <img src={ Chef } alt=""/>
            <img src={ Backpack } alt=""/>
          </div>
        
        </div>



    </div>
  );
}

export default About;