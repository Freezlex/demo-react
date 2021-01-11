import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { View } from '../components/Themed';

import EditScreenInfo from '../components/EditScreenInfo';
import PublicGameButton from "../components/Buttons/PublicGame";
import PrivateGameButton from "../components/Buttons/PrivateGame";

export default function TabThreeScreen() {
  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.view}>
   <PublicGameButton/>
   <PrivateGameButton/>

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
