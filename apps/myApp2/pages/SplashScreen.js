import React from 'react';
import { StyleSheet, View } from 'react-native';

const SplashScreen = (props) => <View style={styles.container} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  }  
});

export default SplashScreen;