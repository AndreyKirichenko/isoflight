import Isometry from "./Isometry";
import worker from '../workers/biomDataWorkerWrapper';


class BiomPreset {
  constructor(x, y, scale) {
    const frontalCoords = Isometry.toFrontalCoords(x * scale, y * scale);

    const data = new Promise((resolve) => {
      worker.postMessage({ x, y, scale });

      worker.addEventListener('message', (event) => {
        if (x === event.data.x && y === event.data.y) {
          resolve(event.data.data)
        }
      });
    });

    return Object.assign({
      scale,
      coords: {
        x,
        y
      },
      frontalCoords: {
        x: frontalCoords.x,
        y: frontalCoords.y
      },
      data
    });
  }
}

export default BiomPreset;
