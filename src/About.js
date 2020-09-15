import React, { useState } from 'react';
import './App.css';
import USA from './usa.png'
import Spain from './spain.png'
import Nederland from './Nederland.png'

function About() {

  const [slide, setSlide] = useState(1);

  function nextStep () {
    setSlide(slide + 1)
  }

  function previousStep () {
    setSlide(slide - 1)
  }

  function nextStepPossible () {
    if ((slide > 0) && (slide < 3)) {
      return true
    } else {
      return false
    }
  }

  function previousStepPossible () {
    if (slide > 1) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="About view">
      <div className="title">
        <h2>Bio</h2>
      </div>
      
          <div className="paragraph">
            {
              (slide === 1) && 
              <>
                <img src={ USA } alt=""/>
                <p>
                  I was born and raised in a small town in North Carolina, in the United States of America.
                  During my time in University, I thoroughly
                  enjoyed studying and speaking the Spanish language.  I joined several Spanish clubs and
                  began volunteering at a local elementary school where I read with students whose first
                  language was Spanish.  As graduation approached, I found an opportunity to move to Spain,
                  where I could continue studying the language and working with children.  I saw 
                  this opportunity as an adventure and took it.
                </p>
              </>
            }
            {
              (slide === 2) && 
              <>
                <img src={ Spain } alt=""/>
                <p>
                  After graduation, I moved halfway across the world to Leon, Spain.  I lived, worked and studied
                  in Leon for 1 year.  My Spanish greatly improved and I grew as a result of being in a completely
                    foreign environment and working a job in which I had limited prior experience.  Things had gone 
                    so well during my time in Leon, I decided to accept another position in the south of Spain the 
                    following year. While working in southern Spain, I met a Dutch girl and fell in love.  After the
                    school year ended, I moved to the Netherlands to be with her and begin a new life.  
                </p>
              </>
            }
            {
              (slide === 3) && 
              <>
                <img src={ Nederland } alt=""/>
                <p>
                Once in the Netherlands, I had the opportunity to reinvent myself.  I had always wanted to work in Technology 
                but had never taken the leap into coding. I began studying
                Web Development out of curiosity and I quickly saw that this was the correct path for me.  Web Development 
                has provided me with a challenge and an outlet for creativity.  Now, I am exicted to 
                continue learning and growing while working on challenging and exciting projects.
                </p>
              </>
            }
          </div>

          <div className="arrow-container">
            {
              previousStepPossible() ?   <div className="arrow arrow-left" onClick={ previousStep } > &lt; </div> : <div></div>
            }
            {
              nextStepPossible() ? <div className="arrow arrow-right" onClick={ nextStep } > &gt; </div> : <div></div>
            }
          </div>

    </div>
  );
}

export default About;