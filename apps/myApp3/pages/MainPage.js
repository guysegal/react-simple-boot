import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {observer} from 'mobx-react/native';

import SomePage from './SomePage';

const Router = StackNavigator({
  SomePage: { screen: SomePage }
});

const MainPage = ({store}) => {
    return (<Router screenProps={{...store}}/>);
}

export default observer(MainPage);

