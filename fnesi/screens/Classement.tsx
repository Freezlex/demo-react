import * as React from 'react';
import {SafeAreaView, StyleSheet, Systrace, Text, TouchableOpacity} from 'react-native';
import { View } from '../components/Themed';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Stomp} from '@stomp/stompjs';
import url from '../env/variableUrl';

/*
 * TODO : Import client for WebSocket
 */

export default function Classement() {
    const route = useRoute();
    const { points} = route.params;
    const { local} = route.params;
    const {questionRepondu} = route.params
    const navigation = useNavigation( );
    const {code} = route.params;
    const {playerName} = route.params;


    const callback = function(message) {
        console.log(JSON.parse( message.body , message));
        // called when the client receives a STOMP message from the server
        if (message.body) {
            console.log(JSON.parse( message.body) );

            console.log(JSON.parse( message.body , message));
        } else {
            alert("got empty message");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titreCenter}>
                <Text style={styles.title}>{local ? "Classement" : "Score " }</Text>
                <Text style={styles.title}>{code} {playerName}</Text>
            </View>
            <View style={styles.textAlign}>
                <Text style={styles.text}>1er Pseudo {points} Points</Text>
            </View>
            <View style={styles.view}>
                <TouchableOpacity onPress={() => navigation.navigate('Correction' , {questionRepondu : questionRepondu})}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Correction</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Continuer</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 500,
        backgroundColor: '#2fb7bd',
    },
    view: {
        position: 'absolute',
        bottom: 0,
        right: 1,
        left: 1,
    },
    titreCenter: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 30,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        margin: 10,
    },
    textAlign: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#258D93',
        marginHorizontal: 30,
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
