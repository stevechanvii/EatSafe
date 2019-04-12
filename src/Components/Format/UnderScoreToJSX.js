import React from 'react';
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';

const underScoreToJSX = (props) => {
    let ingredients = '';
    props.ingredients.map(el => {
        ingredients += el.text.toString();
        ingredients += ', ';
    });

    ingredients = ingredients.replace(/_/g,' ').replace(/ +/g,' ').trim().slice(0, -1);

    return (
        <Text note style={{ color: "black", fontSize: 15 }}>{ingredients}</Text>
    );
}

export default underScoreToJSX;