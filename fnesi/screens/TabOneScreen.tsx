import * as React from 'react';
import {Button, Image, SafeAreaView, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {useState} from 'react';
import Chat from '../components/Chat';


export default function TabOneScreen() {

  const [shouldShow, setShouldShow] = useState(true);
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator } lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'press-2-start'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
