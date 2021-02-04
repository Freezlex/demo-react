import * as React from 'react';
import {SafeAreaView,StyleSheet,Text,Image,Animated,View,TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRef, useEffect } from 'react';
import { RootStackParamList } from './../types';
import { StackScreenProps } from '@react-navigation/stack';



export default function Pub({}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const navigation = useNavigation();
  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {toValue: 1,duration: 5000,useNativeDriver:false,}
      ).start();
    }, [fadeAnim])
  
    return (
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}
      >
        {props.children}
      </Animated.View>
    );
  }

 
  return (

      <SafeAreaView style={styles.container}>
          <FadeInView style={{zIndex:10}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.echap}>+</Text>
          </TouchableOpacity>
          </FadeInView>
          <View style={styles.containerPub}>
          <Image style={styles.Pub} source={require("../assets/images/Pub/raid-shadow-legends-no.jpeg")}></Image>
          </View>
      </SafeAreaView>
    
  );
}

// taillePubCarre = '50%',
// taillePub = 200,

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2fb7bd',
    },
    echap: {
        position: 'absolute',
        top: 25,
        right: 25,
        color: 'white',
        fontSize:30,
        transform: [{ rotate: "45deg" }],
    },
    Pub: {
      width: '100%',
      height: '50%',
    },
    containerPub: {
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      height:'100%',
    },
});