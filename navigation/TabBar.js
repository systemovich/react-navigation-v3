import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

import DetailScreen from '../screens/DetailScreen';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const FeedStack = createStackNavigator(
  {
    Feed: {
      screen: FeedScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Feed',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Profile',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  }
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Settings',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  }
});

export default createBottomTabNavigator({
    FeedStack,
    ProfileStack,
    SettingsStack
}, {
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      header: null,
      headerTitle: routeName
    };
  }
});
