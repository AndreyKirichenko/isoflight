import React, { Component } from 'react';
import { Group } from 'react-konva';
import compose from '../../helpers/compose';
import { withBioms } from '../HOCs';
import Bioms from '../Bioms'

class Map extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.pointOfView.x !== this.props.pointOfView.x ||
           nextProps.pointOfView.y !== this.props.pointOfView.y;
  }

  render() {
    return (
      <Group x={-this.props.pointOfView.x + this.props.environment.width / 2}
             y={-this.props.pointOfView.y  + this.props.environment.height / 2}>
        <Bioms {...this.props} />
      </Group>
    );
  }
}

export default compose(
  withBioms
)(Map);
