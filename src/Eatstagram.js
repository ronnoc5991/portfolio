import React from 'react'
import ProjectPhoto from './eatstagram-screenshot.JPG'
import ReactImage from './react.png'
import HTML from './html.png'
import CSS from './css.png'
import Firebase from './firebase.png'

function Eatstagram() {
    return (
        <div className="Eatstagram view">
            <div className="title">
                <h2>Eatstagram</h2>
            </div>
            <div className="project-detail-image">
                <a href="https://ronnoc5991.github.io/eatstagram-react/" target="_blank">
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
                    I enjoy cooking in my free time and I wanted a place to keep recipes that I had enjoyed
                    in the past.
                </p>
                <p>
                    Now, when I need inspiration for dinner, I simply browse this site.
                </p>
                <p>
                    I used this project as an opportunity to learn about using a Backend-as-a-Service.
                </p>
            </div>
            <div className="technology-container">
                <h3>Built with:</h3>
                <img src={ ReactImage } title="React" alt=""/>
                <img src={ HTML } title="HTML" alt=""/>
                <img src={ CSS } title="CSS" alt=""/>
                <img src={ Firebase } title="Firebase" alt="" id="odd" />
            </div>
        </div>
    )
}

export default Eatstagram
