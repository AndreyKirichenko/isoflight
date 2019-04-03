import React from 'react';
import { Group } from 'react-konva';
import Field from '../Field/Field';
import PlantLine from '../PlantLine';
import FieldPlants from "../FieldPlants";

const Biom = (props) => {
  const getField = () => {
    return (
      <Field {...props.field} isCurrent={false} />
    );
  };

  const getFieldPlants = () => {
    return (
      <FieldPlants { ...props.fieldPlants } />
    );
  };

  const getBorderLine = (borderLine) => {
    const scaleX = borderLine.reflected ? -1: 1;
    return (
      <Group scaleX={scaleX}>
        <PlantLine {...borderLine} />
      </Group>
    );
  };

  return (
    <Group {...props.frontalCoords}>
      { getField() }
      { getBorderLine(props.borderLineX) }
      { getBorderLine(props.borderLineY) }
      { getFieldPlants() }
    </Group>
  );
};

export default Biom;
