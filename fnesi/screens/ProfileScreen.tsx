import * as React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Button } from 'react-native';
import { View } from '../components/Themed';
import Background from "./Background";
import Burger from '../components/Burger';
import {AntDesign, Ionicons} from '@expo/vector-icons';


export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Burger navigation></Burger>
            </View>
            <View style={styles.center}>
                <Image style={styles.logo} source={require("../assets/images/person.png")}></Image>
            <View style={styles.viewContainer}>
                    <Text style={styles.text_left}>Pseudo : </Text>
                    <Text style={styles.text}>Player</Text>
                    <Text style={styles.text}><AntDesign name="right" size={32} color="white"/></Text>
            </View>
            <View style={styles.viewContainer}>
                    <Text style={styles.text_left}>Nom : </Text>
                    <Text style={styles.text}>Bon</Text>
                    <Text style={styles.text}><AntDesign name="right" size={32} color="white"/></Text>
            </View>
            <View style={styles.viewContainer}>
                    <Text style={styles.text_left}>Prénom : </Text>
                    <Text style={styles.text}>jean</Text>
                    <Text style={styles.text}><AntDesign name="right" size={32} color="white"/></Text>
            </View>
            <View style={styles.viewContainer}>
                    <Text style={styles.text_left}>Ifsi : </Text>
                    <Text style={styles.text}>Pitié-Salpétrière AP-HP</Text>
                    <Text style={styles.text}><AntDesign name="right" size={32} color="white"/></Text>
            </View>
            <Text style={styles.text}>Se déconnecter</Text>
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
    center: {
        alignItems: "center",
        textAlign: "center",
        alignContent: "center"
    },
    view: {
        marginTop: 50,
    },
    logo: {
        width: 100,
        height: 100,
        alignContent: 'center',
    },
    viewContainer:{
        flexDirection: 'row',
        margin:5,
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
});
