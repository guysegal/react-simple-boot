import React from 'react';
import SimpleBoot from '../../react-simple-boot'

import SplashScreen from './pages/SplashScreen';
import bootstrapMyApp1 from './bootstrap/bootstrapMyApp1'
import MainPage from './pages/MainPage';

export default (props) => 
    <SimpleBoot 
        renderSplash={(props) => <SplashScreen {...props} />} 
        boot={() => bootstrapMyApp1()}
        renderApp={(props) => <MainPage {...props} />} 
    />