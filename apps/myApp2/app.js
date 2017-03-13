import React from 'react';
import Bootstrapper from '../../react-bootstrapper'

import SplashScreen from './pages/SplashScreen';
import bootstrap from './bootstrap/run';
import {measure, withReporter} from './measure';
import MainPage from './pages/MainPage';

export default (props) => 
    <Bootstrapper 
        renderBefore={SplashScreen} 
        bootstrap={bootstrap}
        measureWith={measure(withReporter)}
        renderAfter={MainPage} 
        {...props} />

