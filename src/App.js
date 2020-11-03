import React, { useEffect } from 'react';
import './styles/styles.css'
import Nav from './Nav'
import Title from './Title'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  
  useEffect(() => {
    gsap.to(window, { duration: .2, scrollTo: '.Title'}); //eslint-disable-line
  }, [])

  return (
    <div className="App">

      <Nav />

      <Title />

      <Projects />

      <About />

      <Contact />

    </div>
  );
}

export default App;
