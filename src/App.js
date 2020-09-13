import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Eatstagram from './Eatstagram'
import Pokemon from './Pokemon'
import Battleship from './Battleship'

function App() {
  return (
    <div className="App">

      <Router>

        <header>
          <Link to='/'>
            <h2>CONNOR STRENG</h2>
          </Link>
            <ul>
              <li>
                <Link to='/'>
                  <h5>Home</h5>
                </Link>
              </li>
              <li>
                <Link to='/about'>
                  <h5>About</h5> 
                </Link>
              </li>
              <li>
                <Link to='/projects'>
                  <h5>Projects</h5> 
                </Link>
              </li>
              <li>
                <Link to='/contact'>
                  <h5>Contact</h5> 
                </Link>
              </li>
            </ul>
          </header>

          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path='/projects/eatstagram' exact component={ Eatstagram } />
            <Route path="/projects/pokemon" exact component={ Pokemon } />
            <Route path="/projects/battleship" exact component={ Battleship } />
            <Route path="/projects" exact component={ Projects } />
            <Route path="/contact" exact component={ Contact } />
            <Route path="/about" exact component={ About } />
          </Switch>

      </Router>


    </div>
  );
}

export default App;
