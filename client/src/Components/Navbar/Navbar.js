import {Component} from "react"
import "./Navbar.css"

class Navbar extends Component{

    render(){
        return(
        <nav className="nav">
            <ul>
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

        </nav>
        )
    }

}

export default Navbar;