import React from 'react';
import './App.css';
import USA from './usa.png'
import Spain from './spain.png'
import Nederland from './Nederland.png'

function About() {
  return (
    <div className="About view">
      <div className="title">
        <h2>My Story (Abridged)</h2>
      </div>
        <div className="paragraph paragraph-1">
          <img src={ USA } alt=""/>
          <p>
            I was born and raised in a small town in North Carolina, in the United States of America.
            During my time in University, although I majored in Supply Chain Management, I thoroughly
            enjoyed studying and speaking the Spanish language.  I joined several Spanish clubs and
            began volunteering at a local elementary school where I read with students whose first
            language was Spanish.  As graduation approached, I found an opportunity to move to Spain,
            where I could continue studying the language and working with children.  I saw 
            this opportunity as an adventure and took it.
          </p>
        </div>
        <div className="paragraph paragraph-2">
          <img src={ Spain } alt=""/>
          <p>
          After graduation, I moved halfway across the world to Leon, Spain.  I lived, worked and studied
           in Leon for 1 year.  My Spanish greatly improved and I grew as a result of being in a completely
            foreign environment and working a job in which I had limited prior experience.  Things had gone 
            so well during my time in Leon, I decided to accept another position in the south of Spain the 
            following year. While working in southern Spain, I met a Dutch girl and fell in love.  After the
             school year ended, I moved to Nederland to be with her and begin a new life.  
          </p>
        </div>
        <div className="paragraph paragraph-3">
          <img src={ Nederland } alt=""/>
          <p>
          In Nederland, I found myself in a unique position.  I had left the world of Supply Chain several 
          years prior and was not sure if I wanted to return.  I had always wanted to work in Technology 
          but had never taken the leap into coding.  I decided to reinvent myself once again and, in addition to Dutch, began studying
           Web Development.  I quickly saw that this was the correct path for me.  Web Development 
           has provided me with a challenge and an outlet for creativity that I did not have in Supply Chain.  Now, I am exicted to 
           continue learning and growing while working on challenging and exciting projects.
          </p>
        </div>
    </div>
  );
}

export default About;