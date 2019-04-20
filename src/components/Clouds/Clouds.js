import React, { Component } from 'react';
import Path from '../Path';
import Shapes from '../../services/Shapes';

class Clouds extends Component {
  render() {
    const d = Shapes.cloud({
      height: 80,
      pointsBetween: 5,
      width: 200
    });
    //
    // const d = Shapes.plantLine({
    //   minHeight: 30,
    //   maxHeight:60,
    //   pointsBetween: 40,
    //   scale: 240,
    //   flX: 1,
    //   flY: 0.5,
    //   flCX: 0.25,
    // })

    return (
      <Path x={100} y={100} d={d} fill={0x000000} />
    );
  }
}

export default Clouds;
