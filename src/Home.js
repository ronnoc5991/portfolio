import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="Home view">
            <div className="title">
                <h2>Hello, my name is Connor. I am a Front End Developer living in Zeist, NL.</h2>
            </div>
            <div className="image-container">
                <Link to="/about" >
                    <div className="link"></div>
                </Link>
            </div>
            {/* <div className="about-short">
                <h3>About:</h3>
                <p>I am currently seeking a Front End Developer position.  I enjoy developing with React and working on side projects in my free time.  Outside of Web Development, I enjoy adventure, hiking, camping, travel and cooking.  </p>
            </div> */}

        </div>
    )
}

export default Home
