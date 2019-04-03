import React, { Component } from 'react';
import { Path } from 'react-konva';
import CoordStringify from '../../services/CoordStringify';

class PlantLinePath extends Component {

  shouldComponentUpdate(nextProps) {
    return false;
  }

  render() {

    const { fill, coords } = this.props;

    const data = CoordStringify.getString(coords);

    return (
      <Path data={data}
            fill={fill}
      />
    );
  }
}

export default PlantLinePath;
