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
        userName: '',
        refresh: false

    };

    //refresh code after go back
    refreshFunction(props) {
        this.setState({
            userName: props.userName,
            milk: props.milk,
            soy: props.soy,
            seafood: props.seafood
        });
        console.log('refreshFunction ' + this.state.soy);
    }

    componentDidMount() {
        let keys = ['user_name', 'milk', 'soy', 'seafood'];
        let values = [];
        AsyncStorage.multiGet(keys, (err, stores) => {
            stores.map((result, i, store) => {
                values.push(store[i][1]);
                console.log(store[i][1]);

            });
            console.log(values + '1111');
            this.setState({
                isLoading: false,
                userName: values[0],
                milk: values[1],
                soy: values[2],
                seafood: values[3]
            });
        });

    }


    render() {
        if (this.state.isLoading) {
            return <Container><Text>Loading...</Text></Container>;
        }
        console.log('render');

        return (
            <Container>
                <Content>
                    <Grid>
                        <Row style={styles.avatorRow}>
                            <Thumbnail large source={uri} />
                        </Row>
                        <Row style={styles.avatorRow}>
                            <Text>Hi, </Text>
                            <Text>{this.state.userName ? this.state.userName.toString() : 'please sign in'}</Text>
                        </Row>
                        <Row style={styles.allergyIcon}>
                            <Text>Allergens</Text>
                        </Row>
                        <Row style={styles.allergCheck}>
                            {this.state.milk ? this.state.milk.toString() === 'true' ? <Badge info><Text>milk</Text></Badge> : null : null}
                            {this.state.soy ? this.state.soy.toString() === 'true' ? <Badge info><Text>soy</Text></Badge> : null : null}
                            {this.state.seafood ? this.state.seafood.toString() === 'true' ? <Badge info><Text>seafood</Text></Badge> : null : null}

                        </Row>
                        <Row style={styles.buttonRow}>
                            <Button info
                                onPress={() => this.props.navigation.navigate('EditProfile', { refresh: this.refreshFunction.bind(this) })}>
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
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    allergCheck: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonRow: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    allergyIcon: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default profileScreen;