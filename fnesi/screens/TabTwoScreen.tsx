import * as React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, Image, Button} from 'react-native';
import {Text, View} from '../components/Themed';
import {useState} from 'react';
import Chat from '../components/Chat';
import {Ionicons} from '@expo/vector-icons';



export default function TabTwoScreen() {

    const code = 'OIFHEQ';
    const Pseudo = "Pseudo";
    const buttonReady = "Prêt    ";
    const buttonPlay = "Jouer   ";
    const isHost = true;
    const [pret , SetPret] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [shouldShow, setShouldShow] = useState(false);


  return (


      <View style={styles.container}>

      <Text style={styles.title} >{Pseudo} 3</Text>
      <Text style={styles.code} >Code :  {code}</Text>
          <Text style={styles.pseudo}>Theme choisi :  </Text>
          <Text style={styles.pseudo}>Niveau choisi :  </Text>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <TouchableOpacity onPress={() => SetPret(isHost ? true : !pret)}>
              <View style={pret ? styles.buttonPret : styles.button }>
                  <Text style={styles.buttonText}>{isHost ? buttonPlay : buttonReady}</Text>
              </View>

          </TouchableOpacity>
          <SafeAreaView  style={styles.pseudoContainer }>
              <Text style={styles.pseudo}>{Pseudo}1</Text>
              <Text style={styles.pseudo}>{Pseudo}2</Text>
              <Text style={styles.pseudo}>{Pseudo}3</Text>
              <Text style={styles.pseudo}>{Pseudo}4</Text>
              <Text style={styles.pseudo}>{Pseudo}5</Text>
              <Text style={styles.pseudo}>{Pseudo}6</Text>

          </SafeAreaView >
          <Ionicons style={styles.openbutton} onPress={() => setShouldShow(!shouldShow) } name="md-chatbox" size={50} color="black" />

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
        borderWidth: 4,
        borderRadius: 6,
        marginTop: 20,
        width: '100%',
        height: '33%',

    },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 50
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  code: {
    fontSize: 20,
    fontWeight: 'bold',
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
    },
button: {
    borderRadius: 8,
    paddingVertical: 20,
    backgroundColor: '#ff0400',
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
},

pseudo : {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8 ,
    marginLeft: 8 ,
}

});
