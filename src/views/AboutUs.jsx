import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import profile from "../assets/images/profile.png";
import NavBar from "../components/NavBar";
import Frame from "../components/Frame";
import Blob from "../components/animatedBlob/Blob";
import "./aboutUs.css";
import animations from "../animations/aboutUsAnimations";

const AboutUs = () => {
  return (
    <div className="frame">
      <Frame />
      <NavBar />
      <div className="about_us">
        <div className="photo_caption">
          <motion.div
            key="blob"
            variants={animations.blob}
            initial="hidden"
            animate="animate"
            exit="exit"
          >
            <Canvas style={blobStylesDesktop} camera={{ position: [0.0, 0.0, 8.0] }}>
              <Blob color="#ED6A5A" />
            </Canvas>
          </motion.div>
          <motion.img
            src={profile}
            alt="Profile Gerard & Pau"
            key="photo"
            variants={animations.photo}
            initial="hidden"
            animate="animate"
            exit="exit"
          />
        </div>
        <motion.div
          className="text_body"
          key="body"
          variants={animations.body}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
          <h1>ABOUT US</h1>
          <p>
            I am a physicist, a teacher and a full-stack developer with a unique
            blend of <b>programming</b>, <b>data analysis</b>, and <b>design</b>{" "}
            expertise. Specialising in the MERN stack (MongoDB, Express, React,
            and Node.js) and WORDPRESS, I bring my passion for innovation and
            problem-solving to every project.<br></br>
            <br></br>
            Driven by my eagerness for coding and excellence, I deliver engaging, visually striking, and functional web
            experiences that resonate with users and elevate the clients&apos;
            brand presence. <br></br>
            <br></br>Build the future here!
          </p>
        </motion.div>
        <motion.div
          key="blob"
          variants={animations.blob}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
          <Canvas
            style={blobStylesMobile}
            className="mobile_content"
            camera={{ position: [0.0, 0.0, 8.0] }}
          >
            <Blob color="#ED6A5A" />
          </Canvas>
        </motion.div>

        <motion.figcaption
          className="mobile_content mobile_caption"
          key="caption"
          variants={animations.mobileCaption}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
          Paula Bertolin & Gerard Solanes
        </motion.figcaption>
      </div>
      <motion.figcaption
        className="caption"
        key="caption"
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

const blobStylesDesktop = {
  height: "130vh",
  width: '150vw',
  position: "absolute",
  top: "10%",
  right: "5%",
  zIndex: "0",
};

const blobStylesMobile = {
  height: "30vh",
  position: "absolute",
  bottom: "-10%",
  left: "0",
  zIndex: "-1",
};

export default AboutUs;
