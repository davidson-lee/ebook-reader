import React from 'react';
import { Provider } from 'react-redux';

import { Font } from 'expo'

import store from './store/store'

import { createStackNavigator, createAppContainer, Alert, createSwitchNavigator } from 'react-navigation'
import Home from './screens/Home'
import LoginScreen from './screens/LoginScreen'
import AuthLoadingScreen from './screens/AuthLoadingScreen'

const AppStack = createStackNavigator({
  Home: {
    screen: Home
  }
}, {
  initialRouteName: 'Home'
})

const AuthStack = createStackNavigator({ Login: LoginScreen })

const Navigation = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
))

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    )
  }
}
