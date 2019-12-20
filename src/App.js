import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/home-screen';
import SweetScreen from './screens/sweet-screen';
import ComplimentScreen from './screens/compliment-screen';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Sweet: {screen: SweetScreen},
    Compliment: {screen: ComplimentScreen},
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTintColor: '#bb497ac7',
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
