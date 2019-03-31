import React, { Component } from 'react';
import { withMapPresetter, withObserver, withEnvironment} from '../HOCs';
import compose from '../../helpers/compose';
import Bioms from '../Bioms'

class Map extends Component {
  static getCommonTranslate (width, height) {
    const fromX = width / 2;
    const fromY = -height;

    return `translate(${fromX}, ${fromY})`;
  };

  getAnimateTransform() {
    // hardcoded attribute 'to'

    return (
      <animateTransform attributeName="transform"
                        type="translate"
                        from="0 0"
                        to="-108000, -62353"
                        dur="3600s"
                        repeatCount="1"/>
    );
  };

  static getViewBox(width, height) {
    return `0 0 ${width} ${height}`;
  };

  render() {
    const { window: { width, height } } = this.props;

    return (
      <svg xmlns='http://www.w3.org/2000/svg'
           width='100%'
           height='100%'
           viewBox={Map.getViewBox(width, height)}>

        <g transform={Map.getCommonTranslate(width, height)}>
          <g className='map__wrapper' >
            {this.getAnimateTransform()}
            <Bioms {...this.props} />
          </g>
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
