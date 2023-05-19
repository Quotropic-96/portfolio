import { useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { motion, useAnimation } from "framer-motion";
import Frame from "../components/Frame";
import ProjectCard from "../components/ProjectCard";
import NavBar from "../components/NavBar";
import Blob from '../components/animatedBlob/Blob';
import { projectsData } from "../data/projectsData.js";
import "./projects.css";
import animations from '../animations/projectsAnimations';
import { AnimationController } from '../utils/projectsAnimationController';

const colorMap = {
  "#F7CF5C": "xproof",
  "#7FB685": "soundTribe",
  "#AB882E": "inkedIn",
  "#ED7236": "consoleFly",
  "#015CA0": "mondriansDream",
};

const initialProjectState = {
  selectedProject: null,
  selectedProjectBuffer: null,
  isLoading: false,
  isMobile: true,
  isSwitching: false,
  isSwitchingPlatform: false,
  previousProjectLink: ''
};

const Projects = () => {
  const [scrollColor, setScrollColor] = useState(null);
  const [projectState, setProjectState] = useState(initialProjectState);

  const mobileFrameControls = useAnimation();
  const pcFrameControls = useAnimation();
  const defaultMessageControls = useAnimation();
  const loadingMobileControls = useAnimation();
  const loadingPcControls = useAnimation();
  const mobileIFrameControls = useAnimation();
  const pcIFrameControls = useAnimation();

  const animationController = useMemo(() => new AnimationController(
    mobileFrameControls,
    pcFrameControls,
    defaultMessageControls,
    loadingMobileControls,
    loadingPcControls,
    mobileIFrameControls,
    pcIFrameControls,
    animations
  ), [defaultMessageControls, loadingMobileControls, loadingPcControls, mobileFrameControls, mobileIFrameControls, pcFrameControls, pcIFrameControls]);

  const handleProjectState = (project) => {
    if (
      projectState.selectedProject &&
      project.title === projectState.selectedProject.title
    ) {
      // Unselecting Project
      setProjectState((prev) => {
        return {
          selectedProject: null,
          selectedProjectBuffer: null,
          isLoading: false,
          isMobile: project.platform === "mobile",
          isSwitching: false,
          isSwitchingPlatform: prev.selectedProject.platform === 'pc',
          previousProjectLink: prev.selectedProject.link,
        };
      });
    } else if (projectState.selectedProject) {
      // Switching Projects Project
      setProjectState((prev) => {
        return {
          selectedProject: null,
          selectedProjectBuffer: project,
          isLoading: true,
          isMobile: prev.isMobile,
          isSwitching: true,
          isSwitchingPlatform:
            project.platform != prev.selectedProject.platform,
          previousProjectLink: prev.selectedProject.link,
        };
      });
    } else {
      // Selecting Project from empty
      setProjectState({
        selectedProject: project,
        selectedProjectBuffer: null,
        isLoading: true,
        isMobile: true,
        isSwitching: false,
        isSwitchingPlatform: project.platform === 'pc',
        previousProjectLink: '',
      });
    }
  };

  const initialAnimation = async () => {
    await animationController.renderMobileFrame();
    await animationController.renderDefault();
  };

  const selectFromEmptyAnimation = async () => {
    const device = projectState.isSwitchingPlatform ? "Pc" : "Mobile";
  
    await animationController.unrenderDefault();
  
    const animateDevice = async () => {
      const intervalId = setInterval(async () => {
        if (!animationController.isAnimating()) {
          clearInterval(intervalId);
          const loadingFuncName = `unrender${device}Loading`;
          const iFrameFuncName = `render${device}IFrame`;
          await animationController[loadingFuncName]();
          await animationController[iFrameFuncName]();
        }
      },100);
    };
  
    if (device === "Mobile") {
      if (projectState.isLoading) {
        await animationController.renderMobileLoading();
      } else {
        await animateDevice();
      }
    } else {
      if (projectState.isLoading) {
        await animationController.unrenderMobileFrame();
        setProjectState(prevState => ({ ...prevState, isMobile: !prevState.isMobile }));
        await animationController.renderPcFrame();
        await animationController.renderPcLoading();
      } else {
        await animateDevice();
      }
    }
  };
  
  const switchProjectsAnimation = async () => {
    const { isSwitchingPlatform } = projectState;
    const { selectedProjectBuffer } = projectState;
    let targetDevice;
    if (selectedProjectBuffer) {
      targetDevice = selectedProjectBuffer.platform === "mobile" ? "Mobile" : "Pc";
    } else {
      targetDevice = projectState.isMobile ? "Mobile" : "Pc";
    }
    
    if (selectedProjectBuffer) {
      if (isSwitchingPlatform) {
        const prevDevice = projectState.isMobile ? "Mobile" : "Pc";
        const unrenderFrameFunc = `unrender${prevDevice}Frame`;
        const unrenderIFrameFunc = `unrender${prevDevice}IFrame`;

        await animationController[unrenderIFrameFunc]();
        await animationController[unrenderFrameFunc]();
        setProjectState(prevState => ({
          ...prevState,
          selectedProject: prevState.selectedProjectBuffer,
          selectedProjectBuffer: null,
          isMobile: !prevState.isMobile,
        }));
      } else {
        const unrenderIFrameFunc = `unrender${targetDevice}IFrame`;
        const renderLoadingFunc = `render${targetDevice}Loading`;

        await animationController[unrenderIFrameFunc]();
        await animationController[renderLoadingFunc]();
        setProjectState(prevState => ({
          ...prevState,
          selectedProject: prevState.selectedProjectBuffer,
          selectedProjectBuffer: null,
        }));
      }
    } else {
      if (isSwitchingPlatform) {
        if (projectState.isLoading) {
          const renderFrameFunc = `render${targetDevice}Frame`;
          const renderLoadingFunc = `render${targetDevice}Loading`;
  
          await animationController[renderFrameFunc]();
          await animationController[renderLoadingFunc]();
        } else {
          const intervalId = setInterval(async () => {
            if (!animationController.isAnimating()) {
              clearInterval(intervalId);
              const unrenderLoadingFunc = `unrender${targetDevice}Loading`;
              const renderIFrameFunc = `render${targetDevice}IFrame`;

              await animationController[unrenderLoadingFunc]();
              await animationController[renderIFrameFunc]();
            }
          },100);
        }
      } else {
        if (!projectState.isLoading) {
          const unrenderLoadingFunc = `unrender${targetDevice}Loading`;
          const renderIFrameFunc = `render${targetDevice}IFrame`;

          await animationController[unrenderLoadingFunc]();
          await animationController[renderIFrameFunc]();
        }
      }
    }
  };

  const returnToEmpty = async () => {
    const { isSwitchingPlatform } = projectState;
    if (isSwitchingPlatform) {
      if (!projectState.isMobile) {
        await animationController.unrenderPcIFrame();
        await animationController.unrenderPcFrame();
        setProjectState(prevState => ({
          ...prevState,
          isMobile: !prevState.isMobile
        }));
      } else {
        await animationController.renderMobileFrame();
        await animationController.renderDefault();
      }
    } else {
      await animationController.unrenderMobileIFrame();
      await animationController.renderDefault();
    }
  }

  const handleLoad = () => {
    setProjectState((prevState) => ({
      ...prevState,
      isLoading: false,
    }));
  };

  useEffect(() => {
    if (!projectState.selectedProject && !projectState.previousProjectLink) {
      initialAnimation();
    }

    if (projectState.selectedProject && !projectState.previousProjectLink) {
      selectFromEmptyAnimation();
    }

    if (projectState.isSwitching) {
      switchProjectsAnimation();
    }

    if (!projectState.selectedProject && !projectState.selectedProjectBuffer && projectState.previousProjectLink) {
      returnToEmpty();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[projectState]);

  return (
    <div className="frame">
      <Frame />
      <NavBar />
      <div className="projects">
        <motion.div
          className="title_projects_container"
          key="body"
          variants={animations.body}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
          <h1>PROJECTS</h1>
          <div
            className={`projects_cards_container_wrapper ${
              colorMap[scrollColor] || "original"
            }`}
          >
            <div className="projects_cards_container">
              {projectsData.map((project) => {
                const { selectedProject, selectedProjectBuffer } = projectState;
                const selectedTitle =
                  !!(
                    selectedProject && selectedProject.title === project.title
                  ) ||
                  !!(
                    selectedProjectBuffer &&
                    selectedProjectBuffer.title === project.title
                  );
                return (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    selectedTitle={selectedTitle}
                    handleProjectState={handleProjectState}
                    handleScrollColor={setScrollColor}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
        <div className="simulator_container">
          <motion.div
            className={`mobile_frame ${projectState.isMobile ? "visible" : "hidden"}`}
            animate={mobileFrameControls}
            initial={{ scale: 0 }}
          >
            <motion.div
              className="mobile_loading"
              animate={defaultMessageControls}
              initial={{ opacity: 0 }}
            >
              <p className="simulator_message">
                {"< select a project to be shown here />"}
              </p>
            </motion.div>
            <motion.div
              className="mobile_loading"
              animate={loadingMobileControls}
              initial={{ opacity: 0 }}
            >
              <p className="simulator_message">{"< loading />"}</p>
            </motion.div>
            <motion.div animate={mobileIFrameControls} initial={{ opacity: 0 }}>
              <iframe
                src={
                  projectState.selectedProject
                    ? projectState.selectedProject.link
                    : projectState.previousProjectLink
                }
                className="mobile_iframe"
                onLoad={handleLoad}
              ></iframe>
            </motion.div>
            <div className="mobile_notch"></div>
            <div className="mobile_power_button"></div>
            <div className="mobile_volume_up_button"></div>
            <div className="mobile_volume_down_button"></div>
          </motion.div>
          <motion.div 
            className={`pc_frame ${projectState.isMobile ? "hidden" : "visible"}`} 
            animate={pcFrameControls}
            initial={{ scale: 0 }}
          >
            <div className="pc_header">
              <div className="pc_dot" />
              <div className="pc_dot" />
              <div className="pc_dot" />
            </div>
            <motion.div className="pc_loading" animate={loadingPcControls} initial={{ opacity: 0 }}>
              <p className="simulator_message">{"< loading />"}</p>
            </motion.div>
            <motion.div animate={pcIFrameControls} initial={{ opacity: 0 }}>
              <iframe
                src={
                  projectState.selectedProject
                    ? projectState.selectedProject.link
                    : projectState.previousProjectLink
                }
                className="pc_iframe"
                onLoad={handleLoad}
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          key="blob"
          variants={animations.blob}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
          <Canvas style={blobStyles} camera={{ position: [0.0, 0.0, 8.0] }}>
            <Blob color={scrollColor || "#ED6A5A"} />
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
