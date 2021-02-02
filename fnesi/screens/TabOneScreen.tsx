import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image, TouchableOpacity, Text
} from 'react-native';
import { View } from '../components/Themed';
import PlayButton from "../components/Buttons/PlayButton";
import CreateGameButton from "../components/Buttons/CreateGame";
import QuickGameButton from "../components/Buttons/QuickGameButton";
import Burger from '../components/Burger';
import JoinGameButton from '../components/Buttons/JoinGameButton';
import url from '../env/variableUrl';
import {useState} from 'react';


export default function TabOneScreen() {
  const [connected , SetConnected] = useState(false)

  fetch("http://"+ url + ":8080")
      .then(res =>{
  if (res.status === 200) {
    console.log('serveur OK');
    SetConnected(true)
  }})
      .catch(e =>{ SetConnected(false); alert('vous n\'êtes pas connecté' )});


    const ButtonConected = () => (
        <View>
          <CreateGameButton/>

          <JoinGameButton/>

          <QuickGameButton/>
        </View>
    );
    const ButtonDisConected = () => (
        <View>
          <TouchableOpacity onPress={() => alert('vous n\'êtes pas connecté')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Creer une partie</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('vous n\'êtes pas connecté')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Rejoindre une partie</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('vous n\'êtes pas connecté ou les serveurs sont en maintenance')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Partie rapide</Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  return (

      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <Burger navigation/>
          <View style={styles.image}>
            <Image style={styles.logo} source={require("../assets/images/FNESI.png")}></Image>
          </View>
          <PlayButton />
          <View>
            {
              connected ?  <ButtonConected/> : <ButtonDisConected/>
            }</View>
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
    borderRadius: 8,
    paddingVertical: 20,
    backgroundColor: '#373737',
    marginHorizontal: 40,
    marginBottom: 30,
    borderBottomColor: '#092023',
    borderBottomWidth: 5,
    borderEndWidth: 5,
    borderEndColor: '#090909',
    borderBottomLeftRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: 'center',
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
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  }
});

