import React, { Component } from 'react';

import { FlatList, ActivityIndicator, Text, View, Button } from 'react-native';

// import { Text, View, Button } from 'react-native';

class productDetailScreen extends Component {
    state = { 
        isLoading: true
     }

    componentDidMount() {
        const { navigation } = this.props;
        return fetch(`https://world.openfoodfacts.org/api/v0/product/${navigation.getParam('barcode', 'NO-Code').toString()}.json`)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        // const { navigation } = this.props;
        // const barcodeType = navigation.getParam('barcodeType', 'NO-Type');
        // const barcode = navigation.getParam('barcode', 'NO-Code');

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{JSON.stringify(this.state.dataSource.product.product_name)}</Text>
                {/* <Text>{JSON.stringify(this.state.dataSource.ingredients)}</Text> */}
                {/* <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Text>Product Name: {item.product_name}, Ingredients: {item.ingredients}</Text>}
                    // keyExtractor={({ id }, index) => id}
                /> */}
                {/* <Text>barcode type: {JSON.stringify(barcodeType)}</Text>
                <Text>barcode: {JSON.stringify(barcode)}</Text>

                <Text>product Detail Screen</Text> */}

                <Button
                    title="Go back to Scan"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

export default productDetailScreen;