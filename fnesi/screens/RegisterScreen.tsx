import React, {Component, useState} from 'react';
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Button, TextInput, Modal, Picker } from 'react-native';
import { View } from '../components/Themed';
import Burger from '../components/Burger';
import {AntDesign, Ionicons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import url from '../env/variableUrl'


export default function RegisterScreen() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(1);
    const [university, setuniversity] = useState(1);
    const [isConnected, setIsConnected] = useState(false);

    function PostLogin(){


        fetch("http://"+ url +":8080/user/new", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                university: university
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
    }

    return (
        <View style={styles.container}>

            <Text style={{
                color: 'white',
                marginTop: '-550px',
                position: "absolute",
                fontSize: 30,
                fontWeight: 'bold',
                textTransform: "uppercase",
            }}>S'enregistrer</Text>

            <View style={styles.inputView} >

                <TextInput
                    style={styles.inputText}
                    placeholder="Name..."
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setName(text)}
                />
            </View>
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
            <View>
                <Picker
                    style={{ height: 50, width: 100 }}
                    onValueChange={(number) => setuniversity(number)}>
                    <Picker.Item label="Semestre 1" value='1' />
                    <Picker.Item label="Semestre 2" value='2' />
                    <Picker.Item label="Semstre 3" value='3' />
                    <Picker.Item label="Semestre 4" value='4' />
                </Picker>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.forgot}>déjà un compte ?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={PostLogin} style={styles.loginBtn}
            >
                <Text style={styles.loginText}>S'ENREGISTRER</Text>
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
