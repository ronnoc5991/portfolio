import React, { useState } from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

function Nav() {

const [menuOpen, setMenuOpen] = useState(false);

console.log(window.pageYOffset);

  function toggleMenu () {
    setMenuOpen(!menuOpen);
  }

    return (
        <>
            <Router>
                <header>
                    <a href="#top">
                        <div className="logo">
                            <h2>CS</h2>
                        </div>
                    </a>
                    <div className={`bar-container ${menuOpen ? 'open-container' : ''}`} onClick={ toggleMenu }>
                    <div className={`bar bar-1 ${menuOpen ? 'open-1' : 'closed-1'}`}></div>
                    <div className={`bar bar-2 ${menuOpen ? 'open-2' : 'closed-2'}`}></div>
                    <div className={`bar bar-3 ${menuOpen ? 'open-3' : 'closed-3'}`}></div>
                    </div>

                    <div className={`pop-up-menu ${ menuOpen ? 'open' : 'closed' }`}>
                        <ul>
                        <li>
                            <a href="#top" onClick={ toggleMenu }>
                                <p>Home</p>
                                <div className="underline"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={ toggleMenu }>
                                <p>Projects</p> 
                                <div className="underline"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={ toggleMenu }>
                                <p>About</p>
                                <div className="underline"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={ toggleMenu }>
                                <p>Contact</p> 
                                <div className="underline"></div>
                            </a>
                        </li>
                        </ul>
                    </div>

                </header>
            </Router>
        </>
    )
}

export default Nav
