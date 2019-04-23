import React, { Component } from 'react';
import { Graphics } from '@inlet/react-pixi';

class Path extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  m = (g, data) => {
    const { x, y } = data;
    g.moveTo(x, y);
  };

  c = (g, data) => {
    const { c1x, c1y, c2x, c2y, x, y } = data;
    g.bezierCurveTo(c1x, c1y, c2x, c2y, x, y);
  };

  l = (g, data) => {
    const { x, y } = data;
    g.lineTo(x, y);
  };

  draw = (g) => {
    const { d = [], fill } = this.props;
    g.beginFill(fill);

    d.forEach((data) => {
      this[data.type.toLowerCase()](g, data);
    });

    g.endFill();
  };

  render() {
    return (
      <Graphics {...this.props} draw={this.draw} />
    );
  }
}

export default Path;
