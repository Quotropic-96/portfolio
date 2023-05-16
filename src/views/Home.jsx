import { Link } from "react-router-dom";
import { useState } from "react";
import './Home.css';
import Frame from "../components/Frame";
import { motion } from 'framer-motion';
import Blob from '../components/animatedBlob/Blob';
import { Canvas } from "@react-three/fiber";
import animations from './homeAnimations';

const Home = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleMouseOver = (e) => {
    setActiveLink(e.target.textContent);
  };

  const handleMouseOut = () => {
    setActiveLink(null);
  };

  const renderLink = (to, text) => (
    <Link
      to={to}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {activeLink === text ? `<${text} />` : text}
    </Link>
  );

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
            <Canvas style={blobStyles} camera={{ position: [0.0, 0.0, 8.0] }}>
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
          </ul>
        </motion.div>
      </div>
    </div>
  );
 }

const blobStyles = {
  height: '100vh',
  position: 'absolute',
  top: '0',
  left: '-40%',
  zIndex: '0',
}

export default Home;