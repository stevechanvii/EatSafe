import React, { Component } from 'react';

import { Text, View, Button } from 'react-native';

class productDetailScreen extends Component {
    render() {
        const { navigation } = this.props;
        const barcodeType = navigation.getParam('barcodeType', 'NO-Type');
        const barcode = navigation.getParam('barcode', 'NO-Code');

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>barcode type: {JSON.stringify(barcodeType)}</Text>
                <Text>barcode: {JSON.stringify(barcode)}</Text>

                <Text>product Detail Screen</Text>

                <Button
                    title="Go back to Scan"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

export default productDetailScreen;