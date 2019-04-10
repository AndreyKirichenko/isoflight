import React from 'react';
import { Group } from 'react-konva';
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
    <Group scaleX={scaleX} >
      { allPlants() }
    </Group>
  );
};

export default FieldPlants;
