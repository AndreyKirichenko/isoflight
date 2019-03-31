import React from 'react';
import CoordStringify from '../../helpers/CoordStringify';

const PlantLinePath = (props) => {
  const { fill, coords } = props;

  const d = CoordStringify.getString(coords);

  return (
    <path d={d}
          fill={fill}
    />
  );
};

export default PlantLinePath;
