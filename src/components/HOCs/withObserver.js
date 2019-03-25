import React, {Component} from 'react';

const defaultObserverData = {
  step: 0,
  scale: 200,
  x: 3,
  y: 3,
  speedX: 1,
  speedY: 1,
  radius: 4,
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
        setInterval(() => {
          this.update();
        }, 10000);
      }, 1);
    }

    update = () => {
      this.setState((prevState) => {
        const { step, x, y, speedX, speedY, radius, scale } = prevState.observer;

        const newObserverData = {
          step: step + 1,
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
