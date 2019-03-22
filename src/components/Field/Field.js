import React, { Component } from 'react';
import CoordStringify from '../../helpers/CoordStringify';

// const Field = ({getShape}) => {
//
//   return (
//     <path
//
//     </path>
//   );
// };


class Field extends Component {
  state = {
    d: ''
  };

  componentDidMount() {
    const { getShape } = this.props;

    getShape.then((result) => {
      this.setState({
        d: CoordStringify.getString(result)
      });
    });
  }

  render() {
    const { color } = this.props;

    if(!this.state.d) return null;
    return (
      <path d={this.state.d} fill={color} />
    );
  }
}

export default Field;