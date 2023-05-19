import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import animations from '../animations/navbarAnimations';

const NavBar = () => {
  return (
    <motion.nav className="navbar"
      key={'navbar'}
      variants={animations.navbar}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <ul>
        <li><Link to={'/'}>{'<Home />'}</Link></li>
        <li><Link to={'/projects'}>{'<Projects />'}</Link></li>
        <li><Link to={'/about-us'}>{'<About Us />'}</Link></li>
        <li><Link to={'/contact'}>{'<Contact />'}</Link></li>
      </ul>
    </motion.nav>
  )
}

export default NavBar;