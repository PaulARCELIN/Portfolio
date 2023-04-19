import './ProjectCard.css'


function ProjectCard({title, img, description, link}) {
   
   return (<a className="container" href={link}>
        <div className="title">{title} </div>
        <div className="img-container">
            <img src={img} alt={title}></img>
        </div>
        <div className="description">{description}</div>
        
    </a>)
}

export default ProjectCard