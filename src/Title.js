import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

function Title() {

    var name = useRef(null);
    var description = useRef(null);
    var arrowDown = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(name, {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 2, delay: 1.5})
        tl.fromTo(description, {opacity: 0}, {opacity: 1, duration: 1})
        tl.fromTo(arrowDown, {opacity: 0}, {opacity: 1, duration: 2})
    }, [])

    return (
        <div className="Title view">
            <div className="name-container">
                <div className="name" ref={ el => { name = el } }>
                    <h1>Connor Streng</h1>
                </div>
                <div className="job" ref={ el => { description = el } }>
                    I'm a <strong>Front End Developer</strong> based in <strong>Zeist, NL</strong>.
                </div>
            </div>
            <div className="arrow-down" ref={ el => { arrowDown = el } }>
                <a href="#project-1">
                    <i className="fa fa-chevron-down fa-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default Title
