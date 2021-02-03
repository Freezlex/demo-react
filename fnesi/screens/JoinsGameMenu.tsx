import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    FlatList
} from 'react-native';
import { View } from '../components/Themed';
import {useEffect, useState} from 'react';
import { RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';
import url from '../env/variableUrl';

export default function JoinsGameMenu ( { }: StackScreenProps<RootStackParamList, 'NotFound'>){

    const navigation = useNavigation( );
    const [initialElements] = useState([
    ]);
    const [idx, incr] = useState(2);
    const [value,onChangeText] = useState('');
    let addElement: () => void;
    const [pseudo, setPseudo] = useState('Player');
    const [code, setCode] = useState('');
    const [password, setMdp] = useState('');
    let [listRoom, setListe ] = useState([{id : 1 , players : [] , password :''}]) ;
    const [Parm , getParam] = useState(false)
    const [selectedId, setSelectedId] = useState(null);

    addElement = () => {
        incr(idx + 1);
        let newArray = [...initialElements, {id: idx, text: value}];
    };

    function valide(pseudo , password , code) {
        if (pseudo === ''|| password === '' ) {
            console.log(pseudo , password , code)
        } else {

            fetch("http://"+ url + ":8080/room/join/" + password)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result);
                        if (result.password === password) {

                            navigation.navigate("Room" , {password: password, code : result.id , pseudo : pseudo , response : result , isHost : false})
                        }
                    }
                )
        }
    }


    useEffect(

        function getAllPublicRoom()  {if(!Parm) {
         fetch("http://"+ url +":8080/room/get-public/5")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                setListe(result)
                getParam(true)

            }
        )
    }} );

    const Item = ({ id, players , password , result}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Room', {password: password, code : id , pseudo : pseudo , response : result})} >
            <View style={styles.viewContainer}>
                <Text style={styles.text_left}>Partie {id}</Text>
                <Text style={styles.text}> {players}/6 joueurs</Text>
            </View>
        </TouchableOpacity>
    );
    const renderItem = ({ item }) => (
        <Item id={item.id}  players={item.players.length} password={item.password} result = {item} />
    );
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titreCenter}>
                <Text style={styles.title}>Selectionner une parti</Text>
            </View>
            <View style={styles.textAlign}>
                <Text style={styles.titleSecondaire}>Public</Text>
            </View>
            <View style={styles.textAlign}>
                <View style={styles.border}>
                    <FlatList
                        data={listRoom}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
            <View style={styles.textAlign}>
                <Text style={styles.titleSecondaire}>Rejoindre une partie Privé</Text>
                <TextInput
                    style={styles.buttonText}
                    placeholder="Pseudo"
                    onChangeText={pseudo => setPseudo(pseudo)}
                    defaultValue={pseudo}
                />

                <TextInput
                    style={styles.buttonText}
                    placeholder="Mot de passe"
                    onChangeText={mdp => setMdp(mdp)}
                    defaultValue={password}
                />
                <Text  onPress={() => { valide(pseudo , password , code);
                }}><EvilIcons name = "sc-telegram" size = {40} color = "white" /></Text>
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
        fontFamily: 'press-2-start',
    },
    titleSecondaire: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'press-2-start',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        margin: 10,
    },
    text_left: {
        fontWeight: 'bold',
        margin: 10,
        color: '#fff',
        fontSize: 20,
        flex: 1.5,

    },
    viewContainer:{
        flexDirection: 'row',
        borderColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        margin:5,
    },
    textAlign: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#28537D',
        marginHorizontal: 120,
        marginBottom: 30,
        borderBottomColor: '#1e3c5a',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#1e3c5a',
        borderBottomLeftRadius: 3,

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'press-2-start'
    },
    border:{
        borderColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        width: '80%',
        margin:20,
    },
});
