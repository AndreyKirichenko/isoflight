import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import compose from '../../helpers/compose';
import { withEnvironment, withPointOfView } from '../HOCs';


class Artboard extends Component {
  render() {
    const { children, environment, pointOfView} = this.props;

    const childrenWithProps = React.Children.map(children, (child) => {
      const childProps = {
        environment,
        pointOfView
      };

      // is it expensive operation?
      return React.cloneElement(child, childProps);
    });

    return (
      <Stage {...environment} >
        <Layer>
          { childrenWithProps }
        </Layer>
      </Stage>
    );
  }
}

export default compose(
  withEnvironment,
  withPointOfView
)(Artboard);
