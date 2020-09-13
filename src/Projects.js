import React from 'react'
import EatstagramImage from './eatstagram-computer.JPG'
import PokemonImage from './Pokemon-computer.JPG'
import BattleshipImage from './battleship.png'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
            <div className="Projects view">
                <div className="title">
                    <h1>Projects</h1>
                </div>

                <div className="project">
                    <div className="project-image">
                            <div className="image-link">
                                <Link exact to={`/projects/eatstagram`}>
                                    <div className="link-container">
                                        <h4>Check it Out!</h4>
                                    </div>
                                </Link>
                            </div>
                        <img src={ EatstagramImage } alt=""/>
                    </div>
                    <div className="project-title">
                        <h4>Eatstagram</h4>
                        <p>Inspiration for your next meal</p>
                    </div>
                </div>

                <hr/>

                <div className="project">
                    <div className="project-image">
                        <div className="image-link">
                            <Link exact to="/projects/pokemon">
                                <div className="link-container">
                                    <h4>Check it Out!</h4>
                                </div>
                            </Link>
                        </div>
                        <img src={ PokemonImage } alt=""/>
                    </div>
                    <div className="project-title">
                        <h4>Pokemon</h4>
                        <p>A Pokemon Database</p>
                    </div>
                </div>

                <hr/>

                <div className="project">
                    <div className="project-image">
                        <div className="image-link">
                            <Link exact to="/projects/battleship">
                                <div className="link-container">
                                    <h4>Check it Out!</h4>
                                </div>
                            </Link>
                        </div>
                        <img src={ BattleshipImage } alt=""/>
                    </div>
                    <div className="project-title">
                        <h4>Battleship</h4>
                        <p>My take on the classic board game</p>
                    </div>
                </div>
            </div>
    )
}

export default Projects
