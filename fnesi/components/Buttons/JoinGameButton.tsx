import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import { RootStackParamList } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export default function JoinGameButton ( { }: StackScreenProps<RootStackParamList, 'NotFound'>){
    const navigation = useNavigation( );
    return (
        <TouchableOpacity onPress={() => navigation.navigate('GameMenu')} >
            <View style={styles.joinButton}>
                <Text style={styles.buttonText}>Rejoindre une partie</Text>
            </View>
        </TouchableOpacity>
    )
}




const  styles = StyleSheet.create({
    joinButton: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#1D6E72',
        marginHorizontal: 40,
        marginBottom: 30,
        borderBottomColor: '#195E61',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#195E61',
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
