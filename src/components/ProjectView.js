import React, { Component } from 'react';
import Carousel from './Carousel';
import './styles/ProjectView.css';

class ProjectView extends Component {
  render() {
    return (
      <section id="project-view">
        <Carousel />
      </section>
    );
  }
}

export default ProjectView;
