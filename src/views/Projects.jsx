import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData.js";
import mobile from "../assets/images/mockup.png";
import NavBar from "../components/NavBar";
import Frame from "../components/Frame";
import "./projects.css"

const Projects = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleShow = (title) => {
    setShowInfo(title);
  }

  return (
    <div className="projects frame">
      <Frame />
      <NavBar />
      <div className="main_view_container">
        <div className="projects_mobile_container">
          <div className="title_projects_container">
            <h1>PROJECTS</h1>
            <div className="projects_cards_container">
              {projectsData.map(project => {
                return (
                  <ProjectCard key={project.title} info={project} showInfo={showInfo === project.title} handleShow={handleShow} />
                )
              })}
            </div>
          </div>
          <div className="demo_container">
            <img style={{ width: "350px" }} src={mobile} alt="mobile" />
          </div>
        </div>
      </div>
    </div>
  );
 }

export default Projects;