import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to={'/'}>{'<Home />'}</Link></li>
        <li><Link to={'/projects'}>{'<Projects />'}</Link></li>
        <li><Link to={'/about-us'}>{'<About Us />'}</Link></li>
        <li><Link to={'/contact'}>{'<Contact />'}</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;