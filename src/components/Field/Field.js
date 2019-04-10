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
    this.setState({
      data: CoordStringify.getString(this.props.shape)
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