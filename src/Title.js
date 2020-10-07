import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

function Title() {

    var container = useRef(null); 
    var name = useRef(null);
    var description = useRef(null);
    var arrowDown = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(container, {opacity: 0}, {opacity: 1, duration: .5, delay: 1})
        tl.fromTo(name, {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 1.5, delay: .5})
        tl.fromTo(description, {opacity: 0}, {opacity: 1, duration: 1})
        tl.fromTo(arrowDown, {opacity: 0}, {opacity: 1, duration: 1})
    }, [])

    return (
        <div className="Title view" ref={ el => { container = el } }>

            <div class="name-container">
                <div class="name" ref={ el => { name = el } }>
                    <span aria-hidden="true">CONNOR STRENG</span>
                        CONNOR STRENG
                    <span aria-hidden="true">CONNOR STRENG</span>
                </div>
            </div>

            <div className="job" ref={ el => { description = el } }>
                    I'm a <strong>Front End Developer</strong> based in <strong>Zeist, NL</strong>.
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
