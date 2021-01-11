import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

export default function PrivateGameButton(){
    return(
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Priver</Text>
            </View>
        </TouchableOpacity>
    )
}

const  styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#2464A4',
        marginHorizontal: 40,
        marginBottom: 30,
        borderBottomColor: '#205183',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#205183',
        borderBottomLeftRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'press-2-start',
    }
});
