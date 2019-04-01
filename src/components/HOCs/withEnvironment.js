import React, {Component} from 'react';

const withEnvironment = (View) => {
  return class extends Component {
    state = {
      environment: this.getWindow()
    };

    componentDidMount() {
      window.addEventListener('resize', () => {
        this.setState({
          window: this.getWindow()
        });
      });
    }

    getWindow () {
      return {
        height: window.innerHeight,
        width: window.innerWidth
      }
    };

    render () {
      return (
        <View {...this.state} {...this.props} />
      );
    }
  }
};

export default withEnvironment;
