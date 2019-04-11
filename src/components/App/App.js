import React, {Component} from 'react';
import Map from '../Map';
import Artboard from "../Artboard";
import Info from "../Info";

class App extends Component {
  render() {
    return (
      <Artboard {...this.props} >
        <Map />
        <Info />
      </Artboard>
    );
  }
}

export default App;
