import React, {Component} from 'react';
import Map from '../Map';
import ErrorBoundary from "../ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div className="app">
        <ErrorBoundary>
          <Map></Map>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
