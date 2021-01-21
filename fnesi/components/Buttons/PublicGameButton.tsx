import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import { RootStackParamList } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';


export default function PublicGameButton ( { }: StackScreenProps<RootStackParamList, 'NotFound'>){
    const navigation = useNavigation( );

    const [password,setPassword] = useState('');
    const [code,setCode] =useState('');
    const [pseudo,setPseudo] = useState('Host')

    async function createRoom() {
         fetch("http://localhost:8080/room/new?publicRoom=true")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setPassword(json.password);
                setCode(json.id)
                navigation.navigate("Param", {
                    password: json.password,
                    code: json.id,
                    pseudo: pseudo,
                    publicRoom: true,
                    local: false,
                })

            })
            .catch((error) => {
                console.error(error);
            });


    }
    return (
        <TouchableOpacity onPress={() => createRoom()} >
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
