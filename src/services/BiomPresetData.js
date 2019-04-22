import Random from './Random';
import Shapes from './Shapes';
import { groundObjects, summer, winter } from '../presets';
import Isometry from './Isometry';

class BiomPresetData {
  static getRandomBiomPreset = (scale, season = 'summer') => {
    const colorSchemes = BiomPresetData.getColorPresetsBy(season);

    const field = BiomPresetData.getRandomFieldPreset(colorSchemes, scale);

    const fieldPlants = BiomPresetData.getRandomFieldPlantsPreset(colorSchemes, field.id, scale);

    const borderLineX = BiomPresetData.getRandomBorderLinePreset(colorSchemes, scale);

    const borderLineY = BiomPresetData.getRandomBorderLinePreset(colorSchemes, scale, true);

    const cloud = BiomPresetData.getCloud(scale);

    return {
      field,
      fieldPlants,
      borderLineX,
      borderLineY,
      cloud
    };
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

  static getBorderLineColors = (colorSchemes, plantName) => {
    return colorSchemes.plantLines[plantName];
  };

  static getRandomFieldPreset = (colorSchemes, scale) => {
    const id = BiomPresetData.getRandomFieldId(colorSchemes);

    const shape = Shapes.field(scale);

    return {
      id,
      color: id,
      shape
    }
  };

  static getAverage = (scale, quantity) => {
    return scale / quantity;
  };

  static getRandomFieldPlantsPreset = ( colorSchemes, fieldId, scale ) => {
    const name = BiomPresetData.getRandomPlantName(colorSchemes, fieldId);

    const lightColor = BiomPresetData.getRandomFieldPlantColor(colorSchemes, fieldId, name);

    const shapes = BiomPresetData.getRandomFieldPlantsShapes(name, scale);

    const reflected = Random.getRandomBool();

    return {
      name,
      lightColor,
      shapes,
      reflected
    }
  };

  static getRandomFieldPlantsShapes = (plantsName, scale) => {
    const { quantity, lightShape } = groundObjects.plantLines[plantsName];

    let shapes = [];

    const average = BiomPresetData.getAverage(scale, quantity);

    for (let i = 1; i <= quantity; i++) {
      const frontalCoords = {
        x: -average * i + 1,
        y: Isometry.getY(average * i + 1)
      };

      shapes.push(
        BiomPresetData.getRandomFieldPlantLineShapes({ lightShape, frontalCoords, scale })
      );
    }

    return shapes;
  };

  static getRandomBorderLinePreset = (colorSchemes, scale, reflected=false) => {
    const name = Random.getRandomPropertyName(colorSchemes.plantLines);

    const { lightShape, shadowShape } = groundObjects.plantLines[name];

    const colors = BiomPresetData.getBorderLineColors(colorSchemes, name);

    const lightColor = colors.lightShape.fill;

    const shadowColor = colors.shadowShape.fill;

    const shapes = BiomPresetData.getRandomFieldPlantLineShapes({ lightShape, shadowShape, scale });

    return {
      name,
      lightColor,
      shadowColor,
      shapes,
      reflected
    }
  };

  static getRandomFieldPlantLineShapes = ({ lightShape, shadowShape, frontalCoords, scale }) => {
    let l = null;
    let s = null;


    if(lightShape) {
      lightShape.scale = scale;
      l = Shapes.plantLine(BiomPresetData.normalizeShapeScale(lightShape));
    }

    if(shadowShape) {
      shadowShape.scale = scale;
      s = Shapes.plantLine(BiomPresetData.normalizeShapeScale(shadowShape));
    }

    return {
      frontalCoords,
      lightShape: l,
      shadowShape: s,
    }
  };

  static getCloud = (scale) => {
    if(Random.getRandomBoolByChance(50)) {
      const width = scale + scale / 2 * Math.random();

      const preHeight = Isometry.getY(scale);

      const height = preHeight / 3 + preHeight / 3 * Math.random();

      const leftPoints = Random.getRandomArrayItem([3, 4, 5, 6, 7]);

      const rightPoints = Random.getRandomArrayItem([3, 4, 5]);

      const fuzziness = 1.2 + 0.2 * Math.random();

      return {
        d: Shapes.cloud({ width, height, leftPoints, rightPoints, fuzziness }),
        fill: 0xccffff
      }

    } else {
      return null;
    }
  };

  static normalizeShapeScale = (shape) => {
    const ratio = shape.scale / 250;
    return {
      ...shape,
      minHeight: shape.minHeight * ratio,
      maxHeight: shape.maxHeight * ratio,
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

export default BiomPresetData;
