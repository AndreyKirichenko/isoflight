import React from 'react';
import Field from '../Field/Field';
import PlantLine from '../PlantLine';
import FieldPlants from "../FieldPlants";

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
    return (
      <FieldPlants { ...props.fieldPlants } />
    );
  };


  const getBorderLine = (borderLine) => {
    const transform = borderLine.reflected ? 'scale(-1,1)': '';
    return (
      <g transform={transform}>
        <PlantLine {...borderLine} />
      </g>
    );
  };

  return (
    <g transform={getTransform()}>
      { getField() }
      { getBorderLine(props.borderLineX) }
      { getBorderLine(props.borderLineY) }
      { getFieldPlants() }
    </g>
  );
};

export default Biom;
