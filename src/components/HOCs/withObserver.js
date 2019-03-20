import React, {Component} from 'react';

const defaultObserverData = {
  scale: 200,
  x: 0,
  y: 0,
  speedX: 1,
  speedY: 1,
  radius: 3,
};

const withObserver = (View) => {
  return class extends Component{
    state = {
      observer: {
        ...defaultObserverData,
        ...this.getRangesBy(defaultObserverData)
      }
    };

    getRangesBy(observerData) {
      const { x, y, radius } = observerData;

      const x1 = this._toValidArrayIndex(x - radius);
      const x2 = this._toValidArrayIndex(x + radius);

      const y1 = this._toValidArrayIndex(y - radius);
      const y2 = this._toValidArrayIndex(y + radius);

      return {
        x1,
        x2,
        y1,
        y2
      }
    }

    _toValidArrayIndex(num) {
      return num >= 0 ? num : 0;
    }

    componentDidMount() {
      setTimeout(() => {
        this.update();
        console.log('--');
      }, 3000);
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
            ...newObserverData,
            ...this.getRangesBy(newObserverData)
          }
        };
      });
    };

    render() {
      return <View {...this.state} {...this.props} />
    }
  };
};

export default withObserver;
