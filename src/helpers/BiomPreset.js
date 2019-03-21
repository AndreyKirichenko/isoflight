import Isometry from "./Isometry";
import Random from "./Random";
import { summer, winter } from "../presets";
import Shapes from './Shapes';


class BiomPreset {
  static create(x, y, scale, season = 'summer') {

    const frontalCoords =
      Isometry.toFrontalCoords(x * scale, y * scale);

    const data = BiomPreset.getRandomBiomPreset(season, scale);

    return {
      scale,
      frontalCoords: {
        x: frontalCoords.x,
        y: frontalCoords.y
      },
      data
    };
  }

  static getRandomFieldPreset = (colorSchemes, scale) => {
    const fieldId = Random.getRandomPropertyName(colorSchemes.fields);

    const name = Random.getRandomPropertyName(colorSchemes.fields[fieldId]);

    const colors = colorSchemes.fields[fieldId][name];

    const color = Random.getRandomArrayItem(colors);

    const getShapes = Shapes.field(scale);

    return {
      fieldId,
      color,
      getShapes
    }
  };

  static getRandomPlantPreset = ({ colorSchemes, fieldId, scale } ) => {

  };

  static getRandomBorderLinePreset = (colorSchemes, scale) => {
    const name = Random.getRandomPropertyName(colorSchemes.plantLines);

    const borderLine = {...colorSchemes.plantLines[name]};

    const { lightColor, darkColor } = borderLine;

    return {
      name,
      lightColor,
      darkColor
    }
  };

  static getRandomBiomPreset = (season = 'summer', scale) => {
    const colorSchemes = BiomPreset.getColorPresetsBy(season);

    const field = BiomPreset.getRandomFieldPreset(colorSchemes, scale);

    const borderLineX = BiomPreset.getRandomBorderLinePreset(colorSchemes, scale);

    const borderLineY = BiomPreset.getRandomBorderLinePreset(colorSchemes, scale);

    return {
      field,
      borderLineX,
      borderLineY
    };
  };

  static getColorPresetsBy = (season) => {
    switch (season) {
      case 'summer':
        return {...summer};
      case 'winter':
        return {...winter};
      default:
        return {...summer};
    }
  };
}

export default BiomPreset;
