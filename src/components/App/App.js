import React, {Component} from 'react';
import { Stage, Container } from '@inlet/react-pixi';
import { withEnvironment } from '../HOCs';
import compose from '../../helpers/compose';
import Map from '../Map';
import Info from '../Info';


class App extends Component {
  static getInfo() {
    if(NODE_ENV === 'development') {
      return <Info />;
    }

    return null;
  }

  render() {
    const { environment: { width, height } } = this.props;

    const options = {
      antialias: true,
      backgroundColor: 0xCCCCCC,
    };

    return (
      <Stage options={options}
             width={width}
             height={height}>
        <Container>
          <Map { ...this.props } />

          { App.getInfo() }

        </Container>
      </Stage>
    );
  }
}

export default compose(
  withEnvironment
)(App);
