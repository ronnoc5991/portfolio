import React from 'react'

function Contact() {
    return (
        <div className="Contact view" id="contact">
            <div className="title">
                <h2>Let's get in touch</h2>
            </div>

            <a href="mailto:cstreng95@gmail.com">
                <div className="button">
                    <i className="fa fa-envelope fa-lg"></i>
                    GET IN TOUCH
                </div>
            </a>

            <div className="contacts">
                <a href="https://linkedin.com/in/connorstreng" target="_blank" rel="noopener noreferrer">
                    <p>LINKED-IN</p>
                </a>
                <div className="vertical-line"></div>
                <p>(+31) 640 309 602</p>
                <div className="vertical-line"></div>
                <a href="https://github.com/ronnoc5991" target="_blank" rel="noopener noreferrer">
                    <p>GITHUB</p>
                </a>
                <div className="vertical-line"></div>
                <a href="https://codepen.io/ronnoc5991" target="_blank" rel="noopener noreferrer">
                    <p>CODEPEN</p>
                </a>
            </div>
        </div>
    )
}

export default Contact
