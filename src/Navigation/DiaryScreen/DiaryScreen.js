import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Thumbnail, Content, H2 } from 'native-base';
import uri from '../../asserts/logo.jpg';


export default class diaryScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //     {/* <Text>Diary!</Text> */}
      //     <Text>Home Page</Text>

      //     {/* <Button
      //       title="Go to Report"
      //       onPress={() => this.props.navigation.navigate('Report')}/>
      //     <Button
      //       title="Go to Profile"
      //       onPress={() => this.props.navigation.navigate('Profile')}/> */}
      // </View>
      <Container>
        <Content>
          <H2>Welcome to EatSafe</H2>
          <Thumbnail large source={uri} />
        </Content>
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