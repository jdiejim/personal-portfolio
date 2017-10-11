import React, { Component } from 'react';
import Arrow from './Arrow';
import Canvas from './Canvas';
import Project from './Project';
import projectsData from '../projects';
import './styles/ProjectView.css';

class ProjectView extends Component {
  constructor() {
    super();
    this.state = {
      position: 0,
    }
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    const position = this.state.position - 1;

    this.setState({ position });
  }

  handleIncrement() {
    const position = this.state.position + 1;

    this.setState({ position });
  }

  render() {
    const { position } = this.state;
    const viewPosition = { left: `${position * -100}%` };
    const projects = projectsData.map((project, i) => <Project key={project.id} index={i} project={project} />);
    const left = position !== 0 ? this.handleDecrement : null;
    const right = position !== projects.length - 1 ? this.handleIncrement : null;

    return (
      <section id="project-view">
        {/* <Canvas /> */}
        <section className="project-list">
          <Arrow id="left" handleOnClick={left} />
          <Arrow id="right" handleOnClick={right} />
          <section style={viewPosition} className="project-viewbox">
            {projects}
          </section>
        </section>
      </section>
    );
  }
}

export default ProjectView;
