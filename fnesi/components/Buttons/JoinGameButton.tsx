import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import { RootStackParamList } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export default function JoinGameButton ( { }: StackScreenProps<RootStackParamList, 'NotFound'>){
    const navigation = useNavigation( );
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Room')} >
            <View style={styles.button}>
                <Text style={styles.buttonText}>Rejoindre une partie</Text>
            </View>
        </TouchableOpacity>
    )
}




const  styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#299DA3',
        marginHorizontal: 40,
        marginBottom: 30,
        borderBottomColor: '#258D93',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#258D93',
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
