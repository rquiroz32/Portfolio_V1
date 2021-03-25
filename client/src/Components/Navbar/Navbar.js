import {Component} from "react"
import "./Navbar.css"

class Navbar extends Component{

    render(){
        return(
        <nav className="nav">
            
            <ul className ="nav-links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="burger">
                <div className = "line1"></div>
                <div className = "line2"></div>
                <div className = "line3"></div>
            </div>
        


        </nav>
        )
    }

}

export default Navbar;