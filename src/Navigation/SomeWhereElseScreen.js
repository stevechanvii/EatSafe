import React, { Component } from 'react';

import { Text, View } from 'react-native';

class someWhereElseScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>some Where Else Screen!</Text>
            </View>
        );
    }
}

export default someWhereElseScreen;