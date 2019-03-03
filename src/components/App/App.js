import React, {Component} from 'react';
import Map from '../Map';
import ErrorBoundary from "../ErrorBoundary";
import Spinner from "../Spinner";

class App extends Component {
  render() {
    return (
      <div className="app">
        <ErrorBoundary>
          <Spinner></Spinner>
          <Map></Map>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
