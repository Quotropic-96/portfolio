import { Link } from "react-router-dom";
import { useState } from "react";
import './Home.css';
import Frame from "../components/Frame";
import { motion } from 'framer-motion';
import Blob from '../components/animatedBlob/Blob';
import { Canvas } from "@react-three/fiber";

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
    <motion.div className="frame" style={{ overflow: "hidden" }}>
      <Frame />
      <motion.div className="home">
        <div className="blob_div">
          <p className="blob_text_1">We are the full-stack developers who deliver impactful web solutions that resonate in the digital world</p>
          <p className="blob_text_2">We are the full-stack developers who deliver impactful web solutions that resonate in the digital world</p>
          <Canvas style={blobStyles} camera={{ position: [0.0, 0.0, 8.0] }}>
            <Blob color={'#ED6A5A'} />
          </Canvas>
        </div>
        <div className="homeContent">
          <motion.h1 className="webTitle">QuoDev</motion.h1>
          <ul className="homeMenu">
            <li>{renderLink('/projects', 'Projects')}</li>
            <li>{renderLink('/about-us', 'About Us')}</li>
            <li>{renderLink('/contact', 'Contact')}</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
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