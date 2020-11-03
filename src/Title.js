import React, { useRef, useEffect } from 'react'

function Title() {
    
    let text = useRef(null); 
    let job = useRef(null); 

    useEffect(() => {
        const tl = gsap.timeline(); //eslint-disable-line

        tl.to(text, {color: "var(--light-on)", textShadow: "0 -5vh 10vh, 0 0 5px, 0 0 1em #516ace, 0 0 0.5em #516ace, 0 0 0.1em #516ace, 0 10px 3px #000", duration: .01, delay: 1});
        
        tl.to(text, {color: "var(--light-off)", textShadow: "none", duration: .01, delay: .2});
        
        tl.to(text, {color: "var(--light-on)", textShadow: "0 -5vh 10vh, 0 0 5px, 0 0 1em #516ace, 0 0 0.5em #516ace, 0 0 0.1em #516ace, 0 10px 3px #000", duration: .01, delay: .2});
        
        tl.to(text, {color: "var(--light-off)", textShadow: "none", duration: .01, delay: .2});
        
        tl.to(text, {color: "var(--light-on)", textShadow: "0 -5vh 10vh, 0 0 5px, 0 0 1em #516ace, 0 0 0.5em #516ace, 0 0 0.1em #516ace, 0 10px 3px #000", duration: .01, delay: .2});
        
        tl.to(job, {color: "var(--light-on)", textShadow: "0 -1vh 5vh, 0 0 3px, 0 0 1em #516ace, 0 0 0.5em #516ace, 0 0 0.1em #516ace, 0 10px 3px #000", duration: .5, delay: .3})
    }, [])

    return (
        <div className="Title">

            <div className="wrapper">
                <div className="text" ref={ el => { text = el } }>
                    <span>C</span>onnor S<span>treng</span>*
                </div>

                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>

            </div>

            <div className="job" ref={ el => { job = el } }>
                *Front End Developer
            </div>

        </div>
    )
}

export default Title
