import React from 'react'
import EatstagramImage from './eatstagram-computer.JPG'
import BattleshipImage from './battleship.png'
import ReactImage from './react.png'
import HTML from './html.png'
import CSS from './css.png'
import Firebase from './firebase.png'
import Javascript from './javascript.png'
import Jest from './jest.png'

const Projects = () => {
    return (
            <div className="Projects view" id="projects">

                <div className="project" id="project-1">
                    <div className="project-title eatstagram">
                        <h4>Eatstagram</h4>
                        <p>A fun personal project where I keep and share recipes.</p>
                    </div>
                    <div className="image-container">
                        <img src={ EatstagramImage } alt=""/>
                    </div>
                    <div className="button-container">
                        <a href="https://ronnoc5991.github.io/eatstagram-react/" target="_blank">
                            <div className="button">PROJECT</div>
                        </a>
                        <a href="https://github.com/ronnoc5991/eatstagram-react" target="_blank">
                            <div className="button">CODE</div>
                        </a>
                    </div>
                    <div className="technology-container">
                        <h3>Built with</h3>
                        <img src={ ReactImage } title="React" alt=""/>
                        <img src={ HTML } title="HTML" alt=""/>
                        <img src={ CSS } title="CSS" alt=""/>
                        <img src={ Firebase } title="Firebase" alt="" id="odd" />
                    </div>
                    <div className="arrow-down">
                        <a href="#project-2">
                            <i class="fa fa-chevron-down fa-2x"></i>
                        </a>
                    </div>
                </div>

                <div className="project" id="project-2">
                    <div className="project-title battleship">
                        <h4>BATTLESHIP</h4>
                        <p>This is my take on the classic two player board game.</p>
                    </div>
                    <div className="image-container">
                        <img src={ BattleshipImage } alt=""/>
                    </div>
                    <div className="button-container">
                        <a href="https://ronnoc5991.github.io/battleship-react/" target="_blank">
                            <div className="button">PROJECT</div>
                        </a>
                        <a href="https://github.com/ronnoc5991/battleship-react" target="_blank">
                            <div className="button">CODE</div>
                        </a>
                    </div>
                    <div className="technology-container">
                        <h3>Built with:</h3>
                        <img src={ ReactImage } title="React" alt=""/>
                        <img src={ HTML } title="HTML" alt=""/>
                        <img src={ CSS } title="CSS" alt=""/>
                        <img src={ Jest } title="Jest" alt="" id="odd"/>
                    </div> 
                    <div className="arrow-down">
                        <a href="#about">
                            <i class="fa fa-chevron-down fa-2x"></i>
                        </a>
                    </div>
                </div>

            </div>
    )
}

export default Projects
