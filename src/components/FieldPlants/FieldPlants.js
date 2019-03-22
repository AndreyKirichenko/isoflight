import React from 'react';
import PlantLine from '../PlantLine';
import Isometry from '../../services/Isometry';

const FieldPlants = ({ sideLength, preset, reflected }) => {

  const allPlants = () => {
    let result = [];
    const { quantity } = preset;

    const average = sideLength / quantity;

    let yReflected = reflected ? -1 : 1;

    for (let i = 1; i <= quantity; i++) {
      const transform =
        `translate(${-average * i * yReflected},${Isometry.getY(average * i)})`;

      result.push(
        <g key={i} transform={transform}>
          <PlantLine sideLength={sideLength}
                     preset={preset}
                     reflected={reflected}
          />
        </g>
      );
    }

    return result;
  };

  return (
    <g>
      {allPlants()}
    </g>
  );
};

export default FieldPlants;
