import React from 'react';
import { Path } from 'react-konva';
import CoordStringify from '../../helpers/CoordStringify';

const PlantLinePath = (props) => {
  const { fill, coords } = props;

  const data = CoordStringify.getString(coords);

  return (
    <Path data={data}
          fill={fill}
    />
  );
};

export default PlantLinePath;
