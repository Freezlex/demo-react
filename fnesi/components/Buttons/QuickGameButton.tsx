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
        backgroundColor: '#195E61',
        marginHorizontal: 40,
        marginBottom: 30,
        borderBottomColor: '#154E51',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#154E51',
        borderBottomLeftRadius: 3,

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: 'center',
    }
});
