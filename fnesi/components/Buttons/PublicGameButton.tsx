import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import { RootStackParamList } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';


export default function PublicGameButton ( { }: StackScreenProps<RootStackParamList, 'NotFound'>){
    const navigation = useNavigation( );



    return (
        <TouchableOpacity onPress={() =>   navigation.navigate("Param", {publicRoom : true})}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Public</Text>
            </View>
        </TouchableOpacity>
    )
}



const  styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#258D93',
        marginHorizontal: 40,
        marginBottom: '10%',
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
        fontSize: 16,
        textAlign: 'center',
    }
});
