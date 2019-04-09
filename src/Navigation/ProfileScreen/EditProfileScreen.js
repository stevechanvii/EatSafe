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
            chosenDate: new Date(),
            milk: false,
            soy: false,
            seafood: false,
            userName: ''
        };
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({
            chosenDate: newDate,
        });
    };

    // wrong!!!!!
    saveHandler = async () => {
        console.log('save Handler invoked!');
        try {
            await AsyncStorage.setItem('user_name', JSON.stringify(this.state.userName));
            await AsyncStorage.setItem('milk', JSON.stringify(this.state.milk));
            await AsyncStorage.setItem('soy', JSON.stringify(this.state.soy));
            await AsyncStorage.setItem('seafood', JSON.stringify(this.state.seafood));
        } catch (error) {
            // Error saving data
            console.log(error);
        }


        this.props.navigation.state.params.refresh(this.state);
        this.props.navigation.goBack();
    };

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
                            <Label>Username</Label>
                            <Input onChangeText={(text) => this.setState({ userName: text })} />
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
    }
});


export default editProfileScreen;