import React, { Component } from 'react';
import Path from '../Path';
import Shapes from '../../services/Shapes';

class Clouds extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  render() {
    const d = Shapes.cloud({
      height: 100,
      width: 400,
      leftPoints: 5,
      rightPoints: 3,
      fuzziness: 1.33
    });

    return (
      <Path x={300} y={100} d={d} fill={0xccccff} />
    );
  }
}

export default Clouds;
