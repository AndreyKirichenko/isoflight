import React, { Component } from 'react';

const integerCenter =  0;
const mouseMuteRatio = 0.2;

const withPointOfView = (View) => {
  return class extends Component {
    state = {
      pointOfView: {
        step: 0,
        scale: 260, //pixels per field side
        xCenter: integerCenter,
        yCenter: integerCenter,
        x: integerCenter,
        y: integerCenter,
        speedX: 1,
        speedY: 1,
        maxSpeedX: 2,
        maxSpeedY: 2
      }
    };

    componentDidMount() {
      this.tikTak();
    }

    tikTak() {
      this.update();
      const tik = () => {
        setTimeout(() => {
          this.update();
        }, 1);

        requestAnimationFrame(tik);
      };

      tik();
    }

    update() {
      this.setState((prevState, prevProps) => {
        const step = prevState.pointOfView.step + 1;

        const speed = this.getCurrentSpeed(prevProps.environment, prevState.pointOfView);

        const x = prevState.pointOfView.x + speed.speedX;
        const y = prevState.pointOfView.y + speed.speedY;


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
      const { height, width, mouseX, mouseY } = environment;
      const { maxSpeedX, maxSpeedY } = pointOfView;

      if(!mouseX && mouseY) return null;

      const halfWidth = width / 2;
      const halfHeight = height / 2;

      const deltaMouseX = (halfWidth - mouseX);
      const deltaMouseY = (halfHeight - mouseY);

      const ratioMouseX = deltaMouseX / halfWidth;
      const ratioMouseY = deltaMouseY / halfHeight;

      let speedX = 0;
      let speedY = 0;

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
