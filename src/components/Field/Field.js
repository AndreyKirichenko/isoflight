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
    console.log('this.props;', this.props);
    const {getShapes} = this.props;
    getShapes.then((result) => {
      this.setState({
        d: CoordStringify.getString(result)
      });
    });
  }

  render() {
    if(!this.state.d) return null;
    return (
      <path d={this.state.d} fill='#000' />
    );
  }
}

export default Field;