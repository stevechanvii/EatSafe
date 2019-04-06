import React, { Component } from 'react';

import { StyleSheet } from 'react-native';
import { Container, Header, Content, Thumbnail, Text, Button } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import uri from '../../asserts/avatar_square.jpg';

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
                <Grid>
                    <Row style={styles.avatorRow}>
                            <Thumbnail large source={uri} />
                    </Row>
                    <Row style={styles.allergCheck}>
                        <Text>Hello, my name is Danyang Chen</Text>
                    </Row>
                    <Row style={styles.buttonRow}>
                        <Button info
                            onPress={() => this.props.navigation.navigate('SomeWhereElse')}>
                            <Text>Go to some Where Else Screen</Text>
                        </Button>
                    </Row>

                </Grid>

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
        height: 200
    }
});

export default profileScreen;