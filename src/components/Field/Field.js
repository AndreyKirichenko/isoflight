import React, { Component } from 'react';
import Path from '../Path';

class Field extends Component {
  state = {
    data: ''
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.data !== nextState.data;
  }

  componentDidMount() {
    this.setState({
      data: this.props.shape
    });
  }

  render() {
    let { color } = this.props;

    if(!this.state.data) return null;

    return (
      <Path d={this.state.data} fill={color} />
    );
  }
}

export default Field;