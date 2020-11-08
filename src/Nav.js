import React from 'react'

function Nav() {

    function navigate (destination) {
        gsap.to(window, {duration: 2, scrollTo: `${destination}`}); //eslint-disable-line
    }    

    return (
        <div className="Nav">
            <div className="link" onClick={ () => navigate('.Title') } >
                <div className="link-name">
                    HOME
                </div>
            </div>
            <div className="link" onClick={ () => navigate('.Projects') } >
                <div className="link-name">
                    PORTFOLIO
                </div>
            </div>
            <div className="link" onClick={ () => navigate('.About') } >
                <div className="link-name">
                    ABOUT
                </div>
            </div>
            <div className="link" onClick={ () => navigate('.Contact') } >
                <div className="link-name">
                    CONTACT
                </div>
            </div>
        </div>
    )
}

export default Nav
