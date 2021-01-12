import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { View } from '../components/Themed';
import Background from "./Background";
import PlayButton from "../components/Buttons/Play";
import CreateGameButton from "../components/Buttons/CreateGame";
import JoinGameButton from "../components/Buttons/JoinGame";
import QuickGameButton from "../components/Buttons/QuickGame";
import Burger from '../components/Burger';


export default function TabOneScreen() {
  return (

      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <Burger navigation/>
          <PlayButton />
          <CreateGameButton />
          <JoinGameButton />
          <QuickGameButton />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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

