import React from 'react';
import './App.css'
import Portrait from './portrait.JPG'
import USA from './united-states.png'
import Spain from './spain.png'
import Nederland from './netherlands.png'

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
          <div className="flags-container">
            <img src={USA} alt=""/>
            <img src={Spain} alt=""/>
            <img src={Nederland} alt=""/>
          </div>
          <p>
            I was born and raised in the United States of America.  After graduating from University, I moved to Spain where I lived and worked for two years as a teacher.  During my second year in Spain, I met my partner with whom I now live in the Netherlands.
          </p>
          <p>
            I enjoy traveling, hiking, camping, cooking and learning.
          </p>
          <p>
            I enjoy creating fun, beautiful UI's and I am always looking for ways to improve as a developer.
          </p>
        </div>

    </div>
  );
}

export default About;