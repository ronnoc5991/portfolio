import React from 'react'
import EatstagramImage from './eatstagram.JPG'
import BattleshipImage from './battleship-computer.JPG'


const Projects = () => {

    return (
            <div className="Projects view">

                <div className="project" id="project-1">

                    <div className="project-information">
                        <div className="project-title eatstagram">
                            <h4>Eatstagram</h4>
                            <hr/>
                            <p>
                                A fun personal project where I keep and share recipes.
                                Built with React and Google Firebase.
                            </p>
                        </div>

                        <div className="button-container">
                            <a href="https://ronnoc5991.github.io/eatstagram/" target="_blank">
                                <div className="button">PROJECT</div>
                            </a>
                            <a href="https://github.com/ronnoc5991/eatstagram" target="_blank">
                                <div className="button">CODE</div>
                            </a>
                        </div>

                    </div>


                        <div className="image-container">
                            <img src={ EatstagramImage } alt=""/>
                        </div>

                        <div className="arrow-down">
                            <a href="#about">
                                <i className="fa fa-chevron-down fa-2x"></i>
                            </a>
                        </div>
                </div>

                {/* <div className="project" id="project-2">

                    <div className="image-container">
                        <img src={ BattleshipImage } alt=""/>
                    </div>

                    <div className="project-information">
                        <div className="project-title battleship">
                            <h4>BATTLESHIP</h4>
                            <hr/>
                            <p>
                                This is my take on the classic two player board game.
                                Built with React.
                            </p>
                        </div>
                        <div className="button-container">
                            <a href="https://ronnoc5991.github.io/battleship-react/" target="_blank">
                                <div className="button">PROJECT</div>
                            </a>
                            <a href="https://github.com/ronnoc5991/battleship-react" target="_blank">
                                <div className="button">CODE</div>
                            </a>
                        </div>
                    </div>

                    <div className="arrow-down">
                        <a href="#about">
                            <i className="fa fa-chevron-down fa-2x"></i>
                        </a>
                    </div>
                </div> */}

            </div>
    )
}

export default Projects
