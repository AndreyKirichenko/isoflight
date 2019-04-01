import React, {Component} from 'react';
import Map from '../Map';
import ErrorBoundary from "../ErrorBoundary";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        {/*<Spinner></Spinner>*/}
        <Map></Map>
      </ErrorBoundary>
    );
  }
}

export default App;
