import React, { useState } from 'react'
import Compass from './compass.png'

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
                    Home
                </div>
                <div className={`portfolio-link link ${ open ? 'open' : '' }`} onClick={ () => navigate('.Projects') } >
                    Portfolio
                </div>
                <div className={`about-link link ${ open ? 'open' : '' }`} onClick={ () => navigate('.About') } >
                    About
                </div>
                <div className={`contact-link link ${ open ? 'open' : '' }`} onClick={ () => navigate('.Contact') } >
                    Contact
                </div>
            </div>
        </div>
    )
}

export default Nav
