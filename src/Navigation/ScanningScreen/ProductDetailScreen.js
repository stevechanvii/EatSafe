import React, { Component } from 'react';

import { FlatList, ActivityIndicator, Text, View, Button } from 'react-native';
import CardShowCase from '../../Components/Card/CardShowCase';
import ProductNotFound from '../../Components/Card/ProductNotFound';
import imageUri from '../../asserts/allergies_image.jpg';

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

                if (responseJson.status_verbose.toString() === 'product not found') {
                    this.setState({
                        isLoading: false,
                        barcode: barcode,
                        productName: null
                    });
                } else {
                    this.setState({
                        isLoading: false,
                        barcode: barcode,
                        productName: responseJson.product.product_name,
                        // be careful bugs here, if product not exist, these won't found
                        ingredients: responseJson.product.ingredients ? responseJson.product.ingredients : 'Ingredients Not Found',
                        allergens: responseJson.product.allergens ? responseJson.product.allergens : 'Allergens Not Found',
                        image: responseJson.product.image_url ? responseJson.product.image_url : imageUri,
                        traces: responseJson.product.traces_tags ? responseJson.product.traces_tags : '',
                        categories: responseJson.product.categories_tags ? responseJson.product.categories_tags : '',
                        nutrientLevel: responseJson.product.nutrient_levels ? responseJson.product.nutrient_levels: 'Nutrient Level Not Found',
                        genericName: responseJson.product.generic_name ? responseJson.product.generic_name : ''
                    }, function () {

                    });

                }
            }

            )
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
        // cobnst barcodeType = navigation.getParam('arcodeType', 'NO-Type');
        // const barcode = navigation.getParam('barcode', 'NO-Code');

        if (this.state.productName === null) {
            return (
                <ProductNotFound barcode={this.state.barcode} />
            )
        }

        return (
            <CardShowCase productDetail={this.state} />
        );
    }
}

export default productDetailScreen;