import React, {Component} from 'react';
import Map from '../Map';
import Artboard from "../Artboard";

class App extends Component {
  render() {
    return (
      <Artboard>
        {/*<Spinner></Spinner>*/}
        <Map></Map>
      </Artboard>
    );
  }
}

export default App;
