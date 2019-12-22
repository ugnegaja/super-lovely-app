import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/home-screen';
import SweetScreen from './screens/sweet-screen';
import ComplimentScreen from './screens/compliment-screen';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import combineReducers from './reducers/reducers';

const middlewares = [thunk];
const store = createStore(combineReducers, applyMiddleware(...middlewares));

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

const Navigation = createAppContainer(MainNavigator);

const App = () => (
    <Provider store={store}>
        <Navigation />
    </Provider>
);

export default App;
