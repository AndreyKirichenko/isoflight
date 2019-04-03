import React, { Component } from 'react';
import { Group } from 'react-konva';
import compose from '../../helpers/compose';
import { withBiomsPresetter, withBiomsObserver } from '../HOCs';
import Bioms from '../Bioms'

class Map extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.pointOfView.x !== this.props.pointOfView.x ||
           nextProps.pointOfView.y !== this.props.pointOfView.y;
  }

  render() {
    return (
      <Group x={-this.props.pointOfView.x} y={-this.props.pointOfView.y}>
        <Bioms {...this.props} />
      </Group>
    );
  }
}

export default compose(
  withBiomsObserver,
  withBiomsPresetter
)(Map);
