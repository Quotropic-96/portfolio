import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import animations from "../animations/navbarAnimations";

const NavBar = () => {
  const location = useLocation();

  return (
    <motion.nav
      className="navbar"
      key={"navbar"}
      variants={animations.navbar}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <ul>
        <li>
          <NavLink to={"/"}>
            {location.pathname === "/" ? "•" : "<Home />"}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/projects"}>
            {location.pathname === "/projects" ? "•" : "<Projects />"}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about-us"}>
            {location.pathname === "/about-us" ? "•" : "<About Us />"}
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>
            {location.pathname === "/contact" ? "•" : "<Contact />"}
          </NavLink>
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
