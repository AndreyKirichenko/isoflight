import React, {Component} from 'react';

const withObserver = (View) => {
  return class extends Component{
    state = {
      observer: {
        scale: 200,
        x: 0,
        y: 0,
        speedX: 1,
        speedY: 1,
        radius: 3,
      }
    };

    componentDidMount() {
      setInterval(() => {
        this.update();
      }, 5000);
    }

    update = () => {
      this.setState((prevState) => {
        let { x, y, speedX, speedY } = prevState.observer;

        const observer = Object.assign({}, prevState.observer, {
          x: x + speedX,
          y: y + speedY
        });

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
