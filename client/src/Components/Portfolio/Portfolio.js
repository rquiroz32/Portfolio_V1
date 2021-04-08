import { Component } from "react";
import ProjectCard from "../Projectcard/ProjectCard";
import "./Portfolio.css"

class Portfolio extends Component {

    render() {

        return (
            <section className='section-Portfolio'>
                <h1 className='portfolio-Title'>My Work</h1>
                <div className='portfolio-Container'>
                    <ProjectCard projTitle={'test'} projImage={'https://via.placeholder.com/300'} projDescription={'This is a site that allows users to search for a covid testing location near them by zip code.'}></ProjectCard>
                    <ProjectCard projTitle={'test'} projImage={'https://via.placeholder.com/300'} projDescription={'This is a site that allows users to search for a covid testing location near them by zip code.'}></ProjectCard>
                    <ProjectCard projTitle={'test'} projImage={'https://via.placeholder.com/300'} projDescription={'This is a site that allows users to search for a covid testing location near them by zip code.'}></ProjectCard>
                    <ProjectCard projTitle={'test'} projImage={'https://via.placeholder.com/300'} projDescription={'This is a site that allows users to search for a covid testing location near them by zip code.'}></ProjectCard>
                    <ProjectCard projTitle={'test'} projImage={'https://via.placeholder.com/300'} projDescription={'This is a site that allows users to search for a covid testing location near them by zip code.'}></ProjectCard>
                    <ProjectCard projTitle={'test'} projImage={'https://via.placeholder.com/300'} projDescription={'This is a site that allows users to search for a covid testing location near them by zip code.'}></ProjectCard>
                </div>
            </section>
        )

    }

}

export default Portfolio;