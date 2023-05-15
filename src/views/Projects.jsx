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
    console.log(isLoading);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  project={project}
                  showInfo={showInfo === project.title}
                  handleShow={setShowInfo}
                  handleClose={() => setShowInfo(null)}
                  handleScrollColor={setScrollColor}
                  handleLoading={setIsLoading}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="simulator_container">
          {projectState.isMobile &&
            <div className="mobile_frame_container">
              {!projectState.selectedProject && 
                <div className="mobile_loading">
                  <p className="simulator_message">{'< select a project to be shown here />'}</p>
                </div>
              }
              {isLoading && 
                <div className="mobile_loading">
                  <p className="simulator_message">{'< loading />'}</p>
                </div>
              }
              <iframe src={projectState.selectedProject ? projectState.selectedProject.link : ''} className="mobile_frame" onLoad={() => setIsLoading(false)}></iframe>
              <div className="mobile_notch"></div>
              <div className="mobile_power_button"></div>
              <div className="mobile_volume_up_button"></div>
              <div className="mobile_volume_down_button"></div>
            </div>
          }
          {!projectState.isMobile && 
            <div className="pc_frame_container">
              <div className="pc_header">
                <div className="pc_dot" />
                <div className="pc_dot" />
                <div className="pc_dot" />
              </div>
              {isLoading && 
                <div className="pc_loading">
                  <p className="simulator_message">{'< loading />'}</p>
                </div>
              }
              <iframe src={projectState.selectedProject ? projectState.selectedProject.link : ''} className="pc_frame" onLoad={() => setIsLoading(false)}></iframe>
            </div>
          }
        </div>
        <Blob cssStyle='background_blob' background='#F9F7F5' fill={scrollColor || '#ED6A5A'}></Blob>
      </div>
    </div>
  );
};

export default Projects;
