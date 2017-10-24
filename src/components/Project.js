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
        <div style={bgImage} className="project-image" />
      </section>
    </article>
  )
}

export default Project;
