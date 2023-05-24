import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import animations from '../animations/navbarAnimations';

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            {location.pathname === '/' && windowWidth <= 1000 ? '•' : '<Home />'}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/projects'}>
            {location.pathname === '/projects' && windowWidth <= 1000 ? '•' : '<Projects />'}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/about-us'}>
            {location.pathname === '/about-us' && windowWidth <= 1000 ? '•' : '<About Us />'}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>
            {location.pathname === '/contact' && windowWidth <= 1000 ? '•' : '<Contact />'}
          </NavLink>
        </li>
      </ul>
    </motion.nav>
  )
}

export default NavBar;
