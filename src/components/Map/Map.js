import React, { Component } from 'react';
import { Stage, Layer, Group } from 'react-konva';
import { withMapPresetter, withObserver, withEnvironment} from '../HOCs';
import compose from '../../helpers/compose';
import Bioms from '../Bioms'

class Map extends Component {
  static getCommonPosition (width, height) {
    const x = width / 2;
    const y = -height;

    return {
      x,
      y
    };
  };

  render() {
    const { window, window: { width, height } } = this.props;

    return (
      <Stage {...window} >
        <Layer>
          <Group>
            <Bioms {...this.props} />
          </Group>
        </Layer>
      </Stage>
    );
  }
}

export default compose(
  withEnvironment,
  withObserver,
  withMapPresetter
)(Map);
