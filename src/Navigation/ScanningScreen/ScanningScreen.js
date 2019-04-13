'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';

const PendingView = () => (
    <View
        style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text>Waiting</Text>
    </View>
);

export default class App extends Component {
    state = {
        barcode: null,
        showCamera: true
    };

    onBarCodeEvent = (event) => {
        this.setState({
            barcode: event.data,
            // showCamera: false
        });
        // alert(event.type + '  ' +event.data);
        this.props.navigation.navigate('ProductDetail', {
            barcodeType: event.type,
            barcode: event.data
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    captureAudio={false}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                    onBarCodeRead={this.state.showCamera ? this.onBarCodeEvent.bind(this) : null}
                    barCodeTypes={[
                        RNCamera.Constants.BarCodeType.aztec,
                        RNCamera.Constants.BarCodeType.code128,
                        RNCamera.Constants.BarCodeType.code39,
                        RNCamera.Constants.BarCodeType.code39mod43,
                        RNCamera.Constants.BarCodeType.code93,
                        RNCamera.Constants.BarCodeType.ean13,
                        RNCamera.Constants.BarCodeType.ean8,
                        RNCamera.Constants.BarCodeType.pdf417
                        ]}
                    >
                    <BarcodeMask width={300} height={100} />

                </RNCamera>
            </View>
        );
    }

    // takePicture = async function (camera) {
    //     const options = { quality: 0.5, base64: true };
    //     const data = await camera.takePictureAsync(options);
    //     //  eslint-disable-next-line
    //     console.log(data.uri);
    // };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});