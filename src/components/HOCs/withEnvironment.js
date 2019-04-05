import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import debounce from '../../helpers/debounce';
import throttle from '../../helpers/throttle';

const withEnvironment = (View) => {
  return class extends Component {
    state = {
      environment: {
        rootElement: document.querySelector(this.props.root),
        height: 0,
        width: 0,
        windowWidth: 0,
        windowHeight: 0,
        mouseX: 0,
        mouseY: 0,
        development: false
      }
    };

    componentDidMount() {
      console.log();
      this.setWindowSizes();

      document.addEventListener('resize', () => {
        this.setWindowSizes()
      });

      document.addEventListener('mousemove', (e) => {
        // this.setMousePosition(e);
      });
    }

    setWindowSizes = debounce(() => {
      this.setState((prevState) => {
        const environment = {
          ...prevState.environment,
          windowHeight: window.innerHeight,
          windowWidth: window.innerWidth,
          height: this.state.environment.rootElement.offsetHeight,
          width: this.state.environment.rootElement.offsetWidth,
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
    }, 100);

    render () {
      return (
        <View {...this.state} {...this.props} />
      );
    }
  }
};

export default withEnvironment;
