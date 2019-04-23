import React, { Component, Fragment } from 'react';
import Biom from '../Biom';

class Bioms extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.ranges.id !== this.props.ranges.id;
  }

  getBioms() {
    const { biomsForRender } = this.props;

    return biomsForRender.map((biom) => {
      const { key, biomPreset } = biom;

      return <Biom biomPreset={biomPreset} key={key} />;
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

export default Bioms;
