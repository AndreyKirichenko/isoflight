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

    console.log('---');
    console.log({
      minHeight,
      maxHeight,
      pointsBetween,
      scale,
      flX,
      flY,
      flCX,
    });

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
      const currentflX = (Math.random() - 0.5) * flX;
      const currentflY = (Math.random()) * flY;
      const currentflCX = (Math.random() - 0.5) * flCX;

      const x = averageX * i + currentflX * averageX;
      const y = Isometry.getY(x) - minHeight;

      const prevPoint = pointsArr[pointsArr.length - 1];
      const yDelta = yMaxDelta * currentflY;
      const c1x = prevPoint.x + averageX * currentflCX;
      const c1y = prevPoint.y - yDelta;

      const c2x = x + averageX * currentflCX;
      const c2y = y - yDelta;

      console.log({
        type: 'C',
        x,
        y,
        c1x,
        c1y,
        c2x,
        c2y
      });

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
      y: Isometry.getY(scale)
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
