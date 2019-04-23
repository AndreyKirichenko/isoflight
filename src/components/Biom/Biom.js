import React, { Component } from 'react';
import { Container } from '@inlet/react-pixi';
import Field from '../Field/Field';
import PlantLine from '../PlantLine';
import FieldPlants from '../FieldPlants';
import Cloud from "../Cloud";

class Biom extends Component {
  _isMounted = false;

  state = {
    data: null
  };

  componentDidMount() {
    this._isMounted = true;

    this.props.biomPreset.then((data) => {

      if (this._isMounted) {
        this.setState({
          data,
        });
      }
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.data !== this.state.data;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getField = (field) => {
    return (
      <Field { ...field} isCurrent={false} />
    );
  };

  getFieldPlants = (fieldPlants) => {
    return (
      <FieldPlants { ...fieldPlants } />
    );
  };

  getBorderLine = (borderLine) => {
    const scaleX = borderLine.reflected ? -1: 1;

    return (
      <Container  scale={{
        x: scaleX,
        y: 1
      }}>
        <PlantLine {...borderLine} />
      </Container>
    );
  };

  getCloud = (cloud) => {
    if(!cloud) return null;
    return (
      <Cloud {...cloud} />
    );
  };

  render() {
    if (!this.state.data) return null;

    const { borderLineX, borderLineY, field, fieldPlants, cloud, frontalCoords } = this.state.data;

    return (
      <Container {...frontalCoords}>
        { this.getField(field) }
        { this.getBorderLine(borderLineX) }
        { this.getBorderLine(borderLineY) }
        { this.getFieldPlants(fieldPlants) }
        {/*{ this.getCloud(cloud) }*/}
      </Container>
    );
  }
}

export default Biom;
