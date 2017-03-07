import React, { Component } from 'react';

export default class BootComponent extends Component {
  constructor() {
      this.state = {ready: false}
  }

  componentDidMount() {
      this.props.boot().then((bootArtifcats) => {
        this.props = {...this.props, ...bootArtifcats};
        this.setState({ready: true});  
      })
  }

  render() {
      const renderSplash = props.renderSplash || () => null;
      const {renderSplash, renderApp, ...p} = props;
      if (!this.state.ready) {
          return renderSplash(p);
      }
      else {
          return renderApp(p);
      } 
  }
}