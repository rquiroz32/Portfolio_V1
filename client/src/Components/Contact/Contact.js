import { Component } from "react"
import "./Contact.css"
// import api from '../../../../util/API.js'

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = { Name: '', Subject:'', Message:'' };
    }

    handleNameChange = (event) => {
        this.setState({ Name: event.target.value });
    }
    handleSubjectChange = (event) => {
        this.setState({ Subject: event.target.value });
    }
    handleMessageChange = (event) => {
        this.setState({ Message: event.target.value });
    }

    
     handleSubmit = async(event) => {
        // alert('A form was submitted: ' + this.state);
        console.log('clicked')
        console.log(JSON.stringify(this.state))

        await fetch('http://localhost:3001/sendMail', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', 
            credentials: 'same-origin',  
            headers: {
                'Content-Type': 'application/json'
            },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
        }).then(function (response) {
            console.log(response)
            // return response.json()
        }).catch((err)=>{
            console.log(err)    
        })

        // api(this.state.Name, this.state.Subject, this.state.Message);

        event.preventDefault();
    }

    render() {
        return (
            <section id='contact' className='section-Contact'>
                <h1 className='contactTitle'>Contact</h1>

                <form className='form-Container'>
                    <label for='form-Name'>Name</label>

                    <input placeholder='Full Name' className='form-Name' onChange={this.handleNameChange}></input>

                    <label for='form-Subject'>Subject</label>

                    <input placeholder='Subject of Email' className='form-Subject' onChange={this.handleSubjectChange}></input>

                    <label for='form-Message'>Message</label>

                    <input placeholder='Please write your message here.' className='form-Message' onChange={this.handleMessageChange}></input>
                    <br></br>
                    <button className='form-Submit' onClick={this.handleSubmit}>Submit</button>
                </form>

            </section>
        )
    }
}

export default Contact;