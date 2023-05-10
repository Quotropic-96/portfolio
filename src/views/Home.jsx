import { Link } from "react-router-dom";
import './Home.css';
import Frame from "../components/Frame";
import blob from '../assets/blobs/home-blob.svg';

const Home = () => {
  return (
    <div className="frame home">
      <Frame />
      <h1>QuoDev</h1>
      <ul>
        <li><Link to={'/projects'}>Projects</Link></li>
        <li><Link to={'/about-us'}>About Us</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
      <p>We are the full-stack developers who deliver impactful web solutions that resonate in the digital world</p>
      <img className="homeBlob" src={blob} alt="Background blob" />
    </div>
  );
 }

export default Home;