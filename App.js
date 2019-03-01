/**
 * - AppContainer (SwitchNavigator)
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 *    - NavigationDrawer (DrawerNavigator)
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - FeedStack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - SettingsStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */

import React from 'react';

import AppContainer from './navigation/AppContainer';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
};
