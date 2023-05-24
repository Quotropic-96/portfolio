import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Home.css';
import Frame from "../components/Frame";
import { motion, AnimatePresence } from 'framer-motion';
import Blob from '../components/animatedBlob/Blob';
import { Canvas } from "@react-three/fiber";
import animations from '../animations/homeAnimations';

const Home = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMouseOver = (text) => {
    setActiveLink(text);
  };

  const handleMouseOut = () => {
    setActiveLink(null);
  };

  // const renderLink = (to, text) => (
  //   <Link
  //     to={to}
  //     onMouseOver={() => handleMouseOver(text)}
  //     onMouseOut={handleMouseOut}
  //   >
  //     {activeLink === text ? 
  //     <>
  //       <span>&lt;{text}</span>
  //       <motion.span key={'/>'} variants={animations.menuItem} initial="hidden" animate="animate" exit="exit"> /&gt;</motion.span>
  //     </>
  //     :
  //     <span>{text}</span>
  //     }
  //   </Link>
  // );

  const renderLink = (to, text) => (
    <Link
      to={to}
      onMouseOver={() => handleMouseOver(text)}
      onMouseOut={handleMouseOut}
    >
      {activeLink === text ? 
      <>
        <AnimatePresence>
          <span>&lt;{text}</span>
          <motion.span key={'/>'} variants={animations.menuItem} initial="hidden" animate="animate" exit="exit"> /&gt;</motion.span>
        </AnimatePresence>
      </>
      :
      <span>{windowWidth > 1000 ? `<${text}` : `<${text} />`}</span>
      }
    </Link>
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="frame" style={{ overflow: "hidden" }}>
      <Frame />
      <div className="home">
        <div className="blob_div">
          <motion.p className="blob_text_1"
            key={'text1'}
            variants={animations.text}
            initial="hidden"
            animate="animate"
            exit="exit"
          >
            We are the full-stack developers who deliver impactful web solutions that resonate in the digital world
          </motion.p>
          <motion.p className="blob_text_2"
            key={'text2'}
            variants={animations.text}
            initial="hidden"
            animate="animate"
            exit="exit"
          >
            We are the full-stack developers who deliver impactful web solutions that resonate in the digital world
          </motion.p>
          <motion.div
            key='blob'
            variants={animations.blob}
            initial="hidden"
            animate="animate"
            exit="exit"
            >
            <Canvas style={ windowWidth > 1000 ? blobStylesDesktop : blobStylesMobile} camera={{ position: [0.0, 0.0, 8.0] }}>
              <Blob color='#ED6A5A'/>
            </Canvas>          
          </motion.div>         
        </div>
        <motion.div className="home_content"
          key='body'
          variants={animations.body}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
          <h1 className="web_title">QuoDev</h1>
          <ul className="home_menu">
            <li>{renderLink('/projects', 'Projects')}</li>
            <li>{renderLink('/about-us', 'About Us')}</li>
            <li>{renderLink('/contact', 'Contact')}</li>
            {/* <li><Link to={'/projects'}>Projects</Link></li>
            <li><Link to={'/about-us'}>About Us</Link></li>
            <li><Link to={'contact'}>Contact</Link></li> */}
          </ul>
        </motion.div>
      </div>
    </div>
  );
 }

const blobStylesDesktop = {
  height: '100vh',
  position: 'absolute',
  top: '0',
  left: '-40%',
  zIndex: '0',
}

const blobStylesMobile = {
  height: '70vh',
  width: '100vw',
  position: 'absolute',
  top: '50%',
  left: '-10%',
  zIndex: '0',
}

export default Home;