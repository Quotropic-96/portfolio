import "./projectCard.css";
import PropTypes from "prop-types";
import leftArrow from '../assets/icons/arrow_left.png';
// import downArrow from '../assets/icons/arrow_down.png';
import { motion, useAnimation } from "framer-motion";
import animations from '../animations/projectCardsAnimations';
import { useEffect } from "react";

const ProjectCard = ({ project, selectedTitle, handleSelectTitle, handleClose, handleScrollColor }) => {
  const { title, subtitle, about, show, color } = project;
  const cardControls = useAnimation();
  const arrowControls = useAnimation();

  useEffect(() => {
    if (selectedTitle) {
      cardControls.start(animations.card.animate);
      arrowControls.start(animations.arrow.animate);
    }else {
      cardControls.start(animations.card.exit);
      arrowControls.start(animations.arrow.exit);
    }
  },[arrowControls, cardControls, selectedTitle]);
  
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
    <motion.div className="project_card_container"
      key={title}
      animate={cardControls}
    >
      <div className="card_header" onClick={() => handleClick(color)}>
        <div className="title_arrow_container">
          <h2>{title}</h2>
          <motion.img
            className="left_arrow"
            src={leftArrow}
            alt="Arrow"
            animate={arrowControls}
          />
        </div>
        <h3 style={{ color: selectedTitle && `${color}` }}>{subtitle}</h3>
      </div>
      <div className="about_show_div">
        <p>{about}</p>

        {/* <p
          className={color === "#015CA0" ? "show_p white" : "show_p"}
          style={{ backgroundColor: `${color}` }}
        >
          {show}
        </p> */}
      </div>
      <div className="projects_cards_container"></div>
    </motion.div>
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

