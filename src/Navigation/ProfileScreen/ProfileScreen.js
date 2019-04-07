import React, { Component } from 'react';

import { StyleSheet } from 'react-native';
import { Container, Header, Content, Thumbnail, Text, Button, CheckBox, Body, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import uri from '../../asserts/avatar_square.jpg';
import EditProfile from './EditProfileScreen';


class profileScreen extends Component {
    static navigationOptions = {
        title: 'Profile',
    };

    render() {
        
        return (
            // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            //     <Text>profile!</Text>
            //     <Button
            //         title="Go to some Where Else Screen"
            //         onPress={() => this.props.navigation.navigate('SomeWhereElse')}
            //     />
            // </View>
            <Container>
                <Content>
                    <Grid>
                        <Row style={styles.avatorRow}>
                            <Thumbnail large source={uri} />
                            <Text>Hi, </Text>
                            <Text>Steve</Text>

                        </Row>
                        <Row style={styles.allergCheck}>
                            {/* <Text>Hello, my name is Danyang Chen</Text> */}

                            <ListItem>
                                <CheckBox checked={false} />
                                {/* <Body> */}
                                <Text>Daily Stand Up</Text>
                                {/* </Body> */}
                            </ListItem>

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