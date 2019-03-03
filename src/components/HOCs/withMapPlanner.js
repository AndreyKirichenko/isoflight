import React, { PureComponent } from 'react';

const withMapPlanner = (View) => {
  return class extends PureComponent {
    shouldComponentUpdate(nextProps) {
      const isUpdatedX = this.state.observer.x === nextProps.observer.x;
      const isUpdatedY = this.state.observer.y === nextProps.observer.y;

      return isUpdatedX && isUpdatedY;
    };


    render() {
      return <View {...this.state} {...this.props} />
    }
  }
};

export default withMapPlanner;
