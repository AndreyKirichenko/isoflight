import React, { Component, Fragment } from 'react';
import Path from '../Path';


class Clouds extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  getBioms() {
    const { biomsForRender } = this.props;

    return biomsForRender.map((biom) => {
      const { key, biomPreset } = biom;

      return null;
      return <Path />;
    });
  };

  render() {
    return (
      <Fragment>
        { this.getBioms() }
      </Fragment>
    );
  }
}

export default Clouds;
