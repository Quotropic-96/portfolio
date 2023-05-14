import profile from '../assets/images/profile.png';
import NavBar from '../components/NavBar';
import './aboutUs.css';
import Frame from '../components/Frame';
import Blob from "../components/Blob";

const AboutUs = () => {
  return (
    <div className="frame">
      <Frame />
      <NavBar />
      <div className="about_us">
        <div className='photo_caption'>
          <img className='background_blob' src={blob} alt="Background blob" />
          <img src={profile} alt="Profile Gerard & Pau" />
          <figcaption>Paula Bertolin & Gerard Solanes</figcaption>
        </div>
        <div className="title_p_about_us">
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
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
