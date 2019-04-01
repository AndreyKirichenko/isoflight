import React, { Component } from 'react';
import { Group } from 'react-konva';
import compose from '../../helpers/compose';
import { withBiomsPresetter, withObserver } from '../HOCs';
import Bioms from '../Bioms'

class Map extends Component {
  render() {

    return (
      <Group>
        <Bioms {...this.props} />
      </Group>
    );
  }
}

export default compose(
  withObserver,
  withBiomsPresetter
)(Map);
