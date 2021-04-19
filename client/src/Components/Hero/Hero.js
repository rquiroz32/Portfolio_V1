import { Component } from "react"
import "./Hero.css"
import image from "../../images/florian-olivo-Ek9Znm8lQ1U-unsplash.jpg"

class Hero extends Component {

    render() {

        const handlePortfolioBtn = ()=>{ window.location.href='/#portfolio'}
        const handleContactBtn = ()=>{ window.location.href='/#contact'}

        return (
            <header className="Hero">
                <img className="HeroImg" src={image}></img>

                <div className="contentContainer">
                    <h1 className="HeroTxt">Hi I'm Richard, <br /> I'm a Full Stack Web Developer. </h1>

                    <div className="BtnContainer">
                        <button className="HeroBtn" onClick={handlePortfolioBtn} >See My Work</button>
                        <button className="HeroBtn" onClick={handleContactBtn} >Get in Touch</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Hero;