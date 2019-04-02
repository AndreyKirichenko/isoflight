import React, { Component } from 'react';
import { Text, Group } from 'react-konva';

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
    const { timeDelta, fps } = this.state;
    return (
      <Group x='10' y='-170'>
        <Text fontSize='16' fill='#ccc'  lineHeight='24' text={`FPS: ${fps}`} />
        <Text y='24' fontSize='16' fill='#ccc'  lineHeight='24' text={`MSPF: ${timeDelta}`} />
      </Group>
    );
  }

};

export default Info;
