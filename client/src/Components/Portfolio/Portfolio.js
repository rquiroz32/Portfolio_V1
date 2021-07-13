import { Component } from "react";
import ProjectCard from "../Projectcard/ProjectCard";
import "./Portfolio.css"
import gBooks_img from '../../images/Gbooks.png'
import employeeRegistry_img from '../../images/EmployeeRegistry.png'
class Portfolio extends Component {

    

    render() {

        return (
            <section id = 'portfolio' className='section-Portfolio'>
                <h1  className='portfolio-Title'>My Work</h1>
                <div className='portfolio-Container'>
                    <ProjectCard projTitle={'gbooks'} projImage={gBooks_img} projDescription={'This is a full MERN stack application for seraching books using the google books API and storing them in a MongoDB.'} projRepo={'https://github.com/rquiroz32/gbooks'} projDemo={'https://cryptic-caverns-34586.herokuapp.com/'}></ProjectCard>
                    <ProjectCard projTitle={'Employee Registry'} projImage={employeeRegistry_img} projDescription={'This was my first React project, where I created a page that makes an api call to https://randomuser.me/ that populates a table with users, and allows for searching and sorting by every field.'}projRepo={'https://github.com/rquiroz32/Employee_Registry'} projDemo={'https://rquiroz32.github.io/Employee_Registry/'} ></ProjectCard>
                    <ProjectCard projTitle={'Test'} projImage={'https://via.placeholder.com/300'} projDescription={'This is a site that allows users to search for a covid testing location near them by zip code.'}projRepo={'https://github.com/rquiroz32/gbooks'} projDemo={'https://cryptic-caverns-34586.herokuapp.com/'}></ProjectCard>
                    <ProjectCard projTitle={'Test'} projImage={'https://via.placeholder.com/300'} projDescription={'This is a site that allows users to search for a covid testing location near them by zip code.'}projRepo={'https://github.com/rquiroz32/gbooks'} projDemo={'https://cryptic-caverns-34586.herokuapp.com/'}></ProjectCard>
                    <ProjectCard projTitle={'Test'} projImage={'https://via.placeholder.com/300'} projDescription={'This is a site that allows users to search for a covid testing location near them by zip code.'}projRepo={'https://github.com/rquiroz32/gbooks'} projDemo={'https://cryptic-caverns-34586.herokuapp.com/'}></ProjectCard>
                    <ProjectCard projTitle={'Test'} projImage={'https://via.placeholder.com/300'} projDescription={'This is a site that allows users to search for a covid testing location near them by zip code.'}projRepo={'https://github.com/rquiroz32/gbooks'} projDemo={'https://cryptic-caverns-34586.herokuapp.com/'}></ProjectCard>
                </div>
            </section>
        )

    }

}

export default Portfolio;