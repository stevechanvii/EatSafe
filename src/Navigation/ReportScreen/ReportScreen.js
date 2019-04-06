import React, { Component } from 'react';

// import { Text, View } from 'react-native';
import { Container, Header, Content, Accordion } from "native-base";


const dataArray = [
    { title: "First Element", content: "1 Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet" },
    { title: "Second Element", content: "2 Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet" },
    { title: "Third Element", content: "3 Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet" }
];

class reportScreen extends Component {
    render() {
        return (
            <Container>
                {/* <Header /> */}
                <Content padder>
                    <Accordion
                        dataArray={dataArray}
                        icon="add" 
                        expandedIcon="remove"
                        iconStyle={{ color: "green" }}
                        expandedIconStyle={{ color: "red" }}
                    />
                </Content>
            </Container>
        );
    }
}

export default reportScreen;