import React, {Component, useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Button, TextInput, Modal } from 'react-native';
import { View } from '../components/Themed';
import Burger from '../components/Burger';
import {AntDesign, Ionicons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import url from '../env/variableUrl'


export default function LoginScreen() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(1);
    const [isConnected, setIsConnected] = useState(false);


    function PostLogin(){

        fetch("http://"+ url +":8080/user/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(response => {
                setStatus(response.status)

            })

            .catch(error => {
                console.error(error);
            });
        if (status == 200){
            setIsConnected(true);
            navigation.navigate("Profile", {isConnected: true});
        }
        console.log(status);
    }



    return (

        <View style={styles.container}>
            <Image
                source={require('../assets/images/FNESI.PNG')}
            />

            <View style={styles.inputView} >

                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={PostLogin} style={styles.loginBtn}
            >
                <Text style={styles.loginText}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.forgot}>S'inscrire</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#2fb7bd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
    },
    inputView:{
        width:"80%",
        backgroundColor:"whitesmoke",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:'#2fb7bd'
    },
    forgot:{
        color:"white",
        fontSize:11
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"whitesmoke",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    loginText:{
        color: '#2fb7bd',
        fontWeight: 'bold',
        textTransform: "uppercase",
    },
    signUpText: {

        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
    }
});
