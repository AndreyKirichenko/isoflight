import React, {Component} from 'react';
import debounce from '../../helpers/debounce';
import throttle from '../../helpers/throttle';

const withEnvironment = (View) => {
  return class extends Component {
    state = {
      environment: {
        height: 0,
        width: 0,
        mouseX: 0,
        mouseY: 0,
        development: false
      }
    };

    componentDidMount() {
      this.setWindowSizes();

      document.addEventListener('resize', () => {
        this.setWindowSizes()
      });

      document.addEventListener('mousemove', (e) => {
        this.setMousePosition(e);
      });
    }

    setWindowSizes = debounce(() => {
      this.setState((prevState) => {
        const environment = {
          ...prevState.environment,
          // height: window.innerHeight,
          // width: window.innerWidth / 3
          height: 600,
          width: 600
        };

        return {
          environment
        }
      });
    }, 200, true);

    setMousePosition = throttle((e) => {
      this.setState((prevState) => {
        if(!e.pageX || !e.pageY) return;

        const environment = {
          ...prevState.environment,
          mouseX: e.pageX,
          mouseY: e.pageY
        };

        return {
          environment
        }
      });
    }, 200);

    render () {
      return (
        <View {...this.state} {...this.props} />
      );
    }
  }
};

export default withEnvironment;
