import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import linkedIn from "../assets/images/linkedin_logo.png";
import email from "../assets/images/email.png";
import malt from "../assets/images/malt_logo.png";
import NavBar from "../components/NavBar";
import Frame from "../components/Frame";
import Blob from '../components/animatedBlob/Blob';
import './contact.css';
import animations from './contactAnimations';

const Contact = () => {
  return (
    <div className="frame">
      <Frame />
      <NavBar />
      <div className="contact">
        <motion.div className="title_text_social_container"
          key='body'
          variants={animations.body}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
          <h1>CONTACT</h1>
          <p>
            Tell us about your project, arrange a meeting with us and let&apos;s start
            creating together.
          </p>
          <div className="social_container">
            <p>You can also contact us through:</p>
            <div className="icons">
              <motion.img key={'iconL'} variants={animations.iconLeft} src={malt} alt="malt-icon" />
              <motion.img key={'iconM'} variants={animations.iconMid} src={email} alt="email-icon" />
              <motion.img key={'iconR'} variants={animations.iconRight} src={linkedIn} alt="linkedin-icon" />
            </div>
          </div>
        </motion.div>
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
        <motion.div className="contact_form_container"
          key='form'
          variants={animations.form}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
          <form>
            <input type="text" placeholder="NAME" />
            <input type="text" placeholder="EMAIL" />
            <textarea type="text" placeholder="MESSAGE" rows="8"/>
            <button>SEND</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

const blobStyles = {
  height: '100vh',
  position: 'absolute',
  top: '0',
  right: '0',
  zIndex: '0',
}

export default Contact;
