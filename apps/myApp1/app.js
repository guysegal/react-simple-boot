import React from 'react';
import Bootstrapper from '../../react-bootstrapper'

import SplashScreen from './pages/SplashScreen';
import bootstrap from './bootstrap/run'
import MainPage from './pages/MainPage';

export default (props) => 
    <Bootstrapper 
        renderBefore={SplashScreen} 
        bootstrap={bootstrap}
        renderAfter={MainPage}
        {...props} />