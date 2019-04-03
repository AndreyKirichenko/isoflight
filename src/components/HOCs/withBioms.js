import React, { Component } from 'react';
import BiomPreset from '../../services/BiomPreset';

const RADIUS = 2;

const withBioms = (View) => {
  return class extends Component {
    state = {
      bioms: {},
      biomsForRender: [],
      ranges: {}
    };

    shouldComponentUpdate(nextProps) {
      return nextProps.pointOfView.step !== this.props.pointOfView.step;
    }

    componentDidMount() {
      this.update();
    }

    componentDidUpdate() {
      this.update();
    }

    update = () => {
      this.setState((prevState, prevProps) => {
        return this.getBioms(prevState, prevProps);
      });
    };

    getBioms(state, props) {
      const bioms = state.bioms;

      const biomsForRender = [];

      const { scale } = props.pointOfView;

      const radius = RADIUS;

      const { currentBiomX, currentBiomY } = this.getCurrentBiomPosition(props.pointOfView);

      const ranges = this.getRanges(currentBiomX, currentBiomY, radius);

      const { x1, x2, y1, y2 } = ranges;

      for(let x = x1; x <= x2; x++) {
        if(!bioms[x]) {
          bioms[x] = {};
        }
        for(let y = y1; y <= y2; y++) {
          if(!bioms[x][y]) {
            bioms[x][y] = new BiomPreset(x, y, scale);
          }
          biomsForRender.push(bioms[x][y]);
        }
      }

      return {
        bioms,
        biomsForRender,
        ranges
      };
    }

    getCurrentBiomPosition(pointOfView) {
      const { scale, x, y } = pointOfView;

      const currentBiomX = Math.floor(x / scale);
      const currentBiomY = Math.floor(y / scale);

      return {
        currentBiomX,
        currentBiomY
      }
    }

    getRanges(x, y, radius) {
      const x1 = x - radius;
      const x2 = x + radius;

      const y1 = y - radius;
      const y2 = y + radius;

      const id = `${x1}-${x2}-${y1}-${y2}`;

      return {
        x1,
        x2,
        y1,
        y2,
        id
      }
    }

    render() {
      return <View {...this.state} {...this.props} />
    }
  };
};

export default withBioms;
