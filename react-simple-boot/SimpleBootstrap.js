import React, { Component } from 'react';
import consoleMeasure from './consoleMeasure';

export default class SimpleBootstrap extends Component {
  constructor() {
      super();
      this.state = {ready: false}
  }

  componentDidMount() {
      const measure = this.props.measureWith || consoleMeasure;
      this.props.bootstrap(this.props.initialProps, measure).then((result) => {
          this.setState({
              ready: true, 
              artifacts: result.artifacts, 
              disposables: result.disposables
            });
        });
  }

  componentWillUnmount() {
      //this.state.disposables.dispose();
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