import React from 'react';
import { Text, View } from 'react-native';
import {observer} from 'mobx-react/native';

const SomePage = ({screenProps}) =>  {
    return (<View style={{ marginTop: 300 }}>
        <Text>
            This is Some Page in MyApp2 with someValue={screenProps.someValue} 
        </Text>
    </View>);
}

export default SomePage;
