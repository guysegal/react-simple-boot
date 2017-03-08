import React, { Component } from 'react';

export default class SimpleBoot extends Component {
  constructor() {
      super();
      this.state = {ready: false}
  }

  componentDidMount() {
      this.props.boot().then((result) => {
          this.setState({
              ready: true, 
              artifacts: result.artifacts, 
              shutdown: result.shutdown
            });
        });
  }

  componentWillUnmount() {
      this.state.shutdown();
  }

  render() {
      let {renderSplash, renderApp, boot,  ...p} = this.props;
      renderSplash = renderSplash || (() => null);
      if (!this.state.ready) {
          return renderSplash(p);
      }
      else {
          return renderApp({...p, ...this.state.artifacts});
      } 
  }
}