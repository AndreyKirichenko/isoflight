import React from 'react';
import Field from '../Field/Field';
// import PlantLine from '../PlantLine';
// import FieldPlants from "../FieldPlants";


const Biom = (props) => {

  const getField = () => {
    // const getShapes = props.data.field.getShapes;
    // return null;

    return (
      <Field {...props.data.field}/>
    );
  };

  console.log(props);

  return (
    <g>
      {getField()}
    </g>
  );
};

export default Biom;
