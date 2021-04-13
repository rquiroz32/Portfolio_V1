import { Component } from "react"
import "./Contact.css"

class Contact extends Component {

    render() {
        return(
            <section className='section-Contact'>
                <h1 className='contactTitle'>Contact</h1>
                
                    <form className ='form-Container'>
                        <label for='form-Name'>Name</label>
                        
                        <input placeholder='Name' className='form-Name'></input>
                        
                        <label for ='form-Subject'>Subject</label>
                        
                        <input placeholder='Subject' className='form-Subject'></input>
                        
                        <label for='form-Message'> Message</label>
                        
                        <input placeholder ='Message'className='form-Message'></input>
                        <br></br>
                        <button className='form-Submit' /*type='submit'*/>Submit</button>
                    </form>
                
            </section>
        )
    }
}

export default Contact;