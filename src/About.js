import React from 'react';
import './App.css';
import USA from './usa.png'
import Spain from './spain.png'
import Nederland from './Nederland.png'

function About() {

  return (
    <div className="About view" id="about">
      <div className="title">
        <h2>About Me</h2>
      </div>            
              <div className="paragraph">
                <div className="maps-container">
                  <img src={ USA } alt=""/>                
                  <img src={ Spain } alt=""/>
                  <img src={ Nederland } alt=""/>
                </div>
                <p>
                  I was born and raised in the USA.  After Univeristy, I moved to Spain, 
                  where I lived and worked as a teacher for two years.  While there, I met my partner
                  with whom I now live in the Netherlands.
                </p>
                <p>
                  I am currently available for work.
                </p>
              </div>

              <div className="arrow-down">
                  <a href="#contact">
                      <i class="fa fa-chevron-down fa-2x"></i>
                  </a>
              </div>

    </div>
  );
}

export default About;