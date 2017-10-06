import React, { Component } from 'react';
import { getArrow } from '../helper';
import Arrow from './Arrow';
import Project from './Project';
import './styles/Carousel.css';

class Carousel extends Component {
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
    const array = [1, 2, 3];
    const viewPosition = { left: `${position * -100}%` };
    const projects = array.map((project, i) => <Project key={project} index={i} />);
    const left = position !== 0 ? getArrow(true, this.handleDecrement) : <span />;
    const right = position !== projects.length - 1 ? getArrow(false, this.handleIncrement) : <span />;

    return (
      <section id="carousel">
        {left}
        <section className="carousel-list">
          <section style={viewPosition} className="carousel-viewbox">
            {projects}
          </section>
        </section>
        {right}
      </section>
    );
  }
}

export default Carousel;
