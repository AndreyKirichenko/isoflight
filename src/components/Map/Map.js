import React, { Component } from 'react';
import { withMapPresetter, withObserver, withEnvironment} from '../HOCs';
import compose from '../../helpers/compose';
import Bioms from '../Bioms'

class Map extends Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('Map componentDidUpdate', this.props);
  }

  render() {
    let { window: { width, height }, observer: { onObserverClick } } = this.props;

    const viewBox = `0 0 ${width} ${height}`;
    //height / 2
    const transform = `translate(${width / 2}, ${0})`;

    return (
      <svg xmlns="http://www.w3.org/2000/svg"
           width='100%'
           height='100%'
           onClick={onObserverClick}
           viewBox={viewBox}>

        <g transform={transform}>
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
