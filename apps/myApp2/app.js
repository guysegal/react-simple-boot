import React from 'react';
import SimpleBootstrap from '../../react-simple-bootstrap'

import SplashScreen from './pages/SplashScreen';
import bootstrap from './bootstrap/run';
import {measure, withReporter} from './measure';
import MainPage from './pages/MainPage';

export default (props) => 
    <SimpleBootstrap 
        renderSplash={SplashScreen} 
        bootstrap={bootstrap}
        measureWith={measure(withReporter)}
        renderApp={MainPage} 
        {...props}
    />

