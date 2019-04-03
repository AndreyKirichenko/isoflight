import React, { Component } from 'react';
import { Path } from 'react-konva';
import CoordStringify from '../../services/CoordStringify';

class Field extends Component {
  state = {
    data: ''
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.data !== nextState.data;
  }

  componentDidMount() {
    const { shapePromise } = this.props;

    shapePromise.then((result) => {
      this.setState({
        data: CoordStringify.getString(result)
      });
    });
  }

  render() {
    let { color } = this.props;

    if(!this.state.data) return null;

    return (
      <Path data={this.state.data} fill={color} />
    );
  }
}

export default Field;