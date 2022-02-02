import { Component } from "react"
import Burger from "../Burger/Burger"
import "./Navbar.css"



class Navbar extends Component {

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false
        }
    }

  

    toggle = () => { this.setState(state => ({ isOpen: !state.isOpen, })) };


    


    render() {


        return ([
        
            <Burger toggle={this.toggle}/>,


            <nav className={"nav" + (this.state.isOpen ? " expanded" : "")}>              

                <ul className={"nav-links" + (this.state.isOpen ? "" : " hidden")}>
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

        ])
    }

}

export default Navbar;