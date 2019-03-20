import React, { Component } from 'react';
import BiomPreset from '../../helpers/BiomPreset';

const withMapPresetter = (View) => {
  return class extends Component {

    state = {
      biomPresets: [],
      isGenerating: false
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

        let biomPresets = [...state.biomPresets];

        for(let x = x1; x <= x2; x++) {

          if(!biomPresets[x]) {
            biomPresets[x] = [];
          }

          for(let y = y1; y <= y2; y++) {
            if(biomPresets[x][y]) break;
            biomPresets[x][y] = BiomPreset.create(x, y, scale);
          }
        }

        return {
          biomPresets
        };
      });
    }

    render() {
      console.log('render');
      return <View {...this.state} {...this.props} />
    }
  }
};

export default withMapPresetter;
