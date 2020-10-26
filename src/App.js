import React from 'react';
import './styles/styles.css'
import Nav from './Nav'
import Title from './Title'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function App() {

  return (
    <div className="App">

      <Nav/>

      <Title/>

      <Projects />

      <About />

      <Contact />

    </div>
  );
}

export default App;
