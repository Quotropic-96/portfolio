import profile from '../assets/profile.png';

const AboutUs = () => {
  return (
    <div className="about_us">
      <h1>About Us</h1>
      <p>
        We are a team of two dedicated full-stack developers with a unique blend
        of programming, data analysis, and design expertise. Specialising in the
        MERN stack (MongoDB, Express, React, and Node.js) and WORDPRESS, we
        bring our passion for innovation and problem-solving to every project.
        Driven by our passion for coding and excellence, we pride ourselves on
        delivering engaging, visually striking, and functional web experiences
        that resonate with users and elevate our clients' brand presence. Build
        the future with us!
      </p>
      <img src={profile} alt="Profile Gerard & Pau" />
      <figcaption>Paula Bertolin & Gerard Solanes</figcaption>
    </div>
  );
};

export default AboutUs;
