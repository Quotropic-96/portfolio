import { Link } from "react-router-dom";
import { useState } from "react";
import './Home.css';
import Frame from "../components/Frame";

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
    <div className="frame">
      <Frame />
      <div className="home">
        <p>We are the full-stack developers who deliver impactful web solutions that resonate in the digital world</p>
        <div className="homeContent">
          <h1 className="webTitle">QuoDev</h1>
          <ul className="homeMenu">
            <li>{renderLink('/projects', 'Projects')}</li>
            <li>{renderLink('/about-us', 'About Us')}</li>
            <li>{renderLink('/contact', 'Contact')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
 }

export default Home;