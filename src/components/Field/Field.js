import React, { Component } from 'react';
import CoordStringify from '../../helpers/CoordStringify';

class Field extends Component {
  state = {
    d: ''
  };

  componentDidMount() {
    const { shapePromise } = this.props;

    shapePromise.then((result) => {
      this.setState({
        d: CoordStringify.getString(result)
      });
    });
  }

  render() {
    let { color, isCurrent } = this.props;

    if(isCurrent) {
      color = '#000';
    }

    if(!this.state.d) return null;
    return (
      <path d={this.state.d} fill={color} />
    );
  }
}

export default Field;