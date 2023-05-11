import "./projectCard.css";
import PropTypes from "prop-types";
import leftArrow from '../assets/icons/arrow_left.png';
import downArrow from '../assets/icons/arrow_down.png'

const ProjectCard = ({ info, showInfo, handleShow, handleClose, handleScrollColor }) => {
  const { title, subtitle, about, show, color } = info;

  const handleClick = (color) => {
    if (showInfo) {
      handleClose();
    } else {
      handleShow(title);
      handleScrollColor(color);
    }
  }

  return (
    <div className="project_card_container">
      <div className="title_arrow_container">
        <h2>{title}</h2>
        <img className={!showInfo ? "left_arrow" : "down_arrow"} src={!showInfo ? leftArrow : downArrow} alt="left arrow" onClick={() => handleClick(color)} />
      </div>
      <h3 style={{ color: showInfo && `${color}` }}>{subtitle}</h3>
      {showInfo &&
        <div className="about_show_div">
          <p>{about}</p>
          <p>{show}</p>
        </div>
      }
      <div className="projects_cards_container">
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  info: PropTypes.object.isRequired,
  showInfo: PropTypes.bool.isRequired,
  handleShow: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleScrollColor: PropTypes.func.isRequired
}

export default ProjectCard;

