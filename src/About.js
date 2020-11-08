import React, { useState } from 'react';
import './App.css'
import Portrait from './portrait.JPG'
import USA from './united-states.png'
import Spain from './spain.png'
import Nederland from './netherlands.png'
import JavaScriptIcon from './javascript.png'
import ReactIcon from './react.png'
import HTMLIcon from './html.png'
import CSSIcon from './css.png'
import SassIcon from './sass.png'

function About() {

  return (
    <div className="About" id="about">   

        <div className="portrait-container">
          <img src={ Portrait } alt=""/>
        </div>
        
        <div className="description">
          <p>
           I'm <strong>Connor Streng</strong>, a <strong>Front End Developer</strong> based in <strong>Zeist, NL</strong>.
          </p>
          <p>
            I was born and raised in the United States of America.  After graduating from University, I moved to Spain where I lived and worked for two years as a teacher.  During my second year in Spain, I met my partner with whom I now live in the Netherlands.
          </p>
          <p>
            As a developer, I enjoy learning and developing with new technologies.  
          </p>
        </div>

        {/* <div className="tech-icon-container">
          <img src={ JavaScriptIcon } alt=""/>
          <img src={ ReactIcon } alt=""/>
          <img src={ HTMLIcon } alt=""/>
          <img src={ CSSIcon } alt=""/>
          <img src={ SassIcon } alt=""/>
        </div> */}

    </div>
  );
}

export default About;