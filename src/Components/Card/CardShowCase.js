import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, H2 } from 'native-base';
import UnderScoreToJSX from '../Format/UnderScoreToJSX';
import Icon from 'react-native-vector-icons/Feather';

// this is a stateless component which handle show case with pic and text
const cardShowCase = (props) => {
    return (
        <Container>
            {/* <Header /> */}
            <Content>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            {/* <Thumbnail source={{ uri: 'Image URL' }} /> */}
                            <Body>
                                <Text><H2>{props.productDetail.productName.toString()}</H2></Text>
                                <Text note>{props.productDetail.genericName.toString()}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image source={{ uri: props.productDetail.image.toString() }} style={{ height: 200, width: '100%', flex: 1 }} />
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>Ingredients: </Text>
                            <UnderScoreToJSX ingredients={props.productDetail.ingredients} />
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>Allergens warning</Text>
                            <Text note>{props.productDetail.allergens.toString()}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent >
                                <Icon name="alert-circle" size={25} color='red'/>
                                <Text>Allergen Found</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}

export default cardShowCase;