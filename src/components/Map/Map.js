import React from 'react';
import { withMapPresetter, withObserver, withEnvironment} from '../HOCs';
import compose from '../../helpers/compose';
import Bioms from '../Bioms'
import Isometry from '../../helpers/Isometry';
import './map.css';

const Map = (props) => {
  const { window: { width, height }, observer: { x, y, scale, onObserverClick } } = props;

  const getCommonTranslate = () => {
    const fromX = width / 2;
    const fromY = height / 2;

    return `translate(${fromX}, ${fromY})`;
  };

  const getAnimationTranslate = () => {
    const endFrontalCoords = Isometry.toFrontalCoords(x * scale, y * scale);

    const toX = - endFrontalCoords.x;
    const toY = -endFrontalCoords.y;

    return `translate(${toX}, ${toY})`;
  };

  const getViewBox = () => {
    return `0 0 ${width} ${height}`;
  };

  return (
    <svg xmlns='http://www.w3.org/2000/svg'
         width='100%'
         height='100%'
         onClick={onObserverClick}
         viewBox={getViewBox()}>

      <g transform={getCommonTranslate()}>
        <g className='map__wrapper' transform={getAnimationTranslate()}>
          <Bioms {...this.props} />
        </g>
      </g>
    </svg>
  );
};

export default compose(
  withEnvironment,
  withObserver,
  withMapPresetter
)(Map);
