import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

export default function PlayButton(){
    return(
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Jouer</Text>
            </View>
        </TouchableOpacity>
    )
}

const  styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 30,
        backgroundColor: '#28537D',
        marginHorizontal: 20,
        marginBottom: 30,
        borderBottomColor: '#1e3c5a',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#1e3c5a',
        borderBottomLeftRadius: 3,

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
