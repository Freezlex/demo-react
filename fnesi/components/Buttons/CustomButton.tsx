import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

export default function CustomButton({ text, onPress }){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const  styles = StyleSheet.create({
    button: {
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'press-2-start',
    }
});