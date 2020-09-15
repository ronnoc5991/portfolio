import React, { useState } from 'react';
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

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu () {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="App">

      <Router>

        <header>
          <Link to='/'>
            <h2>CS</h2>
          </Link>
            <div className={`bar-container ${menuOpen ? 'open-container' : ''}`} onClick={ toggleMenu }>
              <div className={`bar bar-1 ${menuOpen ? 'open-1' : 'closed-1'}`}></div>
              <div className={`bar bar-2 ${menuOpen ? 'open-2' : 'closed-2'}`}></div>
              <div className={`bar bar-3 ${menuOpen ? 'open-3' : 'closed-3'}`}></div>
            </div>

              <div className={`pop-up-menu ${ menuOpen ? 'open' : 'closed' }`}>
                <ul>
                  <li>
                    <Link to='/' onClick={ toggleMenu }>
                      <p>Home</p>
                      <div className="underline"></div>
                    </Link>
                  </li>
                  <li>
                    <Link to='/projects' onClick={ toggleMenu }>
                      <p>Projects</p> 
                      <div className="underline"></div>
                    </Link>
                  </li>
                  <li>
                    <Link to='/about' onClick={ toggleMenu }>
                      <p>About</p>
                      <div className="underline"></div>
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact' onClick={ toggleMenu }>
                      <p>Contact</p> 
                      <div className="underline"></div>
                    </Link>
                  </li>
                </ul>
              </div>

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
