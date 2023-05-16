import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Frame from "../components/Frame";
import ProjectCard from "../components/ProjectCard";
import NavBar from "../components/NavBar";
import Blob from '../components/animatedBlob/Blob';
import { projectsData } from "../data/projectsData.js";
import "./projects.css";
import animations from '../animations/projectsAnimations';

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showInfo]);

  return (
    <div className="frame">
      <Frame />
      <NavBar />
      <div className="projects">
        <motion.div className="title_projects_container"
          key='body'
          variants={animations.body}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
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
        </motion.div>
        <motion.div className="simulator_container"
          key='simulator'
          variants={animations.simulator}
          initial="hidden"
          animate="animate"
          exit="exit"
          >
          {projectState.isMobile &&
            <div className="mobile_frame_container">
              {(!projectState.selectedProject || isLoading) && 
                <motion.div className="mobile_loading"
                  key='message'
                  variants={animations.fade}
                  initial="hidden"
                  animate="animate"
                  exit="exit"
                >
                  {!projectState.selectedProject && <p className="simulator_message">{'< select a project to be shown here />'}</p>}
                  {isLoading && <p className="simulator_message">{'< loading />'}</p>}
                </motion.div>
              }
              {/* {isLoading && 
                <div className="mobile_loading">
                  <p className="simulator_message">{'< loading />'}</p>
                </div>
              } */}
              <motion.div>
                
              </motion.div>
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
        </motion.div>
        <motion.div
          key='blob'
          variants={animations.blob}
          initial="hidden"
          animate="animate"
          exit="exit"
          >
          <Canvas style={blobStyles} camera={{ position: [0.0, 0.0, 8.0] }}>
            <Blob color={scrollColor || '#ED6A5A'}/>
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
};

const blobStyles = {
  height: '130vh',
  position: 'absolute',
  top: '0',
  left: '50%',
  zIndex: '0',
}

export default Projects;
