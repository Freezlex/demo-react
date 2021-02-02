import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import { RootStackParamList } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export default function CreateGameButton ( { }: StackScreenProps<RootStackParamList, 'NotFound'>){
    const navigation = useNavigation( );
    return (
        <TouchableOpacity onPress={() => navigation.navigate('P/P' , {local:false})} >
            <View style={styles.button}>
                <Text style={styles.buttonText}>Creer une partie</Text>
            </View>
        </TouchableOpacity>
    )
}




const  styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#217D82',
        marginHorizontal: 40,
        marginBottom: 30,
        borderBottomColor: '#1D6E72',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#1D6E72',
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
