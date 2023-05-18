import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion, useAnimation } from "framer-motion";
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
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [scrollColor, setScrollColor] = useState(null);
  const [projectState, setProjectState] = useState({
    selectedProject: null,
    isMobile: true,
  });
  const [lastProjectShown, setLastProjectShown] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);

  const messageDefaultControls = useAnimation();
  const messageLoadingControls = useAnimation();
  const iframeControls = useAnimation();
  const pcFrameControls = useAnimation();
  const mobileFrameControls = useAnimation();

  useEffect(() => {
    if (!projectState.selectedProject) {
      messageDefaultControls.start(animations.fade.animate);
    } else {
      messageDefaultControls.start(animations.fade.exit);
    }
  },[messageDefaultControls, projectState.selectedProject]);

  useEffect(() => {
    if (isLoading) {
      messageLoadingControls.start(animations.fade.animate);
    } else {
      messageLoadingControls.start(animations.fade.exit)
    }
  },[isLoading, messageLoadingControls]);

  useEffect(() => {
    const handleSwitch = async () => {
      const project = projectsData.find((elem) => elem.title === selectedTitle);

      await iframeControls.start(animations.fade.exit);

      if (project.platform != projectState.selectedProject.platform) {
        if (projectState.selectedProject.platform === 'mobile') {
          await mobileFrameControls.start(animations.fade.exit);
        } else {
          await pcFrameControls.start(animations.fade.exit);
        }
      }
      setIsSwitching(false);
      setProjectState({
        selectedProject : project,
        isMobile: project.platform === "mobile",
      });
      setLastProjectShown('');
    }

    const handleIframAnimation = async () => {
      if (isSwitching) {
        handleSwitch();
      } else if (!isSwitching && projectState.selectedProject && !isLoading) {
        if (projectState.isMobile) {
          await mobileFrameControls.start(animations.fade.animate);
        } else {
          await pcFrameControls.start(animations.fade.animate)
        }
        await iframeControls.start(animations.fade.animate);
      } else {
        await iframeControls.start(animations.fade.exit);
        setLastProjectShown('');
      }
    }

    handleIframAnimation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[iframeControls, isLoading, isSwitching, projectState.selectedProject]);

  useEffect(() => {
    const handleFirstPc = async (project) => {
      await mobileFrameControls.start(animations.fade.exit);
      setIsLoading(true);
      setProjectState({
        selectedProject: project,
        isMobile: project.platform === "mobile",
      });
    };

    if (selectedTitle) {
      if (projectState.selectedProject) {
        setIsLoading(true);
        setIsSwitching(true);
      } else {
        const project = projectsData.find((elem) => elem.title === selectedTitle);
        if (project.platform === 'pc') {
          handleFirstPc(project);
        } else {
          setIsLoading(true);
          setProjectState({
            selectedProject : project,
            isMobile: project.platform === "mobile",
          });
        }
      }
    } else {
      if (projectState.selectedProject) {
        setLastProjectShown(projectState.selectedProject.link);
      }      
      setProjectState({ selectedProject: null, isMobile: true });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedTitle]);

  useEffect(() => {
    mobileFrameControls.start(animations.fade.animate);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

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
                  selectedTitle={selectedTitle === project.title}
                  handleSelectTitle={setSelectedTitle}
                  handleClose={() => setSelectedTitle(null)}
                  handleScrollColor={setScrollColor}
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
          <motion.div 
            className={`mobile_frame ${projectState.isMobile ? 'visible' : 'hidden'}`} 
            animate={mobileFrameControls}
            initial= {{ opacity: 0 }}
          >
            <motion.div className="mobile_loading" animate={messageDefaultControls}>
              <p className="simulator_message">{'< select a project to be shown here />'}</p>
            </motion.div>
            <motion.div className="mobile_loading" animate={messageLoadingControls}>
              <p className="simulator_message">{'< loading />'}</p>
            </motion.div>
            <motion.div animate={iframeControls}>
              <iframe src={projectState.selectedProject ? projectState.selectedProject.link : lastProjectShown} className="mobile_iframe" onLoad={() => setIsLoading(false)}></iframe>
            </motion.div>
            <div className="mobile_notch"></div>
            <div className="mobile_power_button"></div>
            <div className="mobile_volume_up_button"></div>
            <div className="mobile_volume_down_button"></div>
          </motion.div>
          <motion.div 
            className={`pc_frame ${projectState.isMobile ? 'hidden' : 'visible'}`} 
            animate={pcFrameControls}
            initial={{ opacity: 0 }}
          >
            <div className="pc_header">
              <div className="pc_dot" />
              <div className="pc_dot" />
              <div className="pc_dot" />
            </div>
            {/* <motion.div className="pc_loading" animate={messageLoadingControls}>
              <p className="simulator_message">{'< loading />'}</p>
            </motion.div> */}
            <motion.div animate={iframeControls}>
              <iframe src={projectState.selectedProject ? projectState.selectedProject.link : lastProjectShown} className="pc_iframe" onLoad={() => setIsLoading(false)}></iframe>
            </motion.div>
          </motion.div>
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
