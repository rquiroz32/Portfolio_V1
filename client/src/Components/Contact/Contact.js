import { Component } from "react"
import "./Contact.css"

class Contact extends Component {

    render() {
        return(
            <section  id= 'contact' className='section-Contact'>
                <h1 className='contactTitle'>Contact</h1>
                
                    <form className ='form-Container'>
                        <label for='form-Name'>Name</label>
                        
                        <input placeholder='Full Name' className='form-Name'></input>
                        
                        <label for ='form-Subject'>Subject</label>
                        
                        <input placeholder='Subject of Email' className='form-Subject'></input>
                        
                        <label for='form-Message'>Message</label>
                        
                        <input placeholder ='Please write your message here.' className='form-Message'></input>
                        <br></br>
                        <button className='form-Submit' /*type='submit'*/>Submit</button>
                    </form>
                
            </section>
        )
    }
}

export default Contact;