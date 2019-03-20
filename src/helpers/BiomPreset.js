import Isometry from "./Isometry";
import Random from "./Random";
import { summer, winter } from "../presets";


class BiomPreset {
  static create(x, y, scale, season = 'summer') {

    const frontalCoords =
      Isometry.toFrontalCoords(x * scale, y * scale);

    const data = BiomPreset.getRandomBiomPreset(season);

    return {
      scale,
      frontalCoords: {
        x: frontalCoords.x,
        y: frontalCoords.y
      },
      data
    };
  }

  static getRandomFieldPreset = (colorSchemes) => {
    const fieldId = Random.getRandomPropertyName(colorSchemes.fields);

    const name = Random.getRandomPropertyName(colorSchemes.fields[fieldId]);

    const colors = colorSchemes.fields[fieldId][name];

    const color = Random.getRandomArrayItem(colors);

    return {
      name,
      color
    }
  };

  static getRandomBorderLinePreset = (colorSchemes) => {
    const name = Random.getRandomPropertyName(colorSchemes.plantLines);

    const borderLinePreset = {...colorSchemes.plantLines[name]};

    const { lightColor, darkColor } = borderLinePreset;

    return {
      name,
      lightColor,
      darkColor
    }
  };

  static getRandomBiomPreset = (season = 'summer') => {
    const colorSchemes = BiomPreset.getColorPresetsBy(season);

    const fieldPreset = BiomPreset.getRandomFieldPreset(colorSchemes);

    const borderLinePresetX = BiomPreset.getRandomBorderLinePreset(colorSchemes);

    const borderLinePresetY = BiomPreset.getRandomBorderLinePreset(colorSchemes);

    return {
      fieldPreset,
      borderLinePresetX,
      borderLinePresetY
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
