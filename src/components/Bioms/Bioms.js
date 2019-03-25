import React, { Component } from 'react';
import Biom from '../Biom';


class Bioms extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if(!nextProps.bioms.length) return false;

    if(
      this.props.observer.x1 === nextProps.observer.x1 &&
      this.props.observer.x2 === nextProps.observer.x2 &&
      this.props.observer.y1 === nextProps.observer.y1 &&
      this.props.observer.y2 === nextProps.observer.y2
    ) return true;

    return false;
  }


  getBioms() {
    const { bioms, observer } = this.props;

    if(!bioms.length) return null;

    const { x1, x2, y1, y2 } = observer;

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
      <g>
        { this.getBioms() }
      </g>
    );
  }
}

export default Bioms;
