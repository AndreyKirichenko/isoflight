import React, { Component } from 'react';
import { withObserver, withWindow} from '../HOCs';
import { compose } from '../../helpers';

class Map extends Component {
  componentDidMount() {
    console.log('Map is mounted with props', this.props);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Map is updated with props', this.props);
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

        </g>
      </svg>
    );
  }
}

export default compose(
  withObserver,
  withWindow)
(Map);
