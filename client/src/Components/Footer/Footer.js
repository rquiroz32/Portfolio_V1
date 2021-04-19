import { Component } from "react"
import "./Footer.css"
import gmail from "../../images/Socials/Gmail/iconmonstr-gmail-3-48.png"
import github from '../../images/Socials/GitHub/iconmonstr-github-3-48.png'
import linkedin from '../../images/Socials/LinkedIn/iconmonstr-linkedin-3-48.png'



class Footer extends Component {

    render() {

        const handleLinkedInOnClick = ()=>{
            window.location.href='https://www.linkedin.com/in/richard-quiroz-csm-a9880155/'
        }

        const handleGitHubOnClick=()=>{
            window.location.href='https://github.com/rquiroz32'
        }

        return (
            <section className='section-Footer'>
                {/* <div className='contact-info'>
                    <p>Richard Quiroz</p>
                    <p>Email: rquiroz3290@gmail.com</p>
                    <p>Phone: 7324230560</p>
                </div> */}
                <div className='socials'>
                    <img src={gmail} ></img>
                    <img src={github}></img>
                    <img src={linkedin} onClick={handleLinkedInOnClick}></img>
                </div>
            </section>
        )
    }
}

export default Footer;