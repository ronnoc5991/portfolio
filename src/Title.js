import React, { useRef, useEffect } from 'react'

function Title() {

    var container = useRef(null); 
    var text = useRef(null); 
    

    useEffect(() => {
        const tl = gsap.timeline(); //eslint-disable-line
        tl.to(text, {color: "var(--light-on)", textShadow: "0 -40px 100px, 0 0 2px, 0 0 1em #516ace, 0 0 0.5em #516ace, 0 0 0.1em #516ace, 0 10px 3px #000", duration: .01, delay: 1.5});
        // tl.to(container, {backgroundColor: "var(--background-on)", duration: .0});

        tl.to(text, {color: "var(--light-off)", textShadow: "none", duration: .01, delay: .2});
        // tl.to(container, {backgroundColor: "var(--background-off)", duration: .0});

        tl.to(text, {color: "var(--light-on)", textShadow: "0 -40px 100px, 0 0 2px, 0 0 1em #516ace, 0 0 0.5em #516ace, 0 0 0.1em #516ace, 0 10px 3px #000", duration: .01, delay: .2});
        // tl.to(container, {backgroundColor: "var(--background-on)", duration: .0});

        tl.to(text, {color: "var(--light-off)", textShadow: "none", duration: .01, delay: .2});
        // tl.to(container, {backgroundColor: "var(--background-off)", duration: .0});

        tl.to(text, {color: "var(--light-on)", textShadow: "0 -40px 100px, 0 0 2px, 0 0 1em #516ace, 0 0 0.5em #516ace, 0 0 0.1em #516ace, 0 10px 3px #000", duration: .01, delay: .2});
        // tl.to(container, {backgroundColor: "var(--background-on)", duration: .0});

    }, [])

    return (
        <div className="Title view" ref={ el => { container = el } }>

                <div className="text" ref={ el => { text = el } }>
                    <span>C</span>onnor S<span>treng</span>
                </div>

            {/* <div class="name-container">
                <div class="name" ref={ el => { name = el } }>
                    Hi, I'm Connor
                </div>
            </div>

            <div className="job" ref={ el => { description = el } }>
                    I'm a <strong>Front End Developer</strong> based in <strong>Zeist, NL</strong>
            </div>

            <div className="arrow-down" ref={ el => { arrowDown = el } }>
                <a href="#project-1">
                    <i className="fa fa-chevron-down fa-2x"></i>
                </a>
            </div> */}
        </div>
    )
}

export default Title
