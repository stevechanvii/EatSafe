import React, { Component } from 'react';

// import { Text, View } from 'react-native';
import { Container, Text, Thumbnail, Header, Content, Accordion } from "native-base";
import uri from '../../asserts/logo.jpg';

class reportScreen extends Component {
    static navigationOptions = {
        title: 'Report',
    };

    render() {
        return (
            <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Thumbnail large source={uri} />
                <Text style={{ color: "black", fontSize: 24, fontWeight: "bold" }}>Report</Text>
                <Text style={{ color: "black", fontSize: 18 }}>Coming Soon</Text>
            </Container>
        );
    }
}

export default reportScreen;