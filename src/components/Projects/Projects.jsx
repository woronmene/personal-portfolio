import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.scss";

function Projects({title}) {
    return (
        <div className="projects">
            <div className="projects__content global__container">


               <h1 className=" global__heading">{title}</h1>
           <ProjectCard />
           <ProjectCard />
           <ProjectCard />
           <ProjectCard />
          
  
            </div>
            
        </div>
    )
}

export default Projects
