import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PlayButton (){
    const navigation = useNavigation( );
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Param',{publicRoom : true , local : true})} >
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
        backgroundColor: '#258D93',
        marginHorizontal: 20,
        marginBottom: 30,
        borderBottomColor: '#217D82',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#217D82',
        borderBottomLeftRadius: 3,

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 25,
        textAlign: 'center',
    }
});
