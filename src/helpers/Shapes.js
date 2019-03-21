import Isometry from './Isometry';

class Shapes {

  cached = {
    fields: {}
  };

  plantLine({
      minHeight,
      maxHeight,
      pointsBetween,
      sideLength,
      fluctX,
      fluctY,
      fluctCX,
  }) {

    const averageX = sideLength / pointsBetween;
    const yMaxDelta = maxHeight - minHeight;

    let pointsArr = [
      {
        type: 'M',
        x: 0,
        y: 0
      }
    ];

    for (let i = 1; i < pointsBetween + 1; i++) {
      const currentFluctX = (Math.random() - 0.5) * fluctX;
      const currentFluctY = (Math.random()) * fluctY;
      const currentFluctCX = (Math.random() - 0.5) * fluctCX;

      const x = averageX * i + currentFluctX * averageX;
      const y = Isometry.getY(x) - minHeight;

      const prevPoint = pointsArr[pointsArr.length - 1];
      const yDelta = yMaxDelta * currentFluctY;
      const c1x = prevPoint.x + averageX * currentFluctCX;
      const c1y = prevPoint.y - yDelta;

      const c2x = x + averageX * currentFluctCX;
      const c2y = y - yDelta;

      pointsArr.push(
        {
          type: 'C',
          x,
          y,
          c1x,
          c1y,
          c2x,
          c2y
        }
      );
    }

    pointsArr.push(
      {
        type: 'L',
        x: sideLength,
        y: Isometry.getY(sideLength),
      },
      {
        type: 'L',
        x: 0,
        y: 0
      },
    );
    return pointsArr;
  }

  field(sideLength = 240) {
    return new Promise((resolve) => {
      if(this.cached.fields[sideLength]) {
        return this.cached.fields[sideLength];
      }

      let coords = [];

      coords[0] = {
        type: 'M',
        x: 0,
        y: 0
      };

      coords[1] = {
        type: 'L',
        x: sideLength,
        y: Isometry.getY(sideLength)
      };

      coords[2] = {
        type: 'L',
        x: 0,
        y: coords[1].y * 2
      };

      coords[3] = {
        type: 'L',
        x: -coords[1].x,
        y: coords[1].y
      };

      coords[4] = {
        type: 'L',
        x: 0,
        y: 0
      };

      this.cached.fields[sideLength] = coords;

      resolve(coords);
    });
  }
}

export default new Shapes();
