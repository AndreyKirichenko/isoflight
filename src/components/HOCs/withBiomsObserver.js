import React, { Component } from 'react';

const withBiomsObserver = (View) => {
  return class extends Component {
    state = {
      biomsObserver: {
        x: 0,
        y: 0,
        speedX: 1,
        speedY: 0,
        radius: 2,
        ranges: null,
        timePerBiom: 10000
      }
    };

    shouldComponentUpdate(nextProps) {
      return nextProps.pointOfView.step !== this.props.pointOfView.step
    }

    getRangesBy(biomsObserverData) {
      const { x, y, radius } = biomsObserverData;

      const x1 = this.toValidArrayIndex(x - radius);
      const x2 = this.toValidArrayIndex(x + radius);

      const y1 = this.toValidArrayIndex(y - radius);
      const y2 = this.toValidArrayIndex(y + radius);

      return {
        x1,
        x2,
        y1,
        y2
      }
    }

    toValidArrayIndex(num) {
      return num >= 0 ? num : 0;
    }

    componentDidMount() {
      setTimeout(() => {
        this.update();
      }, 1);
    }

    update = () => {
      this.setState((prevState, prevProps) => {

        this.getCurrentBiomPosition(prevProps);

        const { x, y, speedX, speedY } = prevState.biomsObserver;

        const newObserverData = {
          x: x + speedX,
          y: y + speedY,
        };

        const biomsObserver = {
          ...prevState.biomsObserver,
          ...newObserverData
        };

        biomsObserver.ranges = this.getRangesBy(biomsObserver);

        return {
          biomsObserver
        };
      });
    };

    getCurrentBiomPosition(props) {
      console.log(props);
    }

    render() {
      return <View {...this.state} {...this.props} />
    }
  };
};

export default withBiomsObserver;
