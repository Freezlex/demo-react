import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { View } from '../components/Themed';
import PlayButton from "./Buttons/Play";
import CreateGameButton from "./Buttons/CreateGame";
import JoinGameButton from "./Buttons/JoinGame";
import QuickGameButton from "./Buttons/QuickGame";

export default function TabOneScreen() {
  return (

      <SafeAreaView style={styles.container}>

      <View style={styles.view}>

        <PlayButton/>
        <CreateGameButton/>
        <JoinGameButton/>
        <QuickGameButton/>

      </View>

      </SafeAreaView>
  );
}

const  styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 500,
        backgroundColor: '#6F9FCE'
    },
    view: {
        marginTop: 50,
        flex: 1,
    },
});

