import React, {Component} from 'react';
import debounce from '../../helpers/debounce';

const withEnvironment = (View) => {
  return class extends Component {
    state = {
      environment: {
        height: 0,
        width: 0,
        mouseX: 0,
        mouseY: 0
      }
    };

    componentDidMount() {
      this.setWindowSizes();

      window.addEventListener('resize', () => {
        this.setWindowSizes()
      });

      window.addEventListener('mousemove', (e) => {
        this.setMousePosition(e);
      });
    }

    setWindowSizes = (e) => {
      debounce(() => {
        this.setState((prevState) => {
          const environment = {
            ...prevState.environment,
            height: window.innerHeight,
            width: window.innerWidth
          };

          return {
            environment
          }
        });
      }, 1000, true)();
    };

    setMousePosition = (e) => {
      debounce(() => {
        this.setState((prevState) => {
          const environment = {
            ...prevState.environment,
            mouseX: e.pageX,
            mouseY: e.pageY
          };

          return {
            environment
          }
        });
      }, 100, true)();
    };

    render () {
      return (
        <View {...this.state} {...this.props} />
      );
    }
  }
};

export default withEnvironment;
