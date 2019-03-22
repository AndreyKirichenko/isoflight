import Color from 'color';
import Isometry from "./Isometry";
import Random from "./Random";
import { summer, winter, groundObjects } from "../presets";
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

    const fieldPlants = BiomPreset.getRandomFieldPlantsPreset(colorSchemes, field.id, scale);

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
    const id = BiomPreset.getRandomFieldId(colorSchemes);

    const getShape = new Promise((resolve) => {
      resolve(Shapes.field(scale));
    });

    return {
      id,
      color: id,
      getShape
    }
  };

  static getRandomFieldPlantsPreset = ( colorSchemes, fieldId, scale ) => {
    const name = BiomPreset.getRandomPlantName(colorSchemes, fieldId);

    const light = BiomPreset.getRandomFieldPlantColor(colorSchemes, fieldId, name);

    const shadow = Color(light).darken(0.5);

    const getShapes = BiomPreset.getRandomFieldPlantsShapes(name, scale);

    return {
      name,
      light,
      shadow,
      getShapes
    }
  };

  static getRandomFieldPlantsShapes = (plantsName, scale) => {
    const { quantity, light, shadow} = groundObjects.plantLines[plantsName];

    let result = [];

    const reflected = false;

    const average = scale / quantity;

    let yReflected = reflected ? -1 : 1;

    for (let i = 1; i <= quantity; i++) {
      const transform = `translate(${-average * i * yReflected},${Isometry.getY(average * i)})`;

      result.push(
        new Promise((resolve) => {
          let l = null;
          let s = null;

          console.log('---');

          if(light) {
            l = Shapes.plantLine(light);
            // console.log('l', l);
          }

          if(shadow) {
            s = Shapes.plantLine(shadow);
            // console.log('s', s);
          }

          resolve({
            // transform,
            // light: l,
            // shadow: s,
          })
        })
      );
    }
  };

  static getRandomBorderLinePreset = (colorSchemes) => {
    const name = Random.getRandomPropertyName(colorSchemes.plantLines);

    const borderLine = {...colorSchemes.plantLines[name]};

    const { light, shadow } = borderLine;

    return {
      name,
      light,
      shadow
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
