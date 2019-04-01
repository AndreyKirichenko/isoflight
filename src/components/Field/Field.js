import React, { Component } from 'react';
import { Path } from 'react-konva';
import CoordStringify from '../../helpers/CoordStringify';

class Field extends Component {
  state = {
    data: ''
  };

  componentDidMount() {
    const { shapePromise } = this.props;

    shapePromise.then((result) => {
      this.setState({
        data: CoordStringify.getString(result)
      });
    });
  }

  render() {
    let { color, isCurrent } = this.props;

    if(isCurrent) {
      color = '#f33';
    }

    if(!this.state.data) return null;

    return (
      <Path data={this.state.data} fill={color} />
    );
  }
}

export default Field;