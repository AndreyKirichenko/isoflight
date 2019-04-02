import React, { Component } from 'react';
import BiomPreset from '../../services/BiomPreset';

const withBiomsPresetter = (View) => {
  return class extends Component {

    state = {
      bioms: {}
    };

    componentDidMount() {
      this.updateBiomsData();
    }

    componentDidUpdate(prevProps) {
      if (this.isObserverCoordsChanged(prevProps)) {
        this.updateBiomsData();
      }
    }

    isObserverCoordsChanged(prevProps) {
      return prevProps.biomsObserver.x !== this.props.biomsObserver.x ||
             prevProps.biomsObserver.y !== this.props.biomsObserver.y
    }

    updateBiomsData() {
      console.log(this.state.bioms);
      this.setState((state, props) => {

        const bioms = {...state.bioms};

        if (props.biomsObserver.ranges) {
          const { ranges: { x1, x2, y1, y2 } } = props.biomsObserver;
          const { scale } = props.pointOfView;

          for(let x = x1; x <= x2; x++) {

            if(!bioms[x]) {
              bioms[x] = {};
            }

            for(let y = y1; y <= y2; y++) {
              if(!bioms[x][y]) {
                bioms[x][y] = new BiomPreset(x, y, scale);

              }
            }
          }
        }

        return {
          bioms
        };
      });
    }

    render() {
      // console.log('withBiomsPresetter render', this.state.bioms.length);
      return <View {...this.state} {...this.props} />
    }
  }
};

export default withBiomsPresetter;
