import React, { Component } from 'react';

import { Text, View } from 'react-native';

class scanningScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Scanning!</Text>
            </View>
        );
    }
}

export default scanningScreen;