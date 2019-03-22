import React, {Component} from 'react';

const defaultObserverData = {
  scale: 100,
  x: 2,
  y: 2,
  speedX: 1,
  speedY: 0,
  radius: 2,
};

const withObserver = (View) => {
  return class extends Component {
    state = {
      observer: {
        ...defaultObserverData,
        ...this.getRangesBy(defaultObserverData)
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
      }, 1000);
    }

    update = () => {
      this.setState((prevState) => {
        const { x, y, speedX, speedY, radius, scale } = prevState.observer;

        const newObserverData = {
          x: x + speedX,
          y: y + speedY,
          speedX,
          speedY,
          scale,
          radius
        };

        return {
          observer: {
            onObserverClick: this.onObserverClick,
            ...newObserverData,
            ...this.getRangesBy(newObserverData)
          }
        };
      });
    };

    onObserverClick = () => {
      this.update();
    };

    render() {
      return <View {...this.state} {...this.props} />
    }
  };
};

export default withObserver;
