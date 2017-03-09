import React from 'react';
import { Text, View } from 'react-native';
import {connect} from 'react-redux';

const SomePage = ({someValue}) => 
    <View style={{ marginTop: 300 }}>
        <Text>
            This is Some Page in MyApp1 with someValue={someValue} 
        </Text>
    </View>;

export default connect(state => ({someValue: state.someValue}))(SomePage);
