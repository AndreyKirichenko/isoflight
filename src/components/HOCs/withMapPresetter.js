import React, { Component } from 'react';
import BiomPreset from '../../helpers/BiomPreset';
import flatten from '../../helpers/flatten';

const withMapPresetter = (View) => {
  return class extends Component {

    state = {
      bioms: []
    };

    componentDidMount() {
      this.updateBiomsData();
    }

    shouldComponentUpdate(nextProps) {
      if (nextProps.observer.x === this.props.observer.x ||
          nextProps.observer.y === this.props.observer.y) {
        return false;
      }

      this.updateBiomsData();
      return true;
    }

    updateBiomsData() {
      this.setState((state, props) => {
        const { x1, x2, y1, y2, scale } = props.observer;

        let bioms = [...state.bioms];

        for(let x = x1; x <= x2; x++) {

          if(!bioms[x]) {
            bioms[x] = [];
          }

          for(let y = y1; y <= y2; y++) {
            if(bioms[x][y]) break;
            bioms[x][y] = BiomPreset.create(x, y, scale);
          }
        }

        return {
          bioms: flatten(bioms)
        };
      });
    }

    render() {
      return <View {...this.state} {...this.props} />
    }
  }
};

export default withMapPresetter;
