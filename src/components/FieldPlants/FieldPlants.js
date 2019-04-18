import React from 'react';
import { Container } from '@inlet/react-pixi';
import PlantLine from '../PlantLine';

const FieldPlants = (props) => {
  const { lightColor, shadowColor, shapes, reflected } = props;

  const allPlants = () => {
    return shapes.map((shapes, key) => {

        const plantLineProps = {
          shapes,
          lightColor,
          shadowColor
        };

        return (
          <PlantLine {...plantLineProps} key={key} />
        );
    });
  };

  const scaleX = reflected ? -1: 1;

  return (
    <Container scale={{
      x: scaleX,
      y: 1
    }} >
      { allPlants() }
    </Container>
  );
};

export default FieldPlants;
