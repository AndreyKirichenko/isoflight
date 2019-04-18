import React, { Component } from 'react';
import { Container } from '@inlet/react-pixi';
import Path from '../Path';

class PlantLine extends Component {

  state = {
    data: null
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextState.data !== this.state.data
  }

  componentDidMount() {
    this.setState({
      data: this.props.shapes
    });
  }

  static getPart(coords, fill, frontalCoords) {
    return (
      <Container {...frontalCoords}>
        <Path d={coords} fill={fill} />
      </Container>
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
      <Container scale={{
        x: scaleX,
        y: 1
      }}>
        { this.lightPart() }
        { this.darkPart() }
      </Container>
    );
  }
}

export default PlantLine;
