import React, { Component } from 'react';
import { withMapPresetter, withObserver, withWindow} from '../HOCs';
import compose from '../../helpers/compose';
import Bioms from '../Bioms'

class Map extends Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('Map componentDidUpdate', this.props);
  }

  render() {
    const { window: { width, height } } = this.props;

    const viewBox = `0 0 ${width} ${height}`;

    const transform = '';

    return (
      <svg xmlns="http://www.w3.org/2000/svg"
           width='100%'
           height='100%'
           viewBox={viewBox}>

        <g transform={transform}>
          <Bioms {...this.props} />
        </g>
      </svg>
    );
  }
}

export default compose(
  withWindow,
  withObserver,
  withMapPresetter
)(Map);
