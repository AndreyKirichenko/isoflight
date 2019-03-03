import React, {Component} from 'react';

const withWindow = (View) => {
  return class extends Component {
    state = {
      window: this.getWindow()
    };

    componentDidMount() {
      window.addEventListener('resize', () => {
        this.setState({
          window: this.getWindow()
        });
      });
    }

    getWindow (){
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

export default withWindow;
