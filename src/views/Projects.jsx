import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData.js";
import mobile from "../assets/images/mockup.png";
import NavBar from "../components/NavBar";

const Projects = () => {
  return (
    <div className="projects">
      <NavBar />
      <h1>Projects</h1>
      <div className="projects_cards_container">
        {projectsData.map(project => {
          return (
            <ProjectCard key={project.title} info={project} />
          )
        })}
      </div>
      <div className="demo_container">
        <img style={{ width: "300px" }} src={mobile} alt="mobile" />
      </div>
    </div>
  );
 }

export default Projects;