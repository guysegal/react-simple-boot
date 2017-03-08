import React from 'react';
import SimpleBoot from '../../react-simple-boot'

import SplashScreen from './pages/SplashScreen';
import bootstrapMyApp2 from './bootstrap/bootstrapMyApp2'
import MainPage from './pages/MainPage';

export default (props) => 
    <SimpleBoot 
        renderSplash={(props) => <SplashScreen {...props} />} 
        boot={() => bootstrapMyApp2()}
        renderApp={(props) => <MainPage {...props} />} 
    />