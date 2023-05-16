import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import profile from '../assets/images/profile.png';
import NavBar from '../components/NavBar';
import Frame from '../components/Frame';
import Blob from '../components/animatedBlob/Blob';
import './aboutUs.css';
import animations from '../animations/aboutUsAnimations';

const AboutUs = () => {
  return (
    <div className="frame">
      <Frame />
      <NavBar />
      <div className="about_us">
        <div className='photo_caption'>
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
          <motion.img src={profile} alt="Profile Gerard & Pau" 
            key='photo'
            variants={animations.photo}
            initial="hidden"
            animate="animate"
            exit="exit"
          />
        </div>
        <motion.div className="title_p_about_us"
          key='body'
          variants={animations.body}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
          <h1>ABOUT US</h1>
          <p>
            We are a team of two dedicated full-stack developers with a unique blend
            of <b>programming</b>, <b>data analysis</b>, and <b>design</b> expertise. Specialising in the
            MERN stack (MongoDB, Express, React, and Node.js) and WORDPRESS, we
            bring our passion for innovation and problem-solving to every project.<br></br><br></br>
            Driven by our passion for coding and excellence, we pride ourselves on
            delivering engaging, visually striking, and functional web experiences
            that resonate with users and elevate our clients&apos; brand presence. <br></br><br></br>Build
            the future with us!
          </p>
        </motion.div>
      </div>
      <motion.figcaption className="caption"
        key='caption'
        variants={animations.caption}
        initial="hidden"
        animate="animate"
        exit="exit"
          >
        Paula Bertolin & Gerard Solanes
      </motion.figcaption>
    </div>
  );
};

const blobStyles = {
  height: '130vh',
  position: 'absolute',
  top: '10%',
  right: '40%',
  zIndex: '0',
}

export default AboutUs;
