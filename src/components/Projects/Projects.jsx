import Project from "./Project/Project";
import "./Projects.scss";

function Projects({title}) {
    return (
        <div className="projects">
            <div className="projects__content global__container">


               <h1 className="projects__text global__heading">{title}</h1>
           <Project status= {true}/>
           <Project status= {false}/>
           <Project status= {true}/>
           <Project status= {false}/>
           <Project status= {true}/>
          
  
            </div>
            
        </div>
    )
}

export default Projects
