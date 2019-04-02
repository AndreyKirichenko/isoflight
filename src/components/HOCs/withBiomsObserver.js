import React, { Component } from 'react';

const withBiomsObserver = (View) => {
  return class extends Component {
    state = {
      biomsObserver: {
        x: 0,
        y: 0,
        speedX: 1,
        speedY: 0,
        radius: 1,
        ranges: null
      }
    };

    shouldComponentUpdate(nextProps) {
      return nextProps.pointOfView.step !== this.props.pointOfView.step;
    }

    componentDidMount() {
      this.update();
    }

    componentDidUpdate() {
      this.update();
    }

    // toValidArrayIndex(num) {
    //   return num >= 0 ? num : 0;
    // }

    update = () => {
      this.setState((prevState, prevProps) => {

        const { x, y } = this.getCurrentBiomPosition(prevProps);

        const { radius } = prevState.biomsObserver;

        const ranges = this.getRangesBy(x, y, radius);

        const newObserverData = {
          x,
          y,
          ranges
        };

        const biomsObserver = {
          ...prevState.biomsObserver,
          ...newObserverData
        };

        return {
          biomsObserver
        };
      });
    };

    getCurrentBiomPosition(props) {
      const { pointOfView: { scale, x, y } } = props;

      return {
        x: Math.floor(x / scale),
        y: Math.floor(y / scale)
      }
    }

    getRangesBy(x, y, radius) {
      const x1 = x - radius;
      const x2 = x + radius;

      const y1 = y - radius;
      const y2 = y + radius;

      return {
        x1,
        x2,
        y1,
        y2
      }
    }

    render() {
      // console.log('withBiomsObserver render');
      return <View {...this.state} {...this.props} />
    }
  };
};

export default withBiomsObserver;
