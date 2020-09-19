import React, { useState } from 'react'

function Nav() {

const [scrolled, setScrolled] = useState(false);
const [open, setOpen] = useState(false);

function toggleMenu () {
    setOpen(!open);
}

window.onscroll = function(){
    var distanceFromTop = window.scrollY;
    var screenHeight = window.innerHeight;
    var headerHeight = screenHeight / 10;
    console.log('Top: ' + distanceFromTop);
    console.log('Inner Height: ' + screenHeight)
    if(distanceFromTop > (screenHeight - headerHeight)){
        setScrolled(true)
    } else {
        setScrolled(false);
    }
    };


    return (
        <>
            <header className={`${ scrolled ? 'scrolled' : '' }`  }>
                <a href="#top">
                    <div className="logo">
                        <h2>CS</h2>
                    </div>
                </a>
              
                    <ul className="expanded">
                        <a href="#top">
                            <li>
                                <p className={`${ scrolled ? 'green' : '' }`}>HOME</p>
                                <div className="underline"></div>
                            </li>
                        </a>

                        <a href="#project-1" >
                            <li>
                                <p className={`${ scrolled ? 'green' : '' }`}>PROJECTS</p> 
                                <div className="underline"></div>
                            </li>
                        </a>
                        <a href="#about" >
                            <li>
                                <p className={`${ scrolled ? 'green' : '' }`}>ABOUT</p>
                                <div className="underline"></div>
                            </li>                       
                        </a>
                        <a href="#contact" >
                            <li>
                                <p className={`${ scrolled ? 'green' : '' }`}>CONTACT</p> 
                                <div className="underline"></div>
                            </li>
                        </a>

                    </ul>

                    <div className="bar-container" onClick={ toggleMenu }>
                        <div className={`bar ${ open ? 'open-bar-1 open-bar' : 'bar-1'}`}></div>
                        <div className={`bar ${ open ? 'open-bar-2 hidden-2' : 'bar-2'}`} id={ `${ open ? 'hidden-2' : '' }` }></div>
                        <div className={`bar ${ open ? 'open-bar-3 open-bar' : 'bar-3'}`}></div>
                    </div>

                    <div className={`pop-up-menu ${ open ? 'open' : 'closed' }`}>
                        <ul>
                            <a href="#top" onClick={ toggleMenu }>
                                <li>
                                    <p className={`${ scrolled ? 'green' : '' }`}>HOME</p>
                                </li>
                            </a>

                            <a href="#project-1" onClick={ toggleMenu }>
                                <li>
                                    <p className={`${ scrolled ? 'green' : '' }`}>PROJECTS</p> 
                                </li>
                            </a>
                            <a href="#about" onClick={ toggleMenu }>
                                <li>
                                    <p className={`${ scrolled ? 'green' : '' }`}>ABOUT</p>
                                </li>                       
                            </a>
                            <a href="#contact" onClick={ toggleMenu }>
                                <li>
                                    <p className={`${ scrolled ? 'green' : '' }`}>CONTACT</p> 
                                </li>
                            </a>

                        </ul>
                    </div>

            </header>
        </>
    )
}

export default Nav
