import React, { useState } from 'react';
import './App.css';
import USA from './usa.png'
import Spain from './spain.png'
import Nederland from './Nederland.png'

function About() {

  return (
    <div className="About view" id="about">
      <div className="title">
        <h2>Who am I?</h2>
      </div>            
              <div className="paragraph paragraph-1">
                <img src={ USA } alt=""/>
                <p>
                  I was born and raised in the U.S.A.
                  While in University, I began studying the Spanish language and volunteering in a local elementary school. After graduation, I accepted a teaching position in Leon, Spain.
                </p>
              </div>

              <div className="paragraph paragraph-2">
                <img src={ Spain } alt=""/>
                <p>
                  I lived and worked in Leon for 1 year.  Things went 
                    so well that I decided to accept another position in Andalucia the 
                    following year. While there, I met a Dutch girl and fell in love.  After the
                    school year ended, I moved to the Netherlands to be with her and begin a new life.  
                </p>
              </div>

              <div className="paragraph paragraph-3">
                <img src={ Nederland } alt=""/>
                <p>
                Once in the Netherlands, I had the opportunity to reinvent myself.  I had always wanted to work in Technology 
                but had never taken the leap into coding. I began studying
                Web Development out of curiosity and I quickly saw that this was the correct path for me.  Web Development 
                has provided me with a challenge and an outlet for creativity.  Now, I am exicted to 
                continue learning and growing while working on challenging and exciting projects.
                </p>
              </div>

    </div>
  );
}

export default About;