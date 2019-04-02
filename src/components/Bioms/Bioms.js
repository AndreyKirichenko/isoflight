import React, { Component, Fragment } from 'react';
import Biom from '../Biom';

class Bioms extends Component {
  shouldComponentUpdate(nextProps) {
    if(!Object.keys(nextProps.bioms).length) return false;

    const currentRanges = this.props.biomsObserver.ranges;
    const nextRanges = nextProps.biomsObserver.ranges;

    return !(
      currentRanges.x1 === nextRanges.x1 &&
      currentRanges.x2 === nextRanges.x2 &&
      currentRanges.y1 === nextRanges.y1 &&
      currentRanges.y2 === nextRanges.y2
    );
  }

  getBioms() {
    const { bioms, biomsObserver } = this.props;

    if(!biomsObserver.ranges) return null;

    const { x1, x2, y1, y2 } = biomsObserver.ranges;

    const biomsToRender = {};

    return null;

    console.log('---');
    for(let x = x1; x <= x2; x++) {
      console.log('x', x)
      if(!biomsToRender[x]) {
        biomsToRender[x] = {};
      }

      for(let y = y1; y <= y2; y++) {
        const key = `${x}-${y}`;
        console.log('y', y);

        if (bioms[x][y]) {
          const key = `${x}-${y}`;
          biomsToRender[x][y] = <Biom {...bioms[x][y]} key={key} />;
        }
      }
    }

    return Object.keys(biomsToRender);
  };

  render() {
    console.log('Bioms render');
    return (
      <Fragment>
        { this.getBioms() }
      </Fragment>
    );
  }
}

export default Bioms;
