import React from 'react';
import { Button, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import DetailsScreen from './src/Navigation/DetailsScreen';
import DiaryScreen from './src/Navigation/DiaryScreen/DiaryScreen';
import ScanningScreen from './src/Navigation/ScanningScreen/ScanningScreen';
import ReportScreen from './src/Navigation/ReportScreen/ReportScreen';
import ProfileScreen from './src/Navigation/ProfileScreen/ProfileScreen';
import SomeWhereElseScreen from './src/Navigation/SomeWhereElseScreen';
import ProductDetailScreen from './src/Navigation/ScanningScreen/ProductDetailScreen';


const DiaryStack = createStackNavigator({
  Diary: { screen: DiaryScreen },
  Details: { screen: DetailsScreen },
});

const ProfileStack = createStackNavigator({
  Profile: {screen: ProfileScreen},
  SomeWhereElse: { screen: SomeWhereElseScreen }
});

const ScanningStack = createStackNavigator({
  Scanning: { screen: ScanningScreen },
  ProductDetail: {screen: ProductDetailScreen}
});

export default createAppContainer(createBottomTabNavigator(
  {
    Diary: { screen: DiaryStack },
    Scanning: { screen: ScanningStack },
    Report: { screen: ReportScreen },
    Profile: { screen: ProfileStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Diary') {
          iconName = `calendar-${focused ? 'edit' : 'check-outline'}`;
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
