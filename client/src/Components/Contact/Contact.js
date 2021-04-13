import { Component } from "react"
import "./Contact.css"

class Contact extends Component {

    render() {
        return(
            <section className='section-Contact'>
                <h1 className='contactTitle'>Contact</h1>
                
                    <form className ='form-container'>
                        <label for='form-Name'>Name</label>
                        <br></br>
                        <input placeholder='Name' className='form-Name'></input>
                        <br></br>
                        <label for ='form-Subject'>Subject</label>
                        <br></br>
                        <input placeholder='Subject' className='form-Subject'></input>
                        <br></br>
                        <label for='form-Message'> Message</label>
                        <br></br>
                        <input placeholder ='Message'className='form-Message'></input>
                        <br></br>
                        <button className='form-Submit' /*type='submit'*/>Submit</button>
                    </form>
                
            </section>
        )
    }
}

export default Contact;