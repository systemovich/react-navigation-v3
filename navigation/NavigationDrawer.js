import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

import TabBar from './TabBar';

const DashboardStack = createStackNavigator({
  TabBar: TabBar,
}, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerLeft: (
        <Icon 
          style={{ paddingLeft: 10 }} 
          onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
      )
    };
  }
});

export default createDrawerNavigator({
  Dashboard: DashboardStack,
});
