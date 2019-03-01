import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import NavigationDrawer from './NavigationDrawer';
import WelcomeScreen from '../screens/WelcomeScreen';

export default createAppContainer(createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: NavigationDrawer }
}));
