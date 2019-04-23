import Isometry from './Isometry';
import Random from './Random';
import Shapes from './Shapes';
import { groundObjects, summer, winter } from '../presets';

class BiomPreset {
  constructor(x, y, scale) {
    const frontalCoords = Isometry.toFrontalCoords(x * scale, y * scale);

    return {
      scale,
      coords: {
        x,
        y
      },
      frontalCoords: {
        x: frontalCoords.x,
        y: frontalCoords.y
      },
      ...BiomPreset.getRandomBiomPreset(scale)
    }
  }

  static getRandomBiomPreset = (scale, season = 'summer') => {
    const colorSchemes = BiomPreset.getColorPresetsBy(season);

    const field = BiomPreset.getRandomFieldPreset(colorSchemes, scale);

    const fieldPlants = BiomPreset.getRandomFieldPlantsPreset(colorSchemes, field.id, scale);

    const borderLineX = BiomPreset.getRandomBorderLinePreset(colorSchemes, scale);

    const borderLineY = BiomPreset.getRandomBorderLinePreset(colorSchemes, scale, true);

    const cloud = BiomPreset.getCloud(scale);

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
    const id = BiomPreset.getRandomFieldId(colorSchemes);

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
    const name = BiomPreset.getRandomPlantName(colorSchemes, fieldId);

    const lightColor = BiomPreset.getRandomFieldPlantColor(colorSchemes, fieldId, name);

    const shapes = BiomPreset.getRandomFieldPlantsShapes(name, scale);

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

    const average = BiomPreset.getAverage(scale, quantity);

    for (let i = 1; i <= quantity; i++) {
      const frontalCoords = {
        x: -average * i + 1,
        y: Isometry.getY(average * i + 1)
      };

      shapes.push(
        BiomPreset.getRandomFieldPlantLineShapes({ lightShape, frontalCoords, scale })
      );
    }

    return shapes;
  };

  static getRandomBorderLinePreset = (colorSchemes, scale, reflected=false) => {
    const name = Random.getRandomPropertyName(colorSchemes.plantLines);

    const { lightShape, shadowShape } = groundObjects.plantLines[name];

    const colors = BiomPreset.getBorderLineColors(colorSchemes, name);

    const lightColor = colors.lightShape.fill;

    const shadowColor = colors.shadowShape.fill;

    const shapes = BiomPreset.getRandomFieldPlantLineShapes({ lightShape, shadowShape, scale });

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
      l = Shapes.plantLine(BiomPreset.normalizeShapeScale(lightShape));
    }

    if(shadowShape) {
      shadowShape.scale = scale;
      s = Shapes.plantLine(BiomPreset.normalizeShapeScale(shadowShape));
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

export default BiomPreset;
