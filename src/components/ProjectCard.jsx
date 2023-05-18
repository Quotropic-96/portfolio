import "./projectCard.css";
import PropTypes from "prop-types";
import leftArrow from '../assets/icons/arrow_left.png';
import downArrow from '../assets/icons/arrow_down.png';
import { motion } from "framer-motion";
import animations from '../animations/projectCardsAnimations';

const ProjectCard = ({ project, selectedTitle, handleSelectTitle, handleClose, handleScrollColor }) => {
  const { title, subtitle, about, show, color } = project;
  const handleClick = (color) => {
    if (selectedTitle) {
      handleClose();
      handleScrollColor(null);
    } else {
      handleSelectTitle(title);
      handleScrollColor(color);
    }
  };

  return (
    <div className="project_card_container">
      <div className="title_arrow_container">
        <h2>{title}</h2>
        <img
          className={!selectedTitle ? "left_arrow" : "down_arrow"}
          src={!selectedTitle ? leftArrow : downArrow}
          alt="left arrow"
          onClick={() => handleClick(color)}
        />
      </div>
      <h3 style={{ color: selectedTitle && `${color}` }}>{subtitle}</h3>
      {selectedTitle && (
        <motion.div className="about_show_div"
          key={title}
          variants={animations.card}
          initial="hidden"
          animate="animate"
          exit="exit"
        >
          <p>{about}</p>

          <p
            className={color === "#015CA0" ? "show_p white" : "show_p"}
            style={{ backgroundColor: `${color}` }}
          >
            {show}
          </p>
        </motion.div>
      )}
      <div className="projects_cards_container"></div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  selectedTitle: PropTypes.bool.isRequired,
  handleSelectTitle: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleScrollColor: PropTypes.func.isRequired,
}

export default ProjectCard;

