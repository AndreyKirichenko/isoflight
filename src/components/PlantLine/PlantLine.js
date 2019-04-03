import React, { Component } from 'react';
import { Group } from 'react-konva';
import PlantLinePath from '../PlantLinePath';

class PlantLine extends Component {

  state = {
    data: null,
    rendered: false
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextState.data !== this.state.data
  }

  componentDidMount() {
    this.props.shapePromise.then((data) => {

      this.setState({
        data
      })
    })
  }

  static getPart(coords, fill, frontalCoords) {
    return (
      <Group {...frontalCoords}>
        <PlantLinePath coords={coords} fill={fill} />
      </Group>
    );
  }

  lightPart() {
    const { lightShape, frontalCoords } = this.state.data;
    const { lightColor } = this.props;

    if(!lightShape) {
      return null;
    }

    return PlantLine.getPart(lightShape, lightColor, frontalCoords);
  };

  darkPart() {
    const { shadowShape, frontalCoords } = this.state.data;
    const { shadowColor } = this.props;
    if(!shadowShape) {
      return null;
    }

    return PlantLine.getPart(shadowShape, shadowColor, frontalCoords);
  };

  render() {
    if(!this.state.data) return null;
    const scaleX = this.state.data.reflected ? -1 : 1;

    return (
      <Group scaleX={scaleX}>
        { this.lightPart() }
        { this.darkPart() }
      </Group>
    );
  }
}

export default PlantLine;
