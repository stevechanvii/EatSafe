import React from 'react';
import { Image, AsyncStorage } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, H2, Accordion } from 'native-base';
import UnderScoreToJSX from '../Format/UnderScoreToJSX';
import Icon from 'react-native-vector-icons/Feather';

function readData() {
    let keys = ['milk', 'soy', 'seafood'];
    let values = [];
    AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
            values.push(store[i][1]);
            console.log(store[i][1]);
        });
        console.log(values + '1111');
    });
    values.push('true');
    // alert('1 ' + values[0] + values.length);
    return values;
}

// let values = [];

// _retrieveData = async () => {
//     try {
//       const milk = await AsyncStorage.getItem('milk');
//       values.push(milk);
//       const soy = await AsyncStorage.getItem('soy');
//       values.push(soy);
//       const seafood = await AsyncStorage.getItem('seafood');
//       values.push(seafood);

//     } catch (error) {
//       // Error retrieving data
//     }
//   };

// this is a stateless component which handle show case with pic and text
const cardShowCase = (props) => {
    // _retrieveData();
    const allergenList = readData();
    // const allergenList = values;
    let personalAllergens = [];
    let keys = ['milk', 'soy', 'seafood'];
    allergenList.map((el, index) => {
        if (el) {
            if (el.toString() === 'true') {
                personalAllergens.push(keys[index]);
            }
        }
    });

    const productAllergens = props.productDetail.allergens.toString();
    // alert(personalAllergens[0]);
    let allergenIndex = [];
    personalAllergens.map((el, index) => {
        const i = productAllergens.search(el);
        if (i >= 0) {
            allergenIndex.push(index)
        }
    })

    if (allergenIndex.length > 0) {
        let str = '';
        for (i = 0; i < allergenIndex.length; i++) {
            str += keys[allergenIndex[i]];
            str += ' ';
        }
        alert(`Allergens ${str}detected!`);
    }

    values = [];

    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    return (
        <Container>
            {/* <Header /> */}
            <Content>
                <Card style={{ flex: 1 }}>
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
                        <Left>
                            <Button transparent >
                                <Icon name="alert-circle" size={16} color='red' />
                                <Text style={{ color: "black", fontSize: 16 }}>ALLERGENS</Text>
                            </Button>
                        </Left>
                        <Body style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text note style={{ color: "black", fontSize: 15 }}>{props.productDetail.allergens.toString().split(",").filter( onlyUnique ).join(",").replace(/en:/g,"").replace(/fr:/g,"")}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent >
                                <Icon name="alert-circle" size={16} color='red' />
                                <Text style={{ color: "black", fontSize: 15 }}>TRACES</Text>
                            </Button>
                        </Left>
                        <Body style={{ alignItems: 'center', justifyContent: 'center' }}> 
                            <Text note style={{ color: "black", fontSize: 15 }}>{props.productDetail.traces.toString().split(",").filter( onlyUnique ).join(",").replace(/en:/g,"").replace(/fr:/g,"")}</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Accordion
                    dataArray={[{ title: "Ingredients", content: <UnderScoreToJSX ingredients={props.productDetail.ingredients} /> }]}
                    icon="add"
                    expandedIcon="remove"
                    animation={true}
                />
            </Content>
        </Container>
    );
}


export default cardShowCase;