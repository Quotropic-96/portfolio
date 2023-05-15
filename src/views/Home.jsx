import { Link } from "react-router-dom";
import { useState } from "react";
import './Home.css';
import Frame from "../components/Frame";
import { motion } from 'framer-motion';
// import Blob from "../components/Blob";

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
    <motion.div className="frame" initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 1.5, duration:1.5}}>
      <Frame />
      <motion.div className="home">
        {/* <Blob cssStyle='background_blob' background='#F9F7F5' fill='#000000' style={{ mixBlendMode: "screen" }} />
        <Blob cssStyle='background_blob' background='#F9F7F5' fill='#ED6A5A' style={{mixBlendMode:"screen"}}/> */}
        <div className="blob_text_div"></div>
        <p className="blob_text_1">We are the full-stack developers who deliver impactful web solutions that resonate in the digital world</p>
        <p className="blob_text_2">We are the full-stack developers who deliver impactful web solutions that resonate in the digital world</p>
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

export default Home;