import React from 'react';
import './styles/Project.css';

function Project({ index }) {
  const image = require(`../assets/${'wellness_game'}.${'gif'}`);
  const position = { left: `${100 * index}%`};
  const bg = { backgroundImage: `url(${image})` };

  return (
    <article style={position} id="project">
      <section className="project-profile">
        <h2 className="project-title">Wellness Game</h2>
        <div style={bg} className="project-image" />
      </section>
      <section className="project-info">
        <section className="project-links">
          <a className="project-link" href="">Github</a>
          <a className="project-link" href="">Github</a>
        </section>
        <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vero eaque culpa quae est nam, eos, neque iste architecto repellat quisquam, blanditiis nulla deleniti ut harum deserunt sed dolorum doloremque.</p>
      </section>
    </article>
  )
}

export default Project;
