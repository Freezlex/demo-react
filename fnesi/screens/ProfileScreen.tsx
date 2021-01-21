import * as React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Button } from 'react-native';
import { View } from '../components/Themed';
import Background from "./Background";
import Burger from '../components/Burger';


export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Burger navigation></Burger>
            </View>
            <View style={styles.center}>
                <Image style={styles.logo} source={require("../assets/images/person.png")}></Image>
                <Text>Nom / Pseudo (Année)</Text>
                <Text>Mes badges</Text>
                <Text>Thèmes joués récemment</Text>
                <Text>Se déconnecter</Text>
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
        height: 100
    }
});
