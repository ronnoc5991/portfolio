import React from 'react'
import EatstagramHome from './EatstagramCropped.jpg'
import BorrelPlank from './plank-screenshot.JPG'
import Battleship from './battleship-gameplay.JPG'


const Projects = () => {

    return (
            <div className="Projects view">

                <div className="project" id="project-1">

                    <div className="project-information">
                        <div className="project-title eatstagram">
                            <h4>Eatstagram</h4>
                            <hr/>
                            <p>
                                A fun personal project where I keep and share recipes.  Users can create and view recipes.
                                Frontend built with React.  Backend lives on Firebase.
                            </p>
                        </div>

                        <div className="button-container">
                            <a href="https://ronnoc5991.github.io/eatstagram/" target="_blank" rel="noopener noreferrer">
                                <div className="button">PROJECT</div>
                            </a>
                            <a href="https://github.com/ronnoc5991/eatstagram" target="_blank" rel="noopener noreferrer">
                                <div className="button">CODE</div>
                            </a>
                        </div>

                    </div>

                    <div className="image-container" >
                        <img id="eatstagram-1" src={ EatstagramHome } alt=""/>
                    </div>

                </div>

                <div className="project" id="project-2">

                    <div className="image-container" >
                        <img src={ BorrelPlank } alt=""/>
                    </div>

                    <div className="project-information">
                        <div className="project-title borrel-beter">
                            <h4>Borrel Beter</h4>
                            <hr/>
                            <p>
                                E-commerce site for borrel plankjes.  Customers can choose from pre-made plankjes or make their own.  
                                Frontend built with React.  Backend lives on Firebase.
                            </p>
                        </div>
                        <div className="button-container">
                            <a href="https://ronnoc5991.github.io/borrel-beter/" target="_blank" rel="noopener noreferrer">
                                <div className="button">PROJECT</div>
                            </a>
                            <a href="https://github.com/ronnoc5991/borrel-beter" target="_blank" rel="noopener noreferrer">
                                <div className="button">CODE</div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project" id="project-3">

                    <div className="project-information">
                        <div className="project-title battleship">
                            <h4>BATTLESHIP</h4>
                            <hr/>
                            <p>
                                This is my take on the classic board game "Battleship"/"Zeeslag".  Built with React.
                            </p>
                        </div>

                        <div className="button-container">
                            <a href="https://ronnoc5991.github.io/battleship-react/" target="_blank" rel="noopener noreferrer">
                                <div className="button">PROJECT</div>
                            </a>
                            <a href="https://github.com/ronnoc5991/battleship-react" target="_blank" rel="noopener noreferrer">
                                <div className="button">CODE</div>
                            </a>
                        </div>

                    </div>


                    <div className="image-container" >
                        <img src={ Battleship } alt=""/>
                    </div>
                    
                </div>

            </div>
    )
}

export default Projects
