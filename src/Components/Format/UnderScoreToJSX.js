import React from 'react';
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';

const underScoreToJSX = (props) => {
    let ingredients = '';
    props.ingredients.map(el => {
        ingredients += el.text.toString();
        ingredients += ', ';
    });

    return (
        <Text note>{ingredients}</Text>
    );
}

export default underScoreToJSX;