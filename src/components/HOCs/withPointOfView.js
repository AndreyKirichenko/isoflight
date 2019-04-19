import React, { Component } from 'react';

const minWindowWidth = 600;
const integerCenter =  0;
const mouseMuteRatio = 0.2;

const withPointOfView = (View) => {
  return class extends Component {
    state = {
      pointOfView: {
        step: 0,
        scale: 300, //pixels per field side
        xCenter: integerCenter,
        yCenter: integerCenter,
        x: integerCenter,
        y: integerCenter,
        speedX: 1,
        speedY: -1,
        maxSpeedX: 1,
        maxSpeedY: 1
      }
    };

    componentDidMount() {
      this.update();
      this.props.app.ticker.add(this.tick)
    }

    componentWillUnmount() {
      this.props.app.ticker.remove(this.tick)
    }

    tick = () => {
      if (this.props.environment.windowWidth >= minWindowWidth) {
        this.update();
      }
    };

    update() {
      this.setState((prevState, prevProps) => {
        const step = prevState.pointOfView.step + 1;

        let x = prevState.pointOfView.x;
        let y = prevState.pointOfView.y;

        const speed = this.getCurrentSpeed(prevProps.environment, prevState.pointOfView);

        if (speed){
          x += speed.speedX;
          y += speed.speedY;
        } else {
          x += prevState.pointOfView.speedX;
          y += prevState.pointOfView.speedY;
        }

        const pointOfView = {
          ...prevState.pointOfView,
          ...speed,
          step,
          x,
          y
        };

        return {
          pointOfView
        }
      });
    }

    getCurrentSpeed(environment, pointOfView) {
      const { windowWidth, windowHeight, mouseX, mouseY } = environment;

      if(!mouseX && !mouseY) return null;

      const { maxSpeedX, maxSpeedY } = pointOfView;

      const halfWidth = windowWidth / 2;
      const halfHeight = windowHeight / 2;

      const deltaMouseX = (halfWidth - mouseX);
      const deltaMouseY = (halfHeight - mouseY);

      const ratioMouseX = deltaMouseX / halfWidth;
      const ratioMouseY = deltaMouseY / halfHeight;

      let speedX = pointOfView.speedX;
      let speedY = pointOfView.speedY;



      if(-mouseMuteRatio > ratioMouseX || ratioMouseX > mouseMuteRatio) {
        speedX = -ratioMouseX * maxSpeedX;
      }

      if(-mouseMuteRatio > ratioMouseY || ratioMouseY > mouseMuteRatio) {
        speedY = -ratioMouseY * maxSpeedY;
      }

      return {
        speedX,
        speedY,
      };
    }

    render() {
      return <View {...this.state} {...this.props} />
    }
  }
};

export default withPointOfView;
