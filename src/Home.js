import React from 'react'
import { ReactComponent as Developer } from './developer.svg'

function Home() {
    return (
        <div className="Home view">
            {/* <div className="title">
                <h2>Hello, my name is Connor. I am a Front End Developer living in Zeist, NL.</h2>
            </div>
            <div className="image-container">
                <Link to="/about" >
                    <div className="link"></div>
                </Link>
            </div> */}
            <div className="name">
                <h1>CONNOR STRENG</h1>
            </div>
            <div className="job">
                I'm a Front End Developer based in Zeist, NL.
            </div>
            {/* <div className="developer-container"> */}
                {/* <Developer /> */}
            {/* </div> */}
        </div>
    )
}

export default Home
