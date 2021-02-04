import * as React from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import { View, Text, } from '../components/Themed';
import { Linking, TextInput } from 'react-native'
import {AntDesign, Ionicons} from '@expo/vector-icons';

export default function SuggestionScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.align}>
                <Text style={styles.titre}>Suggestion</Text>
            </View>
            <View>
                <View style={styles.center}>
                    <Text style={styles.text} >Suggestion de thème</Text>
                    <View style={styles.viewContainer}>
                        <TextInput style={styles.textInput} placeholder="Votre proposition"></TextInput>
                        <Text style={styles.icone}><AntDesign name="right" size={32} color="white"/></Text>
                    </View> 
                </View>
                <View  style={styles.center}>
                    <Text style={styles.text}>Suggestion de question</Text>
                    <View style={styles.viewContainer}>
                        <TextInput style={styles.textInput} placeholder="Votre proposition"></TextInput>
                        <Text style={styles.icone}><AntDesign name="right" size={32} color="white"/></Text>
                    </View> 
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2fb7bd',
        alignItems:'center',
    },
    align: {
        marginTop: 50,
        marginBottom: 40,
    },
    titre: {
        color:'white',
        fontWeight:'bold',
        fontSize:35,
    },
    text: {
        color:'white',
        fontWeight:'bold',
        fontSize:30,
    },
    center: {
        alignItems:'center',
    },
    textInput: {
        color: 'white',
        fontWeight: 'bold',
        textTransform:'uppercase',
        textAlign: 'center',
        fontSize: 25,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 25,
        textAlign: 'center',
    },
    viewContainer:{
        flexDirection: 'row',
        margin:5,
    },
    icone: {
        marginLeft:10,
    },
});
