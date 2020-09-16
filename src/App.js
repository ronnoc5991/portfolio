import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Eatstagram from './Eatstagram'
// import Pokemon from './Pokemon'
import Battleship from './Battleship'

function App() {

  return (
    <div className="App">
      <Router>

        <Nav/>

        <Home/>

        <Projects />

        <About />

        <Contact />

        <Switch>
          <Route path='/projects/eatstagram' exact component={ Eatstagram } />
          {/* <Route path="/projects/pokemon" exact component={ Pokemon } /> */}
          <Route path="/projects/battleship" exact component={ Battleship } />
        </Switch>

      </Router>


    </div>
  );
}

export default App;
