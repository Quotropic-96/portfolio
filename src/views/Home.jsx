import { Link } from "react-router-dom";
import Frame from "../components/Frame";

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
    </div>
  );
 }

export default Home;