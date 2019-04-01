import React, { Component } from 'react';
import BiomPreset from '../../services/BiomPreset';

const withMapPresetter = (View) => {
  return class extends Component {

    state = {
      bioms: []
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
      return prevProps.observer.x !== this.props.observer.x || prevProps.observer.y !== this.props.observer.y
    }

    updateBiomsData() {
      this.setState((state, props) => {

        let bioms = [...state.bioms];

        if (props.observer.ranges) {
          const { ranges: { x1, x2, y1, y2 }, scale } = props.observer;

          for(let x = x1; x <= x2; x++) {

            if(!bioms[x]) {
              bioms[x] = [];
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
      return <View {...this.state} {...this.props} />
    }
  }
};

export default withMapPresetter;
