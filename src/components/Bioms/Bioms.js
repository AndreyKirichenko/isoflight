import React from 'react';
import Biom from '../Biom';
import BiomPreset from "../../helpers/BiomPreset";

const Bioms = ({bioms}) => {
  const getBioms = () => {
    if(!bioms.length) return null;

    return bioms.map((biom, key) => {
      return (
        <Biom {...biom} key={key} />
      );
    });
  };

  return (
    <g>
      {getBioms()}
    </g>
  );
};

export default Bioms;
