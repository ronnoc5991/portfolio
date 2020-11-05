import React, { useEffect } from 'react';
import './styles/styles.css'
import Nav from './Nav'
import Title from './Title'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Compass from './compass.png'

function App() {
  
  useEffect(() => {
    gsap.to(window, { duration: .2, scrollTo: '.Title'}); //eslint-disable-line
  }, [])

  function navigate (destination) {
    gsap.to(window, {duration: 2, scrollTo: `${destination}`}); //eslint-disable-line
  }

  return (
    <div className="App">

      <div className="compass-container" onClick={ () => navigate('.Nav') }>
        <img src={ Compass } alt=""/>
      </div>

      <Nav />

      <Title />

      <Projects />

      <About />

      <Contact />

    </div>
  );
}

export default App;
