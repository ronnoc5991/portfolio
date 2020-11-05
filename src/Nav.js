import React from 'react'

function Nav() {

    function navigate (destination) {
        gsap.to(window, {duration: 2, scrollTo: `${destination}`}); //eslint-disable-line
    }    

    return (
        <div className="Nav">
            <div className="link" onClick={ () => navigate('.Title') } >
                <div className="link-name">Home</div>
            </div>
            <div className="link" onClick={ () => navigate('.Projects') } >
                <div className="link-name">Portfolio</div>
            </div>
            <div className="link" onClick={ () => navigate('.About') } >
                <div className="link-name">About</div>
            </div>
            <div className="link" onClick={ () => navigate('.Contact') } >
                <div className="link-name">Contact</div>
            </div>
        </div>
    )
}

export default Nav
