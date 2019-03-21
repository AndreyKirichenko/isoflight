import Isometry from "./Isometry";
import Random from "./Random";
import { summer, winter } from "../presets";
import Shapes from './Shapes';


class BiomPreset {
  static create(x, y, scale, season = 'summer') {

    const frontalCoords =
      Isometry.toFrontalCoords(x * scale, y * scale);

    const data = BiomPreset.getRandomBiomPreset(season, scale);

    return Object.assign({
      scale,
      frontalCoords: {
        x: frontalCoords.x,
        y: frontalCoords.y
      }
    }, data);
  }

  static getRandomBiomPreset = (season = 'summer', scale) => {
    const colorSchemes = BiomPreset.getColorPresetsBy(season);

    const field = BiomPreset.getRandomFieldPreset(colorSchemes, scale);

    const fieldPlants = BiomPreset.getRandomFieldPlantsPreset(colorSchemes, field.fieldId);

    // const borderLineX = BiomPreset.getRandomBorderLinePreset(colorSchemes, scale);
    //
    // const borderLineY = BiomPreset.getRandomBorderLinePreset(colorSchemes, scale);

    return {
      field,
      fieldPlants
      // borderLineX,
      // borderLineY
    };
  };

  static getRandomFieldPlantsPreset = ( colorSchemes, fieldId ) => {
    const plantsName = BiomPreset.getRandomPlantName(colorSchemes, fieldId);

    const fieldPlantColor = BiomPreset.getRandomFieldPlantColor(colorSchemes, fieldId, plantsName);

    return {
      plantsName,
      fieldPlantColor
    }
  };


  static getRandomFieldId = (colorSchemes) => {
    return Random.getRandomPropertyName(colorSchemes.fields);
  };

  static getRandomPlantName = (colorSchemes, fieldId) => {
    return Random.getRandomPropertyName(colorSchemes.fields[fieldId]);
  };

  static getRandomFieldPlantColor = (colorSchemes, fieldId, plantName) => {
    const colors = colorSchemes.fields[fieldId][plantName];
    return Random.getRandomArrayItem(colors);
  };

  static getRandomFieldPreset = (colorSchemes, scale) => {
    const fieldId = BiomPreset.getRandomFieldId(colorSchemes);

    const getShapes = Shapes.field(scale);

    return {
      fieldId,
      color: fieldId,
      getShapes
    }
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
