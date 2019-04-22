import React, { Component } from 'react';
import Path from '../Path';
import Shapes from '../../services/Shapes';

class Cloud extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  render() {
    const { d, fill } = this.props;


    return (
      <Path d={d} fill={0xccccff} />
    );
  }
}

export default Cloud;
