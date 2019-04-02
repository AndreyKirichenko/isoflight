import React, { Component } from 'react';

const integerCenter =  Math.floor(Number.MAX_SAFE_INTEGER / 2);

const withPointOfView = (View) => {
  return class extends Component {
    state = {
      pointOfView: {
        step: 0,
        scale: 250, //pixels per field side
        xCenter: integerCenter,
        yCenter: integerCenter,
        x: integerCenter,
        y: integerCenter,
        speedX: 1,
        speedY: 0,
        maxSpeedX: 1,
        maxSpeedY: 1,
        timeDelta: 0,
        fps: 0
      }
    };

    componentDidMount() {
      this.tikTak();
    }

    tikTak() {
      let time;

      const tik = () => {
        requestAnimationFrame(tik);
        const now = new Date().getTime();
        const timeDelta = now - (time || now);

        time = now;
        this.update(timeDelta);
      };

      tik();
    }

    update(timeDelta) {
      this.setState((prevState, prevProps) => {
        const step = prevState.pointOfView.step + 1;

        const speed = this.getCurrentSpeed(prevProps.environment, prevState.pointOfView);


        const x = prevState.pointOfView.x + speed.speedX;
        const y = prevState.pointOfView.y + speed.speedY;
        const fps = Math.round(1000 / timeDelta);

        const pointOfView = {
          ...prevState.pointOfView,
          ...speed,
          step,
          x,
          y,
          timeDelta,
          fps
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

      const deltaMouseX = -(halfWidth - mouseX);
      const deltaMouseY = -(halfHeight - mouseY);

      const ratioMouseX = deltaMouseX / halfWidth;
      const ratioMouseY = deltaMouseY / halfHeight;

      const speedX = ratioMouseX * maxSpeedX;
      const speedY = ratioMouseY * maxSpeedY;

      return {
        speedX,
        speedY
      };
    }

    render() {
      return <View {...this.state} {...this.props} />
    }
  }
};

export default withPointOfView;
