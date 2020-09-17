import React from 'react'

function Title() {
    return (
        <div className="Title view">
            <div className="name-container">
                <div className="name">
                    <h1>Connor Streng</h1>
                </div>
                <div className="job">
                    I'm a <strong>Front End Developer</strong> based in <strong>Zeist, NL</strong>.
                </div>
            </div>
            <div className="arrow-down">
                <a href="#project-1">
                    <i class="fa fa-chevron-down fa-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default Title
