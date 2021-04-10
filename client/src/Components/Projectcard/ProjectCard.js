import './ProjectCard.css'

function ProjectCard(props) {

    return (


        <div className='project-Card'>
            <h3 className='project-Title'>{props.projTitle}</h3>
            <img className='project-Image' src={props.projImage}></img>
            <p className='project-Description'>{props.projDescription}</p>

            <div className='project-BtnContainer'>
                <button className='project-Btn'>GitHub</button>
                <button className='project-Btn'>Demo</button>
            </div>
            
        </div>


    )

}

export default ProjectCard;