import React from 'react';
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

  const transform = reflected ? 'scale(-1,1)': '';

  return (
    <g transform={transform}>
      {  allPlants() }
    </g>
  );
};

export default FieldPlants;
