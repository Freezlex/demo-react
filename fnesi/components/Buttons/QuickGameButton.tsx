import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

export default function QuickGameButton(){
    return(
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Partie rapide</Text>
            </View>
        </TouchableOpacity>
    )
}

const  styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#1F69B2',
        marginHorizontal: 40,
        marginBottom: 30,
        borderBottomColor: '#175694',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#175694',
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