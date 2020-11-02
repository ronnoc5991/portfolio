import React from 'react'

function Nav() {

    function navigate (destination) {
        gsap.to(window, {duration: 2, scrollTo: `${destination}`}); //eslint-disable-line
      }

    return (
        <div className="Nav">
            <div className="home-link link" onClick={ () => navigate('.Title') } >
                Home
            </div>
            <div className="portfolio-link link" onClick={ () => navigate('.Projects') } >
                Portfolio
            </div>
            <div className="about-link link" onClick={ () => navigate('.About') } >
                About
            </div>
            <div className="contact-link link" onClick={ () => navigate('.Contact') } >
                Contact
            </div>
        </div>
    )
}

export default Nav
