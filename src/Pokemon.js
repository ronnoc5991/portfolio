import React from 'react'
import ProjectPhoto from './pokemon-screenshot.JPG'
import ReactImage from './react.png'
import HTML from './html.png'
import CSS from './css.png'
import API from './api.png'

function Pokemon() {
    return (
        <div className="Pokemon view">
            <div className="title">
                <h2>Pokemon Database</h2>
            </div>
            <div className="project-detail-image">
                <a href="https://ronnoc5991.github.io/pokemon/" target="_blank">
                    <div className="link">
                        <div className="project-link">
                            <div>View the Site</div>
                        </div>
                    </div>
                </a>
                <img src={ ProjectPhoto } alt=""/>
            </div>
            <div className="project-background">
                <h3>Project Background</h3>
                <p>
                    I took on this project in order to practice using asynchronous 
                    JavaScript to fetch data form an API.
                </p>
            </div>

            <div className="technology-container">
                <h3>Built with:</h3>
                <img src={ ReactImage } title="React" alt=""/>
                <img src={ HTML } title="HTML" alt=""/>
                <img src={ CSS } title="CSS" alt=""/>
                <img src={ API } title="3rd Party API" alt="" id="odd"/>
            </div>   
     
        </div>
    )
}

export default Pokemon
