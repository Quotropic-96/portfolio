import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData.js";
import mobile from "../assets/images/mobile_mockup.png";
import pc from "../assets/images/pc_mockup.png";
import NavBar from "../components/NavBar";
import Frame from "../components/Frame";
import "./projects.css";
//import Blob from "../components/Blob";

const Projects = () => {
  const [showInfo, setShowInfo] = useState(null);
  const [scrollColor, setScrollColor] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(true);
 
  const handleShow = (title) => {
    setShowInfo(title);
  }

  const handleClose = ( ) => {
    setShowInfo(null);
  }

  const handleScrollColor = (color) => {
    setScrollColor(color);
  }

  useEffect(() => {
    const filteredProject = projectsData.filter((elem) => elem.title === showInfo)[0];
    if (filteredProject) {
      setSelectedProject(filteredProject);
      setIsMobile(filteredProject.platform === 'mobile');
    } else {
      setIsMobile(true);
    }
  }, [showInfo]);

  return (
    <div className="frame">
      <Frame />
      <NavBar />
      {/* <Blob /> */}
      <div className="projects">
        <div className="title_projects_container">
          <h1>PROJECTS</h1>
          <div
            className={
              scrollColor === "#F7CF5C"
                ? "projects_cards_container_wrapper xproof"
                : scrollColor === "#7FB685"
                ? "projects_cards_container_wrapper soundTribe"
                : scrollColor === "#AB882E"
                ? "projects_cards_container_wrapper inkedIn"
                : scrollColor === "#ED7236"
                ? "projects_cards_container_wrapper consoleFly"
                : scrollColor === "#015CA0"
                ? "projects_cards_container_wrapper mondriansDream"
                : "projects_cards_container_wrapper original"
            }
          >
            <div className="projects_cards_container">
              {projectsData.map((project) => {
                return (
                  <ProjectCard
                    key={project.title}
                    info={project}
                    showInfo={showInfo === project.title}
                    handleShow={handleShow}
                    handleClose={handleClose}
                    handleScrollColor={handleScrollColor}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="demo_container">
          {isMobile ?
            <img className="mobile_frame" src={mobile} alt="mobile" />
            :
            <img className="mobile_frame" src={pc} alt="pc" />
          }
          <div className={selectedProject ? " hidden message" : "message"}>
            <h2>
              {"< "}Select a project to be shown here{" />"}
            </h2>
          </div>
          {selectedProject && selectedProject.platform === "mobile" && (
            <iframe
              className={selectedProject ? "iframe_mobile" : "hidden iframe_mobile"}
              src={selectedProject ? selectedProject.link : ""}
              width={350}
              height={700}
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
 }

export default Projects;