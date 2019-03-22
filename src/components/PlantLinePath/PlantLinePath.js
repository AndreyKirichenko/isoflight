import React from 'react';
import CoordStringify from '../../services/CoordStringify';
import Shapes from '../../services/Shapes';

const PlantLinePath = (props) => {
  const { fill } = props;

  const d = CoordStringify.getString(Shapes.plantLine(props));

  return (
    <path d={d}
          fill={fill}
    />
  );
};

export default PlantLinePath;
