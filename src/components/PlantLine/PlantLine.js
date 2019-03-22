import React from 'react';
import PlantLinePath from '../PlantLinePath';

const PlantLine = ({ sideLength, preset, reflected }) => {

  let transform = reflected ? 'scale(-1,1)' : '';

  const lightPart = () => {

    if(!preset.lightPart) {
      return null;
    }
    return getPart(preset.lightPart);
  };

  const darkPart = () => {
    if(!preset.darkPart) {
      return null;
    }

    return getPart(preset.darkPart);
  };

  const getPart = (partPreset) => {

    return (
      <PlantLinePath {...partPreset}
                     sideLength={sideLength}
      />
    );
  };

  return (
    <g transform={transform}>
      {lightPart()}

      {darkPart()}
    </g>
  );
};

export default PlantLine;
