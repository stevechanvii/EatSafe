import React, { Component } from 'react';

import { FlatList, ActivityIndicator, Text, View, Button } from 'react-native';

// import { Text, View, Button } from 'react-native';

class productDetailScreen extends Component {
    state = { 
        isLoading: true
     }

    componentDidMount() {
        const { navigation } = this.props;
        const barcode = navigation.getParam('barcode', 'NO-Code');
        return fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode.toString()}.json`)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    barcode: barcode,
                    productName: responseJson.status_verbose.toString() === 'product not found' ? null : responseJson.product.product_name,
                    // be careful bugs here, if product not exist, ingredients won't find
                    ingredients: responseJson.product.ingredients,
                    allergens: responseJson.product.allergens
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

        if (this.state.productName === null) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <Text>Barcode: {this.state.barcode} </Text>
                    <Text>product not found</Text>
                </View>
            )
        }

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Product Name: {JSON.stringify(this.state.productName)}</Text>
                <Text>Product Alerges: {JSON.stringify(this.state.allergens)}</Text>
                {/* Can not use forEach??? Don't know why */}
                <Text>Ingredients:</Text>
                {this.state.ingredients.map(obj => <Text key={obj.id}>{obj.text}</Text>)}

                {/* <FlatList
                    data={this.state.productName}
                    renderItem={({ item }) => <Text>Product Name: {item.product_name}, Ingredients: {item.ingredients}</Text>}
                    // keyExtractor={({ id }, index) => id}
                /> */}

                <Button
                    title="Go back to Scan"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

export default productDetailScreen;