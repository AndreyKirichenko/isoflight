import React, { Component } from 'react';
import PlantLinePath from '../PlantLinePath';

class PlantLine extends Component {

  state = {
    data: null
  };

  componentDidMount() {
    this.props.shapePromise.then((data) => {

      this.setState({
        data
      })
    })
  }

  static getPart(coords, fill, transform='') {
    return (
      <g transform={transform}>
        <PlantLinePath coords={coords} fill={fill} />
      </g>
    );
  }

  lightPart() {
    const { lightShape, transform } = this.state.data;
    const { lightColor } = this.props;

    if(!lightShape) {
      return null;
    }

    return PlantLine.getPart(lightShape, lightColor, transform);
  };

  darkPart() {
    const { shadowShape, transform } = this.state.data;
    const { shadowColor } = this.props;
    if(!shadowShape) {
      return null;
    }

    return PlantLine.getPart(shadowShape, shadowColor, transform);
  };


  render() {
    if(!this.state.data) return null;

    const reflected = this.state.data.reflected ? 'scale(-1,1)' : '';

    return (
      <g transform={reflected}>
        { this.lightPart() }
        { this.darkPart() }
      </g>
    );
  }
}

export default PlantLine;
