import React from 'react';
import './App.css'
import Tent from './tent.png'
import Mountains from './mountains.png'
import Chef from './chef.png'
import Backpack from './backpack.png'

function About() {

  return (
    <div className="About view" id="about">
      <div className="background-div"></div>
      <div className="filter"></div>
      <div className="title">
        <h2>About Me</h2>
      </div>            
              <div className="paragraph">
                <p>
                  I was born and raised in the USA.  After University, I moved to Spain, 
                  where I lived and worked as a teacher for two years.  While there, I met my partner
                  with whom I now live in the Netherlands.
                </p>

                <p>
                  I am competent with the following technologies: <br/> HTML, CSS, Javascript, React, SASS/SCSS, Git, Github, tesing (Jest, Jasmine). 
                </p>

                <p>
                  Outside of Web Development, I enjoy hiking, camping, travelling and cooking.
                </p>
                <div className="maps-container">
                  <img src={ Tent } alt=""/>
                  <img src={ Mountains } alt=""/>
                  <img src={ Chef } alt=""/>
                  <img src={ Backpack } alt=""/>
                </div>
              </div>

              <div className="arrow-down">
                  <a href="#contact">
                      <i className="fa fa-chevron-down fa-2x"></i>
                  </a>
              </div>

    </div>
  );
}

export default About;