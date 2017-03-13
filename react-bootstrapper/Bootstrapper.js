import React, { Component } from 'react';
import consoleMeasure from './consoleMeasure';

export default class Bootstrapper extends Component {
  constructor() {
      super();
      this.state = {ready: false}
  }

  componentDidMount() {
      const measure = this.props.measureWith || consoleMeasure;
      this.props.bootstrap(this.props.initialProps, measure)
        .then((result) => this.setState({
            ready: true, 
            artifacts: result.artifacts, 
            disposables: result.disposables
        }));        
  }

  componentWillUnmount() {
      this.state.disposables.forEach(d);
  }

  render() {
      let {renderBefore, renderAfter, boot,  ...p} = this.props;
      renderBefore = renderBefore || (() => null);
      if (!this.state.ready) {
          return renderBefore(p);
      }
      else {
          return renderAfter({...p, ...this.state.artifacts});
      } 
  }
}