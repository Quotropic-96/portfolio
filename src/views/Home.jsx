import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Home.css';
import Frame from "../components/Frame";
//import Blob from "../components/Blob";

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

  //TESTING

  useEffect(() => {
    const element = document.getElementById('background-element');
    const computedStyles = window.getComputedStyle(element);
    const backgroundColor = computedStyles.backgroundColor;

    const textColor = isColorLight(backgroundColor) ? 'black' : 'white';
    console.log(textColor)
    const textElements = document.getElementsByClassName('color-change');

    Array.from(textElements).forEach(element => {
      element.style.color = textColor;
    });
  }, []);

  function isColorLight(color) {
    // Convierte el color a RGB
    const rgb = color.substring(5, color.length-1)
                      .replace(/ /g, '')
                      .split(',');
                      console.log(rgb)
    const brightness = ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
    console.log(brightness)
    // Determina si el color es claro o oscuro
    return brightness > 128;
  }

  return (
    <div className="frame">
      <Frame />
      <div className="home" id="background-element" >
        {/* <Blob /> */}
        <p className="color-change">We are the full-stack developers who deliver impactful web solutions that resonate in the digital world</p>
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