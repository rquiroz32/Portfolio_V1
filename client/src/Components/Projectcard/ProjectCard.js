import './ProjectCard.css'

function ProjectCard(props) {

    const handleRepo= ()=>{
        window.location.href = props.projRepo
    }

    const handleDemo = ()=>{
        window.location.href=props.projDemo
    }

    return (


        <div className='project-Card'>
            <h3 className='project-Title'>{props.projTitle}</h3>
            <img className='project-Image' src={props.projImage} alt='projectImage'></img>
            <p className='project-Description'>{props.projDescription}</p>

            <div className='project-BtnContainer'>
                <button onClick={handleRepo} className='project-Btn'>GitHub</button>
                <button onClick={handleDemo} className='project-Btn'>Demo</button>
            </div>
            
        </div>


    )

}

export default ProjectCard;