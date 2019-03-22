import Isometry from './Isometry';

class Shapes {

  cached = {
    fields: {}
  };

  plantLine({
      minHeight,
      maxHeight,
      pointsBetween,
      scale,
      flX,
      flY,
      flCX,
  }) {

    const averageX = scale / pointsBetween;
    const yMaxDelta = maxHeight - minHeight;

    let pointsArr = [
      {
        type: 'M',
        x: 0,
        y: 0
      }
    ];

    for (let i = 1; i < pointsBetween + 1; i++) {
      const flX = (Math.random() - 0.5) * flX;
      const flY = (Math.random()) * flY;
      const flCX = (Math.random() - 0.5) * flCX;

      const x = averageX * i + flX * averageX;
      const y = Isometry.getY(x) - minHeight;

      const prevPoint = pointsArr[pointsArr.length - 1];
      const yDelta = yMaxDelta * flY;
      const c1x = prevPoint.x + averageX * flCX;
      const c1y = prevPoint.y - yDelta;

      const c2x = x + averageX * flCX;
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
        x: scale,
        y: Isometry.getY(scale),
      },
      {
        type: 'L',
        x: 0,
        y: 0
      },
    );

    return pointsArr;
  }

  field(scale = 240) {
    if(this.cached.fields[scale]) {
      return this.cached.fields[scale];
    }

    let coords = [];

    coords[0] = {
      type: 'M',
      x: 0,
      y: 0
    };

    coords[1] = {
      type: 'L',
      x: scale,
      y: Isometry.getY(scale) + 1
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

    this.cached.fields[scale] = coords;

    return coords;
  }
}

export default new Shapes();
