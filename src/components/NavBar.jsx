import { NavLink, useLocation } from "react-router-dom";
import { useViewport } from "../hooks/useViewport";
import { motion } from "framer-motion";
import animations from '../animations/navbarAnimations';
import activeBullet from '../assets/icons/item-menu-active.png';
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { windowWidth } = useViewport();
  const location = useLocation();
  const [t, i18n] = useTranslation('global');

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
            {location.pathname === '/' && windowWidth <= 1000 ? <img className="active-bullet" src={activeBullet} alt="active bullet" /> : t('navbar.home')}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/projects'}>
            {location.pathname === '/projects' && windowWidth <= 1000 ? <img className="active-bullet" src={activeBullet} alt="active bullet" /> : t('navbar.projects')}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/about-us'}>
            {location.pathname === '/about-me' && windowWidth <= 1000 ? <img className="active-bullet" src={activeBullet} alt="active bullet" /> : t('navbar.about')}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>
            {location.pathname === '/contact' && windowWidth <= 1000 ? <img className="active-bullet" src={activeBullet} alt="active bullet" /> : t('navbar.contact')}
          </NavLink>
        </li>
      </ul>
    </motion.nav>
  )
}

export default NavBar;
