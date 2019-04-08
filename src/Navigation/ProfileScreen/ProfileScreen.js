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
        isLoading: true,
        userName: ''
        
    };

    componentDidMount() {
        const { navigation } = this.props;
        const userName = navigation.getParam('userName', this.state.userName);
        this.setState({userName: userName});

        AsyncStorage.getItem('user_name').then((token) => {
            console.log(token);
            this.setState({
                isLoading: false,
                userName: token
            });
        });
    }

    
    render() {
        if (this.state.isLoading) {
            return <Container><Text>Loading...</Text></Container>;
        }
        
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