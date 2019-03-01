import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

import DetailScreen from '../screens/DetailScreen';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const tabOptions = ({ navigation }) => {
  return {
    headerTitle: navigation.state.routeName,
    headerLeft: (
      <Icon 
        name="md-menu" 
        onPress={() => navigation.openDrawer()} 
        size={30} 
        style={{ paddingLeft: 10 }} 
      />
    )
  };
}

const FeedStack = createStackNavigator({
  Feed: {
    screen: FeedScreen,
    navigationOptions: tabOptions, 
  },
  Detail: DetailScreen,
}, {
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: tabOptions, 
  }
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: tabOptions 
  }
});

export default createBottomTabNavigator({
    FeedStack,
    ProfileStack,
    SettingsStack
}, {
  navigationOptions: ({ navigation }) => {
    return {
      header: null,
      headerTitle: navigation.state.routeName,
    };
  }
});
