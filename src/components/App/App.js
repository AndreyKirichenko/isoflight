import React, {Component} from 'react';
import Map from '../Map';
import Artboard from "../Artboard";
import Info from "../Info";

class App extends Component {
  render() {
    return (
      <Artboard>
        <Info />
        <Map />
      </Artboard>
    );
  }
}

export default App;
