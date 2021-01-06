import * as React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import { View } from '../components/Themed';

export default function Background() {
    return (

        <View>

            <ImageBackground style={styles.background} source={require('../assets/images/FnesiBackground.png')}/>

        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: 400,
        height: 300,
    },
})