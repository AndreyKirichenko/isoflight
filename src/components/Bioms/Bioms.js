import React, { Component, Fragment } from 'react';
import Biom from '../Biom';

class Bioms extends Component {
  shouldComponentUpdate(nextProps) {
    return false;
    if(!Object.keys(nextProps.biomsPresetter.bioms).length) return false;

    const currentRanges = this.props.biomsPresetter.ranges;
    const nextRanges = nextProps.biomsPresetter.ranges;

    console.log('currentRanges, nextRanges', currentRanges, nextRanges);

    return !(
      currentRanges.x1 === nextRanges.x1 &&
      currentRanges.x2 === nextRanges.x2 &&
      currentRanges.y1 === nextRanges.y1 &&
      currentRanges.y2 === nextRanges.y2
    );
  }

  getBioms() {
    const { bioms, ranges } = this.props.biomsPresetter;

    if(!ranges && !Object.keys(bioms).length) {
      console.log('getBioms return null');
      return null;
    }

    const { x1, x2, y1, y2 } = ranges;

    const biomsToRender = [];

    for(let x = x1; x <= x2; x++) {
      for(let y = y1; y <= y2; y++) {
        const key = `${x}-${y}`;
        biomsToRender.push(<Biom {...bioms[x][y]} key={key} />);
      }
    }

    return biomsToRender;
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
