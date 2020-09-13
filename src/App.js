import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Router>

      <header>
        <Link to="/">
          <h2>CONNOR STRENG</h2>
        </Link>
          <ul>
            <li>
              <Link to="/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </header>

        <Route path="/about" component={ About } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contact" component={ Contact } />

      </Router>
    </div>
  );
}

export default App;
