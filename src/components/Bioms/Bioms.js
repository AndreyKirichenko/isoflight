import React, { Component, Fragment } from 'react';
import Biom from '../Biom';

let i = 0;

class Bioms extends Component {
  shouldComponentUpdate(nextProps) {
    if(!nextProps.bioms.length) return false;

    const currentRanges = this.props.biomsObserver.ranges;
    const nextRanges = nextProps.biomsObserver.ranges;

    const res = i < 1;
    i +=1;

    return res || !(
      currentRanges.x1 === nextRanges.x1 &&
      currentRanges.x2 === nextRanges.x2 &&
      currentRanges.y1 === nextRanges.y1 &&
      currentRanges.y2 === nextRanges.y2
    );
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
    console.log('Bioms render');
    return (
      <Fragment>
        { this.getBioms() }
      </Fragment>
    );
  }
}

export default Bioms;
