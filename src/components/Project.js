import React from 'react';
import './styles/Project.css';

function Project({ index, project }) {
  const { sprite, description, title } = project;
  const image = require(`../assets/${sprite}`);
  const position = { left: `${100 * index}%`};
  const bg = { backgroundImage: `url(${image})` };

  return (
    <article style={position} id="project">
      <section className="project-profile">
        <h2 className="project-title">{title}</h2>
        <div style={bg} className="project-image" />
      </section>
      <section className="project-info">
        <section className="project-links">
          <a className="project-link" href="">Github</a>
          <a className="project-link" href="">Github</a>
        </section>
        <p className="project-description">{description}</p>
      </section>
    </article>
  )
}

export default Project;
