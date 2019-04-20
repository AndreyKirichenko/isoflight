import React, { Component } from 'react';
import BiomPreset from '../../services/BiomPreset';

const withBioms = (View) => {
  return class extends Component {
    state = {
      bioms: {},
      biomsForRender: [],
      ranges: {}
    };

    shouldComponentUpdate(nextProps) {
      if(nextProps.scale !== this.props.scale) {
        this.setState(() => {
          return {
            bioms: {}
          }
        });
      }
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
      const biomsForRender = [];

      const { bioms } = state;

      const { radius, scale } = props;

      if(!scale) return null;

      const { currentBiomX, currentBiomY } = this.getCurrentBiomPosition(props.pointOfView, scale);

      const ranges = this.getRanges({ x: currentBiomX, y: currentBiomY, radius, scale });

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

    getCurrentBiomPosition(pointOfView, scale) {
      const { x, y } = pointOfView;

      const currentBiomX = Math.floor(x / scale);
      const currentBiomY = Math.floor(y / scale);

      return {
        currentBiomX,
        currentBiomY
      }
    }

    getRanges({ x, y, radius, scale }) {
      const x1 = x - radius;
      const x2 = x + radius;

      const y1 = y - radius;
      const y2 = y + radius;

      const id = `${x1}-${x2}-${y1}-${y2}-${scale}`;

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
