import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, Header, Thumbnail, Content, H2 } from 'native-base';
import uri from '../../asserts/logo.jpg';


export default class diaryScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Thumbnail large source={uri} />
        <Text style={{ color: "black", fontSize: 24, fontWeight: "bold" }}>Diary</Text>
        <Text style={{ color: "black", fontSize: 18 }}>Coming Soon</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '40%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});