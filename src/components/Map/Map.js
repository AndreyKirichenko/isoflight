import React, { Component } from 'react';
import { withMapPresetter, withObserver, withEnvironment} from '../HOCs';
import compose from '../../helpers/compose';
import Bioms from '../Bioms'
import Isometry from '../../helpers/Isometry';

import './map.css';

// const interval = 3600;

class Map extends Component {
  render() {
    let { window: { width, height }, observer: { onObserverClick, x, y, scale } } = this.props;

    const viewBox = `0 0 ${width} ${height}`;

    const frontalCoords = Isometry.toFrontalCoords(x * scale, y * scale);

    const fromX = width / 2;
    const toX = width / 2 - frontalCoords.x;

    const fromY = 0;
    const toY = -frontalCoords.y;


    const from = `${fromX} ${fromY}`;
    const to = `${toX} ${toY}`;
    // const dur = `${interval}s`;
    const dur = `1s`;

    const transform = `translate(${from})`;

    console.log('map render', frontalCoords.x, frontalCoords.y);

    return (
      <svg xmlns='http://www.w3.org/2000/svg'
           width='100%'
           height='100%'
           onClick={onObserverClick}
           viewBox={viewBox}>

        <g className='map__wrapper' transform={transform}>
          <animateTransform
            attributeName='transform'
            type='translate'
            from={from}
            to={to}
            begin='0s'
            dur={dur}
            repeatCount='1'
          />

          <Bioms {...this.props} />
        </g>
      </svg>
    );
  }
}

export default compose(
  withEnvironment,
  withObserver,
  withMapPresetter
)(Map);
