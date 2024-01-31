import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/ProjectCard.css';

const ProjectCard = ({ project, members, onSelect }) => {
  return (
    <div onClick={onSelect} className="project-card">
      <h3>{project.name}</h3>
      <p>Started: {project.startDate}</p>
      <p>Total hours: {project.totalHours}</p>
      <p>Members: {members.join(', ')}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    totalHours: PropTypes.number.isRequired,
  }).isRequired,
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ProjectCard;