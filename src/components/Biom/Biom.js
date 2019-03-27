import React from 'react';
import Field from '../Field/Field';
// import PlantLine from '../PlantLine';
// import FieldPlants from "../FieldPlants";

const Biom = (props) => {
  const getField = () => {
    return (
      <Field {...props.field} isCurrent={false} />
    );
  };

  const getTransform = () => {
    const { x, y } = props.frontalCoords;

    return `translate(${x},${y})`;
  };

  const getFieldPlants = () => {
    return null;
  };

  return (
    <g transform={getTransform()}>
      { getField() }
      { getFieldPlants() }
    </g>
  );
};

export default Biom;
