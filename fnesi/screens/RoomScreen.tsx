import * as React from 'react';
import {useState} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {Text, View} from '../components/Themed';
import Chat from '../components/Chat';
import {AntDesign, Ionicons} from '@expo/vector-icons';

import Burger from '../components/Burger';
import {useRoute} from '@react-navigation/native';
import {Stomp} from '@stomp/stompjs';

const url = "ws://localhost:8080/ws-fnesi/websocket";
const client = Stomp.client(url);

client.connect({},  async () => {
    console.log("Connecté au WS")
});

export default function RoomScreen() {

    const buttonReady = 'Prêt    ';
    const buttonPlay = 'Jouer   ';
    const route = useRoute();
    const {response} = route.params;
    const {password} = route.params;
    const {isHost} = route.params;
    const {code} = route.params;
    const {pseudo} = route.params;
    const {modSansCorrection} = route.params;
    const [pret, SetPret] = useState(false);
    const [shouldShow, setShouldShow] = useState(false);
    const [initialElements, changeEl] = useState([
    ]);
    const [value, onChangeText] = useState('');
    const [data, setExampleState] = useState(initialElements);
    const [idx, incr] = useState(2);
    const [sub , setSub] = useState(false)


    let addElement: () => void;
    addElement = () => {
        let newArray = [...initialElements, {id: idx, text: value}];
        incr(idx + 1);
        console.log(initialElements.length);
        setExampleState(newArray);
        changeEl(newArray);
        onChangeText('');


        client.send(`/app/room/${code}/chat`, {}, JSON.stringify({
            player: {
                playerName: pseudo,
                roomId: response.id
            },
            timestamp :Date.now(),
            message: value
        }))
    };

    const player = {
        palyerName: pseudo,
        roomId: code
    };
    const [listJoueur , upDatePlayer] = useState([{playerName : '' }]);

    console.log(listJoueur);

    const callback = function(message) {
        console.log(JSON.parse( message.body , message));
        // called when the client receives a STOMP message from the server
        if (message.body) {
            console.log(JSON.parse( message.body).response.players );

            console.log(JSON.parse( message.body , message));
            upDatePlayer(JSON.parse( message.body).response.players)
        } else {
            alert("got empty message");
        }
    };

    setTimeout(function subPlayer()
    {
        if( !sub ) {
            console.log("SUB TO SERVER TOPIC")
            client.subscribe("/topic/room/" + code + "/handle-players", callback);
            client.subscribe("/topic/room/" + code + "/game", async (res) => {
                console.log(JSON.parse(res.body))
            });

            if (!sub) {
                client.send(`/app/room/${code}/handle-players`, {}, JSON.stringify({
                    player: {
                        playerName: pseudo,
                        roomId: response.id
                    },
                    room: response
                }))
                setSub(true)
            }
        }
    }, 500);


    function Pret() {
        if (pret) {
            client.send(`/app/room/${code}/game`, {}, JSON.stringify({
                player: {
                    playerName: pseudo,
                    roomId: response.id
                },
                event:{
                    status: "PLAYER_UNREADY"
                },
            }))
            SetPret(false)
        } else {
            client.send(`/app/room/${code}/game`, {}, JSON.stringify({
                player: {
                    playerName: pseudo,
                    roomId: response.id
                },
                event: {
                    status: "PLAYER_READY"
                },
            }))
            SetPret(true)
        }
    }

    function subChat() {
        if (shouldShow) {
            setShouldShow(!shouldShow)
            client.subscribe("/topic/room/" + code + "/chat", async (res) => {
                console.log(res);
            });
        }
        else {
            setShouldShow(!shouldShow)
            client.unsubscribe("/topic/room/" + code + "/chat")
        }
    }

    function HostStart() {
        console.log('t es host tu vas rien faire ptot')
    }

    return (

        <View style={styles.container}>
            <Burger navigation={'Home'}/>

            <Text style={styles.title}>{pseudo}</Text>

            <Text style={styles.code}>Mode {modSansCorrection ? "sans corretion" : "avec correction"}</Text>
            <Text style={styles.code}>Mot de passe : {password}</Text>
            <Text style={styles.pseudo}>Theme choisi : </Text>
            <Text style={styles.pseudo}>Niveau choisi : </Text>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <TouchableOpacity onPress={() => isHost ? HostStart() : Pret()}>
                <View style={pret ? styles.buttonPret : styles.button }>
                    <Text style={styles.buttonText}>{isHost ? buttonPlay : buttonReady}</Text>
                </View>

            </TouchableOpacity>
            <SafeAreaView  style={styles.pseudoContainer }>
                <FlatList
                    data={listJoueur}
                    renderItem={({item}) => <Text style={styles.text}>{item.playerName}</Text>}
                />
            </SafeAreaView >
            <Ionicons style={styles.openbutton} onPress={() =>subChat() } name="md-chatbox" size={50} color="black"/>
            {shouldShow ? (

                <SafeAreaView style={styles.background}>
                    <View style={{backgroundColor: '#2e6294'}}>
                        <Text style={styles.text}>TCHAT</Text>
                        <FlatList
                            keyExtractor={item => item.id}
                            data={data}
                            renderItem={item => (<Text style={styles.title}>{item.item.text}</Text>)}/>
                    </View>
                    <View style={styles.viewChat}>
                        <View style={styles.input}>

                            <TextInput
                                onChangeText={text => onChangeText(text)}
                                value={value}
                            />
                        </View>

                        <View style={styles.icon}>

                            <AntDesign name="rightcircle" size={32} color="black"  onPress={addElement}/>

                        </View>
                    </View>

                </SafeAreaView>
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

