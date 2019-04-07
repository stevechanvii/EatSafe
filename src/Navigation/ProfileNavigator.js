import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ProfileScreen from './ProfileScreen/ProfileScreen';
import EditProfileScreen from './ProfileScreen/EditProfileScreen';


// Not Configured!!
const ProfileNavigator = {
    navigation: {
        Profile: {
            screen: ProfileScreen
        },
        EditProfile: {
            screen: EditProfileScreen
        }
    }
}
const AppContainer = createAppContainer(ProfileNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}