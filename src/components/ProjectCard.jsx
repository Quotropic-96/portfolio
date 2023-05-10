import PropTypes from "prop-types";

const ProjectCard = ({ info }) => {
  const { title, subtitle, about, show } = info;
  return (
    <div className="project_card_container">
      <h3>{title}</h3>
      <h2>{subtitle}</h2>
      <p>{about}</p>
      <p>{show}</p>
      <div className="projects_cards_container">
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  info: PropTypes.object.isRequired
}

export default ProjectCard;

