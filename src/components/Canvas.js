import React, { Component } from 'react';
import './styles/Canvas.css';

class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      ctx: null,
    };
    this.updateCanvas = this.updateCanvas.bind(this);
  }

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.canvas.getContext('2d');

    ctx.fillRect(500, 500, 100, 100);
    this.setState({ ctx });
  }

  render() {
    return (
      <canvas
        id="canvas"
        width={window.innerWidth}
        height={window.innerHeight}
        ref={(canvas) => { this.canvas = canvas; }} 
      />
    )
  }
}

export default Canvas;
