import { NavLink, useLocation } from "react-router-dom";
import { useViewport } from "../hooks/useViewport";
import { motion } from "framer-motion";
import animations from '../animations/navbarAnimations';
import activeBullet from '../assets/icons/item-menu-active.png';

const NavBar = () => {
  const { windowWidth } = useViewport();
  const location = useLocation();

  return (
    <motion.nav className="navbar"
      key={'navbar'}
      variants={animations.navbar}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <ul>
        <li>
          <NavLink to={'/'}>
            {location.pathname === '/' && windowWidth <= 1000 ? <img className="active-bullet" src={activeBullet} alt="active bullet" /> : '<Home />'}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/projects'}>
            {location.pathname === '/projects' && windowWidth <= 1000 ? <img className="active-bullet" src={activeBullet} alt="active bullet" /> : '<Projects />'}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/about-us'}>
            {location.pathname === '/about-us' && windowWidth <= 1000 ? <img className="active-bullet" src={activeBullet} alt="active bullet" /> : '<About Us />'}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>
            {location.pathname === '/contact' && windowWidth <= 1000 ? <img className="active-bullet" src={activeBullet} alt="active bullet" /> : '<Contact />'}
          </NavLink>
        </li>
      </ul>
    </motion.nav>
  )
}

export default NavBar;
