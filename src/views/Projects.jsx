import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData.js";
import mobile from "../assets/images/mobile_mockup.png";
import pc from "../assets/images/pc_mockup.svg";
import NavBar from "../components/NavBar";
import Frame from "../components/Frame";
import "./projects.css";
import Blob from "../components/Blob";

const colorMap = {
  "#F7CF5C": "xproof",
  "#7FB685": "soundTribe",
  "#AB882E": "inkedIn",
  "#ED7236": "consoleFly",
  "#015CA0": "mondriansDream",
};

const Projects = () => {
  const [showInfo, setShowInfo] = useState(null);
  const [scrollColor, setScrollColor] = useState(null);
  const [projectState, setProjectState] = useState({
    selectedProject: null,
    isMobile: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const selectedProject = projectsData.find(
      (elem) => elem.title === showInfo
    );
    if (selectedProject) {
      setProjectState({
        selectedProject,
        isMobile: selectedProject.platform === "mobile",
      });
    } else {
      setProjectState({ selectedProject: null, isMobile: true });
      setIsLoading(false);
    }
  }, [showInfo]);

  return (
    <div className="frame">
      <Frame />
      <NavBar />
      <div className="projects">
        <div className="title_projects_container">
          <h1>
            PROJECTS
          </h1>
          <div
            className={`projects_cards_container_wrapper ${
              colorMap[scrollColor] || "original"
            }`}
          >
            <div className="projects_cards_container">
              {projectsData.map((project) => (
                <ProjectCard
                  key={project.title}
                  info={project}
                  showInfo={showInfo === project.title}
                  handleShow={setShowInfo}
                  handleClose={() => setShowInfo(null)}
                  handleScrollColor={setScrollColor}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className={
            projectState.isMobile
              ? "demo_container_mobile"
              : "demo_contanier_pc"
          }
        >
          {projectState.isMobile ? (
            <>
              <img className="mobile_frame" src={mobile} alt="mobile" />
              {projectState.selectedProject && (
                <iframe
                  className={
                    projectState.selectedProject
                      ? "iframe_mobile"
                      : "hidden iframe_mobile"
                  }
                  src={
                    projectState.selectedProject
                      ? projectState.selectedProject.link
                      : ""
                  }
                  onLoad={() => setIsLoading(false)}
                ></iframe>
              )}
            </>
          ) : (
            <>
              <img className="pc_frame" src={pc} alt="pc" />
              {projectState.selectedProject && (
                <iframe
                  className={
                    projectState.selectedProject
                      ? "iframe_pc"
                      : "hidden iframe_pc"
                  }
                  src={
                    projectState.selectedProject
                      ? projectState.selectedProject.link
                      : ""
                  }
                  onLoad={() => setIsLoading(false)}
                ></iframe>
              )}
            </>
          )}
          <div className="message">
          {projectState.isMobile && <div className="mobile_background"></div>}
            <h2>
              {isLoading
                ? "< Loading />"
                : "< select a project to be shown here />"}
            </h2>
          </div>
        </div>
        <Blob cssStyle='background_blob' background='#F9F7F5' fill={scrollColor || '#ED6A5A'}></Blob>
      </div>
    </div>
  );
};

export default Projects;
