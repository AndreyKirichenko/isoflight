import React, { Component } from 'react';
import { Text } from '@inlet/react-pixi'
class Info extends Component {

  state = {
    fps: 0,
    timeDelta: 0
  };

  componentDidMount() {
    this.tikTak();
  }

  tikTak() {
    let time;

    const tik = () => {
      requestAnimationFrame(tik);
      const now = performance.now();
      const timeDelta = Math.ceil(now - (time || now));
      const fps = Math.ceil(1000 / timeDelta);

      this.setState({
        timeDelta,
        fps
      });

      time = now;
    };

    tik();
  }

  render() {
    const { fps } = this.state;

    const style = {
      fontFamily: 'Arial',
      fontSize: 16,
      fill: 0xEEEEEE,
      fontWeight: 'thin'
    };
    return <Text style={style} x={10} y={10} text={`FPS: ${fps}`} />;
  }

}

export default Info;
