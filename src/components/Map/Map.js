import React, { Component } from 'react';
import { Container, withPixiApp } from '@inlet/react-pixi';
import Bioms from '../Bioms';
import Isometry from '../../services/Isometry';
import { withScale, withPointOfView, withBioms } from '../HOCs';
import compose from '../../helpers/compose';
import Clouds from '../Clouds';

class Map extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.pointOfView.x !== this.props.pointOfView.x ||
           nextProps.pointOfView.y !== this.props.pointOfView.y;
  }

  render() {
    const { x, y } = Isometry.toFrontalCoords(this.props.pointOfView.x, this.props.pointOfView.y);

    return (
      <Container x={-x + this.props.environment.width / 2}
                 y={-y  + this.props.environment.height / 2}>
        <Bioms {...this.props} />
      </Container>
    );
  }
}

export default compose(
  withPixiApp,
  withScale,
  withPointOfView,
  withBioms
)(Map);
