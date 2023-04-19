import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '../ProjectData/data';
import './CardContainer.css'

function CardContainer() {
    return <div className='card-container'>
            {projects.map((e) => (
                <ProjectCard title={e.title} img={e.img} description={e.description} link={e.link}/>
                ))}
          </div>
}

export default CardContainer