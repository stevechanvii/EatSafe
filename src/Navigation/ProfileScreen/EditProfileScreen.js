import React, { Component } from 'react';

import { Text, View, AsyncStorage, StyleSheet } from 'react-native';
import { Container, Header, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import uri from '../../asserts/avatar_square.jpg';


class editProfileScreen extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Grid>
                    <Row style={styles.avatar}>
                        <Text>Hi, Welcome to EatSafe, the information will only be saved locally for security reasons.</Text>
                        <Thumbnail large source={uri} />
                        <Text>Hi, </Text>
                        <Text>Steve</Text>
                    </Row>
                    <Row style={styles.allergen}></Row>
                </Grid>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    avatar: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    allergen: {
        height: 300
    }
});


export default editProfileScreen;