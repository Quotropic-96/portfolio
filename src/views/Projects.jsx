import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData.js";
import mobile from "../assets/images/mockup.png";
import NavBar from "../components/NavBar";
import Frame from "../components/Frame";
import "./projects.css"

const Projects = () => {
  return (
    <div className="projects frame">
      <Frame />
      <NavBar />
      <h1>PROJECTS</h1>
      <div className="projects_mobile_container">
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
    </div>
  );
 }

export default Projects;