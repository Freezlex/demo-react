import * as React from 'react';
import {useState} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity , TextInput} from 'react-native';
import {Text, View} from '../components/Themed';
import Chat from '../components/Chat';
import {AntDesign, Ionicons} from '@expo/vector-icons';

import Burger from '../components/Burger';
import {useRoute} from '@react-navigation/native';
import {Stomp} from '@stomp/stompjs';


export default function RoomScreen() {

    const buttonReady = 'Prêt    ';
    const buttonPlay = 'Jouer   ';
    const route = useRoute();
    const {password} = route.params;
    const {isHost} = route.params;
    const {code} = route.params;
    const {pseudo} = route.params;
    const {modSansCorrection} = route.params
    const [pret, SetPret] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [shouldShow, setShouldShow] = useState(false);
    const player = {
        palyerName: pseudo,
        roomId: code
    };
    console.log('player name' + player.palyerName, 'roomId' + code, 'code :' + code  , 'host' + isHost);

    const url = "ws://localhost:8080/ws-fnesi/websocket";
    const client = Stomp.client(url);
    const connectCallback = function() {
        console.log('Bonjour')
    };
    client.connect({},  connectCallback);
    const callback = function(message) {
        // called when the client receives a STOMP message from the server
        if (message.body) {
            alert("got message with body " + message.body)
        } else {
            alert("got empty message");
        }
    };
    function sub()
    {
        client.send("/room/" + code + "/handle-players", { palyerName: pseudo,roomId: code})
        client.subscribe("/topic/room/" + code+ "/handle-players", callback);
    }


    //var sock = new SockJS("/topic/room/" + code +  "/handle-players");
    //sock.onopen = function () {
    //    console.log('open');
    //    sock.send(player);
    //};

    return (

        <View style={styles.container}>
            <Burger navigation={'Home'}/>

            <Text style={styles.title}>{pseudo} 3</Text>
            <Text style={styles.code}>Code : {code}</Text>

            <Text style={styles.code}>Mode  {modSansCorrection ? "sans corretion" : " avec correction"}</Text>
            <Text style={styles.code}>Mot de passe : {password}</Text>
            <Text style={styles.pseudo}>Theme choisi : </Text>
            <Text style={styles.pseudo}>Niveau choisi : </Text>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <TouchableOpacity onPress={() => SetPret(isHost ? true : !pret)}>
                <View style={pret ? styles.buttonPret : styles.button }>
                    <Text style={styles.buttonText}>{isHost ? buttonPlay : buttonReady}</Text>
                </View>

            </TouchableOpacity>
            <SafeAreaView  style={styles.pseudoContainer }>

            </SafeAreaView >
            <Ionicons style={styles.openbutton} onPress={sub } name="md-chatbox" size={50} color="black"/>

            {/*Here we will return the view when state is true
        and will return false if state is false*/}
            {shouldShow ? (
                <Chat/>
            ) : null}


        </View>


    );
}


const styles = StyleSheet.create({
    pseudoContainer : {
        borderTopWidth: 1,
        borderTopColor: 'white',
        alignItems: 'center',
        marginHorizontal: '10%',

    },
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',

    },
    separator: {
        marginBottom: 30,
        marginTop: 15,
        height: 1,
        alignItems: 'center',
        marginHorizontal: '10%',
    },
    code: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    openbutton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        color: 'white',
        marginTop: '15%',
    },
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#ff0400',
        marginHorizontal: 40,
        marginBottom: 30,
        borderBottomColor: '#75160c',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#750e03',
        borderBottomLeftRadius: 3,
    },
    buttonPret: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#295B8D',
        marginHorizontal: 40,
        marginBottom: 30,
        borderBottomColor: '#274e75',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#274e75',
        borderBottomLeftRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 20,
        textAlign: 'center',
        fontFamily:'press-2-start',
        marginLeft: 30,
    },

    pseudo : {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 8,
        marginLeft: 8,
        textAlign: 'center',
    },
    view: {
        backgroundColor: '#4877a5',
        textAlign: 'center',
        borderRadius: 8,
        marginHorizontal: '10%',
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8 ,
        marginLeft: 8 ,
        textAlign: 'center',
        paddingBottom: 5,

    },
    viewTchat: {
        position: 'absolute',
        bottom: 0,
        width: '98%',
        marginHorizontal: '1%',
        flexDirection: 'row',
        marginBottom: '1%',

    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 8,
        width: '88%',
    },
    icon: {
        marginLeft: '2%',
        marginTop: 3,
    },

});

