import Color from 'color';
import Isometry from "./Isometry";
import Random from "./Random";
import { summer, winter, groundObjects } from "../presets";
import Shapes from './Shapes';


class BiomPreset {
  constructor(x, y, scale, season = 'summer') {
    const frontalCoords = Isometry.toFrontalCoords(x * scale, y * scale);

    const data = BiomPreset.getRandomBiomPreset(season, scale);

    return Object.assign({
      scale,
      coords: {
        x,
        y
      },
      frontalCoords: {
        x: frontalCoords.x,
        y: frontalCoords.y
      }
    }, data);
  }

  static getRandomBiomPreset = (season = 'summer', scale) => {
    const colorSchemes = BiomPreset.getColorPresetsBy(season);

    const field = BiomPreset.getRandomFieldPreset(colorSchemes, scale);

    const fieldPlants = BiomPreset.getRandomFieldPlantsPreset(colorSchemes, field.id, scale);

    const borderLineX = BiomPreset.getRandomBorderLinePreset(colorSchemes, scale);
    const borderLineY = BiomPreset.getRandomBorderLinePreset(colorSchemes, scale, true);

    return {
      field,
      fieldPlants,
      borderLineX,
      borderLineY
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

    const shapePromise = new Promise((resolve) => {
      resolve(Shapes.field(scale));
    });

    return {
      id,
      color: id,
      shapePromise
    }
  };

  static getAverage = (scale, quantity) => {
    return scale / quantity;
  };

  static getRandomFieldPlantsPreset = ( colorSchemes, fieldId, scale ) => {
    const name = BiomPreset.getRandomPlantName(colorSchemes, fieldId);

    const lightColor = BiomPreset.getRandomFieldPlantColor(colorSchemes, fieldId, name);

    const shadowColor = Color(lightColor).darken(0.10).hex();

    const shapePromises = BiomPreset.getRandomFieldPlantsShapes(name, scale);

    const reflected = Random.getRandomBool();

    return {
      name,
      lightColor,
      shadowColor,
      shapePromises,
      reflected
    }
  };

  static getRandomFieldPlantsShapes = (plantsName, scale) => {
    const { quantity, lightShape, shadowShape } = groundObjects.plantLines[plantsName];

    let shapePromises = [];

    const average = BiomPreset.getAverage(scale, quantity);

    for (let i = 1; i <= quantity; i++) {
      const frontalCoords = {
        x: -average * i,
        y: Isometry.getY(average * i)
      };
      
      shapePromises.push(
        BiomPreset.getRandomFieldPlantLineShapes({ lightShape, shadowShape, frontalCoords, scale })
      );
    }

    return shapePromises;
  };

  static getRandomBorderLinePreset = (colorSchemes, scale, reflected=false) => {
    const name = Random.getRandomPropertyName(colorSchemes.plantLines);

    const { lightShape, shadowShape } = groundObjects.plantLines[name];

    const colors = BiomPreset.getBorderLineColors(colorSchemes, name);

    const lightColor = colors.lightShape.fill;

    const shadowColor = colors.shadowShape.fill;

    const shapePromise = BiomPreset.getRandomFieldPlantLineShapes({ lightShape, shadowShape, scale });

    return {
      name,
      lightColor,
      shadowColor,
      shapePromise,
      reflected
    }
  };

  static getRandomFieldPlantLineShapes = ({ lightShape, shadowShape, frontalCoords, scale }) => {
    return new Promise((resolve) => {
      let l = null;
      let s = null;

      if(lightShape) {
        lightShape.scale = scale;
        l = Shapes.plantLine(lightShape);
      }

      if(shadowShape) {
        shadowShape.scale = scale;
        s = Shapes.plantLine(shadowShape);
      }

      resolve({
        frontalCoords,
        lightShape: l,
        shadowShape: s,
      })
    })
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
