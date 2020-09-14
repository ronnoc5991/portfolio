import React from 'react'
import ProjectPhoto from './battleship-screenshot.JPG'
import ReactImage from './react.png'
import HTML from './html.png'
import CSS from './css.png'
import Javascript from './javascript.png'
import Jest from './jest.png'

function Battleship() {
    return (
        <div className="Battleship view">
            <div className="title">
                <h2>Battleship</h2>
            </div>
            <div className="project-detail-image">
                <a href="https://ronnoc5991.github.io/battleship-react/" target="_blank">
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
                    This is my take on the classic two-player board <a href="https://en.wikipedia.org/wiki/Battleship_(game)">game</a>.
                </p>
                <p>
                    This project began as a practice in Test Driven Development.
                    I used Jest and Vanilla Javascript to build the game-logic.
                </p>
                <p>
                    I then moved the code into React to finish the game and had some fun with the styling.
                </p>
            </div>
            <div className="technology-container">
                <h3>Built with:</h3>
                <img src={ Javascript } title="Vanilla Javascript" alt="" />
                <img src={ Jest } title="Jest" alt="" id="odd"/>
                <img src={ ReactImage } title="React" alt=""/>
                <img src={ HTML } title="HTML" alt=""/>
                <img src={ CSS } title="CSS" alt=""/>
            </div>        
        </div>
    )
}

export default Battleship
