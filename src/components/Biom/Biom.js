import React, { Component } from 'react';
import { Group } from 'react-konva';
import Field from '../Field/Field';
import PlantLine from '../PlantLine';
import FieldPlants from "../FieldPlants";

class Biom extends Component {
  _isMounted = false;

  state = {
    data: null
  };

  componentDidMount() {
    this._isMounted = true;

    this.props.data.then((data) => {
      if (this._isMounted) {
        this.setState({
          data
        });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getField = () => {
    return (
      <Field { ...this.state.data.field} isCurrent={false} />
    );
  };

  getFieldPlants = () => {
    return (
      <FieldPlants { ...this.state.data.fieldPlants } />
    );
  };

  getBorderLine = (borderLine) => {
    const scaleX = borderLine.reflected ? -1: 1;
    return (
      <Group scaleX={scaleX}>
        <PlantLine {...borderLine} />
      </Group>
    );
  };

  render() {
    if (!this.state.data) return null;

    return (
      <Group {...this.props.frontalCoords}>
        { this.getField() }
        { this.getBorderLine(this.state.data.borderLineX) }
        { this.getBorderLine(this.state.data.borderLineY) }
        { this.getFieldPlants() }
      </Group>
    );
  }
}

export default Biom;
