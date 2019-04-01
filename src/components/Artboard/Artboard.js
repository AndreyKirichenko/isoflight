import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import compose from '../../helpers/compose';
import { withEnvironment } from '../HOCs';


class Artboard extends Component {
  render() {
    const { children, environment} = this.props;

    return (
      <Stage {...environment} >
        <Layer>
          { children }
        </Layer>
      </Stage>
    );
  }
}

export default compose(
  withEnvironment
)(Artboard);
