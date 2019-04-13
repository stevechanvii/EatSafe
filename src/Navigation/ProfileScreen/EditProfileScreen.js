import React, { Component } from 'react';

import { View, AsyncStorage, StyleSheet } from 'react-native';
import { Container, Header, Thumbnail, Form, Item, Label, Input, Toast, Content, Text, DatePicker, ListItem, CheckBox, Button, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import uri from '../../asserts/avatar_square.jpg';


class editProfileScreen extends Component {
    static navigationOptions = {
        title: 'Edit Profile',
    };

    constructor(props) {
        super(props);
        this.state = {
            // chosenDate: new Date(),
            milk: false,
            soy: false,
            seafood: false,
            userName: ''
        };
        // this.setDate = this.setDate.bind(this);
    }

    // setDate(newDate) {
    //     this.setState({
    //         chosenDate: newDate,
    //     });
    // };

    saveHandler = async () => {
        console.log('save Handler invoked!');
        try {
            await AsyncStorage.setItem('user_name', JSON.stringify(this.state.userName.toString()));
            await AsyncStorage.setItem('milk', JSON.stringify(this.state.milk.toString()));
            await AsyncStorage.setItem('soy', JSON.stringify(this.state.soy.toString()));
            await AsyncStorage.setItem('seafood', JSON.stringify(this.state.seafood.toString()));
        } catch (error) {
            // Error saving data
            console.log(error);
        }


        this.props.navigation.state.params.refresh(this.state);
        this.props.navigation.goBack();
    };

    // Search the local database and set new satate
    componentDidMount() {
        let keys = ['user_name', 'milk', 'soy', 'seafood'];
        let values = [];
        AsyncStorage.multiGet(keys, (err, stores) => {
            stores.map((result, i, store) => {
                values.push(store[i][1]);
                console.log(store[i][1]);

            });
            console.log(values + '1111');
            // the value extract from database is JSON value, so need to convert to string and remove quote
            this.setState({
                isLoading: false,
                userName: values[0].toString().replace(/"/g, ''),
                milk: values[1].toString().replace(/"/g, '') === 'true',
                soy: values[2].toString().replace(/"/g, '') === 'true',
                seafood: values[3].toString().replace(/"/g, '') === 'true'
            });
        });

    }


    render() {
        return (
            <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
                {/* <Header /> */}
                <Content>
                    <Thumbnail large source={uri} style={{ alignSelf: 'center', margin: 20 }} />
                    <Text style={{ alignSelf: 'center' }}>Hi, Welcome to EatSafe,</Text>
                    <Text style={{ alignSelf: 'center' }}>The information will only be saved locally</Text>
                    <Form>
                        <Item floatingLabel>
                            <Label style={this.state.userName === '' ? {} : styles.hidden }>Username</Label>
                            <Input placeholder={this.state.userName} onChangeText={(text) => this.setState({ userName: text })} />
                        </Item>
                    </Form>
                    {/* <Text>Date of Birth</Text>
                    <DatePicker
                        defaultDate={new Date(1990, 1, 1)}
                        minimumDate={new Date(1900, 1, 1)}
                        maximumDate={new Date(2019, 4, 9)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={this.setDate}
                        disabled={false}
                    /> */}
                    <Text style={{ alignSelf: 'center', margin: 20 }} >Please choose allergies you suffering</Text>
                    <ListItem onPress={() => this.setState({ milk: !this.state.milk })}>
                        <CheckBox checked={this.state.milk} onPress={() => this.setState({ milk: !this.state.milk })} />
                        <Body>
                            <Text>Milk</Text>
                        </Body>
                    </ListItem>
                    <ListItem onPress={() => this.setState({ soy: !this.state.soy })}>
                        <CheckBox checked={this.state.soy} onPress={() => this.setState({ soy: !this.state.soy })} />
                        <Body>
                            <Text>Soy</Text>
                        </Body>
                    </ListItem>
                    <ListItem onPress={() => this.setState({ seafood: !this.state.seafood })}>
                        <CheckBox checked={this.state.seafood} onPress={() => this.setState({ seafood: !this.state.seafood })} />
                        <Body>
                            <Text>Seafood</Text>
                        </Body>
                    </ListItem>
                    <Button info style={{ padding: '10%', alignSelf: 'center', margin: 20 }} onPress={this.saveHandler} >
                        <Text>Save</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
};

const styles = StyleSheet.create({
    avatar: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    allergen: {
        height: 300
    },
    rowStyle: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hidden: {
        width: 0,
        height: 0,
    }
});


export default editProfileScreen;