import * as React from 'react';
import {
  Alert,
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { View } from '../components/Themed';
import Background from "./Background";
import { useNavigation } from '@react-navigation/native';
import PlayButton from "../components/Buttons/PlayButton";
import CreateGameButton from "../components/Buttons/CreateGame";
import JoinGameButton from "../components/Buttons/JoinGameButton";
import QuickGameButton from "../components/Buttons/QuickGameButton";
import Burger from '../components/Burger';
import {useState} from 'react';


export default function TabOneScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pseudo, setPseudo] = useState('');
  const [code, setCode] = useState('');
  const [password, setMdp] = useState('');
  const navigation = useNavigation( );

  function valide(pseudo , password , code) {
    if (pseudo === ''|| password === '' ) {
      console.log('pas valide')
      console.log(pseudo , password , code)
    } else {

      fetch("http://localhost:8080/room/join/" + password)
          .then(res => res.json())
          .then(
              (result) => {
                console.log(result);
                if (result.password === password) {
                  navigation.navigate("Room" , {password: password, code : result.id , pseudo : pseudo})
                }
              }
          )
    }
  }

  return (

      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <Burger navigation/>
          <PlayButton />
          <CreateGameButton />
          <TouchableOpacity onPress={() => setModalVisible(true)} >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Rejoindre une partie</Text>
            </View>
          </TouchableOpacity>
          <QuickGameButton />

        </View>
          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text>Votre Pseudo</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Pseudo"
                    onChangeText={pseudo => setPseudo(pseudo)}
                    defaultValue={pseudo}
                />

                <Text >Mot de passe</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Mot de passe"
                    onChangeText={mdp => setMdp(mdp)}
                    defaultValue={password}
                />
                <TouchableHighlight
                    style={{ ...styles.button, backgroundColor: "#2196F3" }}
                    onPress={() => { valide(pseudo , password , code);
                    }}
                >
                  <Text>Valider</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={{ ...styles.button, backgroundColor: "#2196F3" }}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                >
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  container: {
    flex: 1,
    height: 500,
    backgroundColor: '#6F9FCE'
  },
  view: {
    marginTop: 50,
    flex: 1,
  },
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

