import React, { useState } from 'react'
import Compass from './compass.png'
import UFO from './ufo.png'

function Nav() {

    const [open, setOpen] = useState(false);

    function navigate (destination) {
        gsap.to(window, {duration: 2, scrollTo: `${destination}`}); //eslint-disable-line
        handleClick();
    }

    function handleClick () {
        setOpen(!open);
    }

    return (
        <div className="Nav">
            <div className="compass-container" onClick={ handleClick } >
                <img src={ Compass } alt=""/>
            </div>
            <div className="link-container">
                <div className={`home-link link ${open ? 'open' : ''}`} onClick={ () => navigate('.Title') } >
                    <img src={ UFO } alt=""/>
                    <div className="light-beam"></div>
                    <div className="link-name">Home</div>
                </div>
                <div className={`portfolio-link link ${ open ? 'open' : '' }`} onClick={ () => navigate('.Projects') } >
                    <img src={ UFO } alt=""/>
                    <div className="light-beam"></div>
                    <div className="link-name">Portfolio</div>
                </div>
                <div className={`about-link link ${ open ? 'open' : '' }`} onClick={ () => navigate('.About') } >
                    <img src={ UFO } alt=""/>
                    <div className="light-beam"></div>
                    <div className="link-name">About</div>
                </div>
                <div className={`contact-link link ${ open ? 'open' : '' }`} onClick={ () => navigate('.Contact') } >
                    <img src={ UFO } alt=""/>
                    <div className="light-beam"></div>
                    <div className="link-name">Contact</div>
                </div>
            </div>
        </div>
    )
}

export default Nav
