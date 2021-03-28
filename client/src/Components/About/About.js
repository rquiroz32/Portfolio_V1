import { Component } from "react"
import "./About.css"

class About extends Component {

    render() {

        return (
            <section className="section-About">
                <h1 className="aboutTitle">Who am I?</h1>
                <div className="aboutContainer">

                    <p className="aboutText">
                        After 5 years of testing other people's code, I finally decided to learn to write my own. Now I'm excited to put my skills to the test. As a motivated life time learner and self starter, I'm eager to build something great as part of a team.
                    </p>

                    <ul className="aboutSkills">
                        <li className="skill">HTML</li>
                        <li className="skill">CSS</li>
                        <li className="skill">JavaScript</li>
                        <li className="skill">Node.JS</li>
                        <li className="skill">MongoDb</li>
                        <li className="skill">React</li>
                        <li className="skill">jQuery</li>
                        <li className="skill">MySQL</li>
                    </ul>

                </div>
            </section>)
    }

}


export default About;