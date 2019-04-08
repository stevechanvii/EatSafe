import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Content, Thumbnail, Text, Button, Badge, Body, ListItem } from 'native-base';

const productNotFound = (props) => (
    <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Icon name='comment-alert-outline' size={40} color={tintColor} />
        <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Barcode: {props.barcode}</Text>
        <Text style={{ color: "black", fontSize: 18 }}>Sorry, product not found</Text>
    </Container>
);

export default productNotFound;
