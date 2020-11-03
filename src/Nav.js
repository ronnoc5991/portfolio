import React, { useState, useEffect, useRef } from 'react'
import Compass from './compass.png'
import UFO from './ufo.png'

function Nav() {

    const [open, setOpen] = useState(false);

    let nav = useRef(null);

    useEffect(() => {
        gsap.to(nav, {opacity: 1, duration: .5, delay: 3}) //eslint-disable-line
    }, [])

    function navigate (destination) {
        gsap.to(window, {duration: 2, scrollTo: `${destination}`}); //eslint-disable-line
        handleClick();
    }

    function handleClick () {
        setOpen(!open);
    }

    return (
        <div className="Nav">
            <div className="compass-container" onClick={ handleClick } ref={ el => { nav = el } }>
                <img src={ Compass } alt=""/>
            </div>
            <div className="link-container">
                <div className={`home-link link ${open ? 'open' : ''}`} onClick={ () => navigate('.Title') } >
                    <img src={ UFO } alt=""/>
                    <div className="light-beam"></div>
                    <div className="link-name">HOME</div>
                </div>
                <div className={`portfolio-link link ${ open ? 'open' : '' }`} onClick={ () => navigate('.Projects') } >
                    <img src={ UFO } alt=""/>
                    <div className="light-beam"></div>
                    <div className="link-name">PORTFOLIO</div>
                </div>
                <div className={`about-link link ${ open ? 'open' : '' }`} onClick={ () => navigate('.About') } >
                    <img src={ UFO } alt=""/>
                    <div className="light-beam"></div>
                    <div className="link-name">ABOUT</div>
                </div>
                <div className={`contact-link link ${ open ? 'open' : '' }`} onClick={ () => navigate('.Contact') } >
                    <img src={ UFO } alt=""/>
                    <div className="light-beam"></div>
                    <div className="link-name">CONTACT</div>
                </div>
            </div>
        </div>
    )
}

export default Nav
