import React, { Component } from 'react';

const withScale = (View) => {
  return class extends Component {
    state = {
      scale: 240,
      radius: 2
    };

    componentDidMount() {
      this.calcScale()
    }

    componentDidUpdate(prevProps) {
      if (prevProps.environment.width !== this.props.environment.width ||
          prevProps.environment.height !== this.props.environment.height) {
        this.calcScale()
      }
    }

    calcScale() {
      const scale = (this.props.environment.height / 2 / Math.tan(Math.PI / 6) + this.props.environment.width / 2 ) /
                    (this.state.radius * 2);

      this.setState((prevState) => {
        return {
          scale: Math.ceil(scale),
          radius: prevState.radius
        }
      })
    }

    render () {
      return (
        <View {...this.state} {...this.props} />
      );
    }
  }
};

export default withScale;
