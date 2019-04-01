import React, {Component} from 'react';

const withObserver = (View) => {
  return class extends Component {
    state = {
      observer: {
        step: 0,
        scale: 250,
        x: 0,
        y: 0,
        speedX: 1,
        speedY: 0,
        radius: 1,
        ranges: null,
        timePerBiom: 10000
      }
    };

    getRangesBy(observerData) {
      const { x, y, radius } = observerData;

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

        setInterval(() => {

          this.update();

        }, this.state.observer.timePerBiom);
      }, 1);
    }

    update = () => {
      this.setState((prevState) => {
        const { step, x, y, speedX, speedY } = prevState.observer;

        const newObserverData = {
          step: step + 1,
          x: x + speedX,
          y: y + speedY,
        };

        const observer = {
          ...prevState.observer,
          ...newObserverData
        };

        observer.ranges = this.getRangesBy(observer);

        return {
          observer
        };
      });
    };

    render() {
      return <View {...this.state} {...this.props} />
    }
  };
};

export default withObserver;
