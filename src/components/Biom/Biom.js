import React from 'react';
import Field from '../Field/Field';
// import PlantLine from '../PlantLine';
// import FieldPlants from "../FieldPlants";

const Biom = (props) => {
  console.log(props);
  const getField = () => {
    return (
      <Field {...props.field}/>
    );
  };

  const getTransform = () => {
    const { x, y } = props.frontalCoords;
    return `translate(${x},${y})`;
  };

  return (
    <g transform={getTransform()}>
      {getField()}
    </g>
  );
};

export default Biom;
