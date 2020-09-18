import React, { useState } from 'react'

function Nav() {

const [scrolled, setScrolled] = useState(false);


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
              
                    <ul>
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

            </header>
        </>
    )
}

export default Nav
