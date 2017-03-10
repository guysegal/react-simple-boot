import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

const MainPage = ({store}) =>
  <Provider store={store}>
    <Router>
      <Scene key="root" hideNavBar hideTabBar>
        <Scene key="SOME_PAGE" component={require('./SomePage').default} />
      </Scene>
    </Router>
  </Provider>;

export default MainPage;

