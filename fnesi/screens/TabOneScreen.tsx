import * as React from 'react';
import {
  Alert,
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  Text,
  TextInput,
  TouchableOpacity, Image, Platform
} from 'react-native';
import { View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import PlayButton from "../components/Buttons/PlayButton";
import CreateGameButton from "../components/Buttons/CreateGame";
import QuickGameButton from "../components/Buttons/QuickGameButton";
import Burger from '../components/Burger';
import {useState} from 'react';
import url from '../env/variableUrl';
import JoinGameButton from '../components/Buttons/JoinGameButton';


export default function TabOneScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pseudo, setPseudo] = useState('');
  const [code, setCode] = useState('');
  const [password, setMdp] = useState('');
  const navigation = useNavigation( );

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

                  navigation.navigate("Room" , {password: password, code : result.id , pseudo : pseudo , response : result})
                }
              }
          )
    }
  }

  return (

      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <Burger navigation/>
          <View style={styles.image}>
            <Image style={styles.logo} source={require("../assets/images/FNESI.png")}></Image>
          </View>
          <PlayButton />
          <CreateGameButton />

          <JoinGameButton/>

          <QuickGameButton />

        </View>

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
    backgroundColor: '#2fb7bd'
  },
  view: {
    marginTop: 50,
    flex: 1,
  },
  button: {

  },
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
    backgroundColor: '#1D6E72',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  }
});

