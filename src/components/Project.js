import React from 'react';
import './styles/Project.css';

function Project({ index, project }) {
  const { sprite, description, title, backgroundColor, color } = project;
  const image = require(`../assets/${sprite}`);
  const style = { left: `${100 * index}%`, backgroundColor };
  const bgImage = { backgroundImage: `url(${image})` };
  const bgColor = { backgroundColor };
  const titleColor = { color };

  return (
    <article style={style} id="project">
      <section style={bgColor} className="project-profile">
        {/* <h2 style={titleColor} className="project-title">{title}</h2> */}
        <div style={bgImage} className="project-image" />
      </section>
      {/* <section className="project-info">
        <section className="project-links">
          <a className="project-link" href="">Github</a>
          <a className="project-link" href="">Github</a>
        </section>
        <p className="project-description">{description}</p>
      </section> */}
    </article>
  )
}

export default Project;
