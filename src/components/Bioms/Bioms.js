import React, { Component, Fragment } from 'react';
import Biom from '../Biom';

class Bioms extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {

    if(!nextProps.bioms.length) return false;

    const currentRanges = this.props.biomsObserver.ranges;
    const nextRanges = nextProps.biomsObserver.ranges;

    if(
      currentRanges.x1 === nextRanges.x1 &&
      currentRanges.x2 === nextRanges.x2 &&
      currentRanges.y1 === nextRanges.y1 &&
      currentRanges.y2 === nextRanges.y2
    ) return true;

    return false;
  }

  getBioms() {
    const { bioms, biomsObserver } = this.props;

    if(!bioms.length) return null;

    const { x1, x2, y1, y2 } = biomsObserver.ranges;

    let biomsToRender = [];

    for(let x = x1; x <= x2; x++) {
      if(!biomsToRender[x]) {
        biomsToRender[x] = [];
      }

      for(let y = y1; y <= y2; y++) {
        if (bioms[x][y]) {
          const key = `${x}-${y}`;
          biomsToRender.push(<Biom {...bioms[x][y]} key={key} />);
        }
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
