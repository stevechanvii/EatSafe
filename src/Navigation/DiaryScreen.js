import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class diaryScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Diary!</Text>
          <Button
            title="Go to Report"
            onPress={() => this.props.navigation.navigate('Report')}
          />
          <Button
            title="Go to Profile"
            onPress={() => this.props.navigation.navigate('Profile')}
          />
        </View>
      );
    }
  }