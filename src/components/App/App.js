import React, {Component} from 'react';
import { Stage, Container } from '@inlet/react-pixi';
import { withEnvironment, withPointOfView, withBioms } from '../HOCs';
import compose from "../../helpers/compose";
import Map from '../Map';
import Info from "../Info";


class App extends Component {
  render() {
    const { environment: { width, height } } = this.props;

    const options = {
      antialias: true,
      backgroundColor: 0xFFFFFF,
    };

    return (
      <Stage options={options}
             width={width}
             height={height}>
        <Container>
          <Map { ...this.props } />
          <Info />
        </Container>
      </Stage>
    );
  }
}

export default compose(
  withEnvironment,
  withPointOfView,
  withBioms
)(App);
