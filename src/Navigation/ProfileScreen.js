import React, { Component } from 'react';

import { Text, View, Button } from 'react-native';

class profileScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>profile!</Text>
                <Button
                    title="Go to some Where Else Screen"
                    onPress={() => this.props.navigation.navigate('SomeWhereElse')}
                />
            </View>
        );
    }
}

export default profileScreen;