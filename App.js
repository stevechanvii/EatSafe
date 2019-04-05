import React from 'react';
import { Button, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import DetailsScreen from './src/Navigation/DetailsScreen';
import DiaryScreen from './src/Navigation/DiaryScreen';
import SettingsScreen from './src/Navigation/SettingsScreen';
import ScanningScreen from './src/Navigation/ScanningScreen';
import ReportScreen from './src/Navigation/ReportScreen';
import ProfileScreen from './src/Navigation/ProfileScreen';
import SomeWhereElseScreen from './src/Navigation/SomeWhereElseScreen';


const DiaryStack = createStackNavigator({
  Diary: { screen: DiaryScreen },
  Details: { screen: DetailsScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
});

const ProfileStack = createStackNavigator({
  Profile: {screen: ProfileScreen},
  SomeWhereElse: { screen: SomeWhereElseScreen }
});

export default createAppContainer(createBottomTabNavigator(
  {
    Diary: { screen: DiaryStack },
    Scanning: { screen: ScanningScreen },
    Report: { screen: ReportScreen },
    // Settings: { screen: SettingsStack }
    Profile: { screen: ProfileStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Diary') {
          iconName = `calendar-${focused ? 'edit' : 'check-outline'}`;
        } else if (routeName === 'Settings') { // No longer useable
          // iconName = `ios-options${focused ? '' : '-outline'}`;
          iconName = 'camera';
        } else if (routeName === 'Scanning') {
          iconName = 'barcode-scan';
        } else if (routeName === 'Report') {
          iconName = `clipboard-text-${focused ? 'play-outline' : 'outline'}`
        } else if (routeName === 'Profile') {
          iconName = `account${focused ? '-alert-outline' : ''}`
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
));
