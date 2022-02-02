import { Component } from "react"
import './Burger.css';

class Burger extends Component {


    render() {

        return(

        <div className="burger" onClick={this.props.toggle}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        )

    }
}

export default Burger;