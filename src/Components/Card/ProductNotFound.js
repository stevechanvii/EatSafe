import React from 'react';

import { Text, View } from 'react-native';

const productNotFound = (props) => (
    <View>
        <Text>Barcode: {props.barcode}</Text>
        <Text>Product Not Found</Text>
    </View>
);

export default productNotFound;
