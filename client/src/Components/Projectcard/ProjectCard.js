import './ProjectCard.css'

function ProjectCard(props) {

    return (


        <div className='project-Card'>
            <h3 className='project-Title'>{props.projTitle}</h3>
            <img src={props.projImage}></img>
            <p className='projDescription'>{props.projDescription}</p>
            <button className='projBtn'>GitHub</button>
            <button className='projBtn'>Demo</button>
        </div>


    )

}

export default ProjectCard;