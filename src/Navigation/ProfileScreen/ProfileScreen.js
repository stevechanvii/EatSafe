import React, { Component } from 'react';

import { StyleSheet, AsyncStorage } from 'react-native';
import { Container, Header, Content, Thumbnail, Text, Button, Badge, Body, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import uri from '../../asserts/avatar_square.jpg';


class profileScreen extends Component {
    static navigationOptions = {
        title: 'Profile',
    };

    state = {
        milk: false,
        soy: false,
        seafood: false,
        userName: ''
    };

    // wrong!!!!!
    readHandler = async() => {
        try {
            const user_name = await AsyncStorage.getItem('user_name');
            user_name ? this.setState({user_name: ''}) : this.setState({userName: user_name});

            // const milk = await AsyncStorage.getItem('milk');
            // milk ? this.setState({milk: ''}) : this.setState({milk: milk});

            // const soy = await AsyncStorage.getItem('soy');
            // soy ? this.setState({soy: ''}) : this.setState({soy: soy});

            // const seafood = await AsyncStorage.getItem('seafood');
            // seafood ? this.setState({seafood: ''}) : this.setState({seafood: seafood});

          } catch (error) {
            // Error retrieving data
          }
    };

    render() {
        this.readHandler();
        console.log(this.state);

        return (
            <Container>
                <Content>
                    <Grid>
                        <Row style={styles.avatorRow}>
                            <Thumbnail large source={uri} />
                            <Text>Hi, </Text>
                            <Text>{this.state.userName}</Text>

                        </Row>
                        <Row style={styles.allergCheck}>
                            <Text>Allergen</Text>
                            {/* {this.state.milk ? <Badge info><Text>milk</Text></Badge> : ''}
                            {this.state.soy ? <Badge info><Text>soy</Text></Badge> : ''}
                            {this.state.seafood ? <Badge info><Text>seafood</Text></Badge> : ''} */}

                        </Row>
                        <Row style={styles.buttonRow}>
                            <Button info
                                onPress={() => this.props.navigation.navigate('EditProfile')}>
                                <Text>Setup Profile</Text>
                            </Button>
                        </Row>

                    </Grid>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    avatorRow: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    allergCheck: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonRow: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default profileScreen;