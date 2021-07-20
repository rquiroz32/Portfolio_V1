import { Component } from "react"
import "./Footer.css"
import gmail from "../../images/iconmonstr-gmail-3-48.png"
import github from '../../images/iconmonstr-github-3-48.png'
import linkedin from '../../images/iconmonstr-linkedin-3-48.png'



class Footer extends Component {

    
    
    render() {

        // const personalEmail = process.env.REACT_APP_PERSONAL_EMAIL
        const {REACT_APP_PERSONAL_EMAIL} = process.env;

        const handleLinkedInOnClick = ()=>{
            window.location.href='https://www.linkedin.com/in/richard-quiroz-csm-a9880155/'
        }

        const handleGitHubOnClick=()=>{
            window.location.href='https://github.com/rquiroz32'
        }

        const handleGmail=()=>{
            //console.log(`the email is ${REACT_APP_PERSONAL_EMAIL}`)
             window.location.href=`mailto:${process.env.REACT_APP_PERSONAL_EMAIL}`
        }

        return (
            <section className='section-Footer'>
                
                <div className='socials'>
                    <img src={gmail} onClick={handleGmail} alt='gmail icon'></img>
                    <img src={github} onClick={handleGitHubOnClick} alt = 'github icon'></img>
                    <img src={linkedin} onClick={handleLinkedInOnClick} alt ='linkedin icon'></img>
                </div>
            </section>
        )
    }
}

export default Footer;