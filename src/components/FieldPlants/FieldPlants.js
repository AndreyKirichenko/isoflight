import React from 'react';
import { Group } from 'react-konva';
import PlantLine from '../PlantLine';

const FieldPlants = (props) => {
  const { lightColor, shadowColor, shapePromises, reflected } = props;

  const allPlants = () => {
    return shapePromises.map((shapePromise, key) => {

        const plantLineProps = {
          shapePromise,
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
