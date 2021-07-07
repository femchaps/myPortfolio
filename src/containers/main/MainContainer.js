import React from 'react'
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import './MainContainer.css'
import {greeting} from '../../portfolio.js'
import femo from '../../assets/images/femolala.png'
import SocialMedia from '../../components/socialmedia/SocialMedia'
import Button from '../../components/button/Button'
import Skills from '../../components/skills/Skills'

function MainContainer() {
    return (
        <div className="main-container">
                <div className="main-container-card">
                    <Fade bottom duration={1000} distance="40px">
                    <div className="w3-row w3-container this-absolute">
                        <div className="w3-half">
                            <a href="/" className="logo grey-color">
                                <span> &lt;</span>
                                <span className="logo-name">{greeting.username}</span>
                                <span>/&gt;</span>
                            </a>
                            <h1 className="greeting-text" style={{color: "#FFFFFF"}}>
                                {greeting.title}
                                <span className="wave-emoji">
                                    {emoji("👋")}
                                </span>
                            </h1>
                            <p className="greeting-text-p subTitle">
                                {greeting.subTitle}
                            </p>
                            <SocialMedia />
                            <div className="button-greeting-div">
                                <Button text="Contact me" href="#contact" />
                                <Button
                                text="See my resume"
                                newTab={true}
                                href={greeting.resumeLink}
                                />
                            </div>
                        </div> 
                        <div className="w3-half "><img src={femo} width="450px" className="femo " />  </div>
                    </div>
                    </Fade>
                </div>
                <Skills />
            
        </div>
    )
}

export default MainContainer
