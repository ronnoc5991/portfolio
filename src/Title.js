import React, { useRef, useEffect } from 'react'

function Title() {
    
    let text = useRef(null); 
    // let astronaut = useRef(null);
    // let bubble = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline(); //eslint-disable-line

        tl.to(text, {color: "var(--light-on)", textShadow: "0 -5vh 10vh, 0 0 5px, 0 0 1em #516ace, 0 0 0.5em #516ace, 0 0 0.1em #516ace, 0 10px 3px #000", duration: .01, delay: 1});
        
        tl.to(text, {color: "var(--light-off)", textShadow: "none", duration: .01, delay: .2});
        
        tl.to(text, {color: "var(--light-on)", textShadow: "0 -5vh 10vh, 0 0 5px, 0 0 1em #516ace, 0 0 0.5em #516ace, 0 0 0.1em #516ace, 0 10px 3px #000", duration: .01, delay: .2});
        
        tl.to(text, {color: "var(--light-off)", textShadow: "none", duration: .01, delay: .2});
        
        tl.to(text, {color: "var(--light-on)", textShadow: "0 -5vh 10vh, 0 0 5px, 0 0 1em #516ace, 0 0 0.5em #516ace, 0 0 0.1em #516ace, 0 10px 3px #000", duration: .01, delay: .2});

        // tl.to(astronaut, {y: 0, duration: 5, delay: '-2'});

        // setTimeout(() => {
        //     astronaut.classList.add('animate-astro');
        //     gsap.to(bubble, {opacity: 1, duration: .1}) //eslint-disable-line
        // }, 5300)
    }, [])

    return (
        <div className="Title">

            <div className="wrapper">
                <div className="text" ref={ el => { text = el } }>
                    <span>C</span>onnor S<span>treng</span>
                </div>

                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>

            </div>

            {/* <div class="astro-container" ref={ el => astronaut = el }>
                <div id="talkbubble" ref={ el => bubble = el }>
                    <p>I'm a Frontend Developer!</p>
                </div>
                <div class="astro-body">
                    <div class="body-strap left-strap"></div>
                    <div class="body-strap right-strap"></div>
                    <div class="control-panel">
                        <div class="line line-a"></div>
                        <div class="line line-b"></div>
                        <div class="line line-c"></div>
                        <div class="control-button c-b-a"></div>
                        <div class="control-button c-b-b"></div>
                    </div>
                    <div class="astro-head">
                        <div class="visor">
                            <div class="ear left-ear">
                                <div class="inner-ear left-inner"></div>
                            </div>
                            <div class="ear right-ear">
                                <div class="inner-ear right-inner"></div>
                            </div>
                        </div>
                        <div class="astro-button astro-button-a"></div>
                        <div class="astro-button astro-button-b"></div>
                        <div class="astro-button astro-button-c"></div>
                    </div>
                    <div class="arm left-arm"></div>
                    <div class="arm right-arm"></div>
                    <div class="leg left-leg"></div>
                    <div class="leg right-leg"></div>
                </div>
            </div> */}

        </div>
    )
}

export default Title
