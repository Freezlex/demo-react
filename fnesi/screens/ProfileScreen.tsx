import * as React from 'react';
import {SafeAreaView, StyleSheet, Image, Text, Linking, TouchableOpacity} from 'react-native';
import { View } from '../components/Themed';
import Burger from '../components/Burger';


export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Burger navigation></Burger>
            </View>
            <View style={styles.center}>
                <Image style={styles.logo} source={require("../assets/images/person.png")}></Image>
                <Text style={styles.text}>Nom / Pseudo (Année)</Text>
                <Text style={styles.text}>Mes badges</Text>
                <Text style={styles.text}>Set de question joués récemment</Text>
                <TouchableOpacity style={styles.button}>
                    <View>
                        <Text style={styles.textButton}>Déconnexion</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2fb7bd',
    },
    center: {
        flex: 1,
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
        marginTop: 10,
        paddingBottom: 10,
        alignContent: 'center',
    },
    text: {
        marginTop: 20,
        fontSize: 16,
    },
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#258D93',
        paddingHorizontal: 50,
        marginTop: 20,
        borderBottomColor: '#217D82',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#217D82',
        borderBottomLeftRadius: 3,
    },
    textButton:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: '#258D93',
    },
});
