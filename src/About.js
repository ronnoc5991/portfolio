import React from 'react';
import './App.css';
import USA from './usa.png'
import Spain from './spain.png'
import Nederland from './Nederland.png'

function About() {

  return (
    <div className="About view" id="about">
      <div className="title">
        <h2>ABOUT ME</h2>
      </div>            
              <div className="paragraph">
                <div className="maps-container">
                  <img src={ USA } alt=""/>                
                  <img src={ Spain } alt=""/>
                  <img src={ Nederland } alt=""/>
                </div>
                <p>
                  Born and raised in the USA, the last several years of my life have been an adventure 
                  that has led me to Spain, where I lived and worked for two years, and now to the 
                  Netherlands, where I live with my partner.
                  I believe in continual growth and enjoy working on challenging projects.
                  Let's get coffee to talk about the rest.
                </p>
              </div>

              <div className="arrow-down">
                  <a href="#contact">
                      <i class="fa fa-chevron-down"></i>
                  </a>
              </div>

    </div>
  );
}

export default About;