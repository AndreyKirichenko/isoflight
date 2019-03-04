import React, { Component } from 'react';

const withMapPlanner = (View) => {
  return class extends Component {

    state = {
      biomsData: []
    };

    // shouldComponentUpdate(nextProps) {
    //   const isUpdatedX = this.state.observer.x === nextProps.observer.x;
    //   const isUpdatedY = this.state.observer.y === nextProps.observer.y;
    //
    //   return isUpdatedX || isUpdatedY;
    // };

    componentDidMount() {
      console.log(this.props);
    }

    render() {
      return <View {...this.state} {...this.props} />
    }
  }
};

export default withMapPlanner;
