import React from 'react';
import SimpleBootstrap from '../../react-simple-bootstrap'

import SplashScreen from './pages/SplashScreen';
import bootstrap from './bootstrap/run'
import MainPage from './pages/MainPage';

export default (props) => 
    <SimpleBootstrap 
        renderSplash={props => <SplashScreen {...props} />} 
        bootstrap={bootstrap}
        renderApp={props => <MainPage {...props} />} 
        {...props}
    />