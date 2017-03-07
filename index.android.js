import BootComponent from './react-native-boot-app'
import MyApp from './src/MyApp';
import SplashScreen from './src/SplashScreen';
import boot from './src/bootMyApp'

<SimpleBoot 
    renderSplash={(props) => <SplashScreen {...props} />} 
    boot={() => bootMyApp()}
    renderApp={(props) => <MyApp {...props} />} 
/>

AppRegistry.registerComponent('AppBootExample', () => SimpleBoot);
