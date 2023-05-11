import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData.js";
import mobile from "../assets/images/mockup.png";
import NavBar from "../components/NavBar";
import Frame from "../components/Frame";
import "./projects.css"

const Projects = () => {
  const [showInfo, setShowInfo] = useState(null);
  const [scrollColor, setScrollColor] = useState(null);
  console.log(scrollColor)
  const handleShow = (title) => {
    setShowInfo(title);
  }

  const handleClose = ( ) => {
    setShowInfo(null);
  }

  const handleScrollColor = (color) => {
    setScrollColor(color);
  }

  return (
    <div className="projects frame">
      <Frame />
      <NavBar />
      <div className="main_view_container">
        <div className="projects_mobile_container">
          <div className="title_projects_container">
            <h1>PROJECTS</h1>
            <div className={scrollColor === "#F7CF5C"
              ? "projects_cards_container_wrapper xproof"
              : scrollColor === "#7FB685" ? "projects_cards_container_wrapper soundTribe"
                : scrollColor === "#AB882E" ? "projects_cards_container_wrapper inkedIn"
                  : scrollColor === "#ED7236" ? "projects_cards_container_wrapper consoleFly"
                    : scrollColor === "#015CA0" ? "projects_cards_container_wrapper mondriansDream"
                      : "projects_cards_container_wrapper original"
            }>
              <div className="projects_cards_container">
                {projectsData.map(project => {
                  return (
                    <ProjectCard key={project.title} info={project} showInfo={showInfo === project.title} handleShow={handleShow} handleClose={handleClose} handleScrollColor={handleScrollColor} />
                  )
                })}
              </div>
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