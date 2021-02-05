import React, {Component, useState} from 'react';
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Button, TextInput, Modal } from 'react-native';
import { View } from '../components/Themed';
import Burger from '../components/Burger';
import {AntDesign, Ionicons} from '@expo/vector-icons';


export default function ProfileScreen() {
    const [modalVisibleOne, setModalVisibleOne] = useState(false);
    const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
    const [modalVisibleThree, setModalVisibleThree] = useState(false);
    const [modalVisibleFour, setModalVisibleFour] = useState(false);

    const modalPseudo =(
    <Modal transparent={false}  visible={modalVisibleOne}>
        <View style={styles.modal}>
            <View style={styles.viewContainer}>
                <Text style={styles.text_left}>Pseudo : </Text>
                <Text style={styles.text}>Player</Text>
            </View>
            <View style={styles.viewContainer}>
                <TextInput placeholder='Nouveau Pseudo'  style={styles.text_left}></TextInput>
                    <TouchableOpacity onPress={() => {setModalVisibleOne(!modalVisibleOne);}}>
                        <Text style={styles.text}><AntDesign name="right" size={32} color="white"/></Text>
                    </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => {setModalVisibleOne(!modalVisibleOne);}}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Retour</Text>
            </View>
            </TouchableOpacity>
        </View>
    </Modal>
    );
    const modalNom =(
    <Modal transparent={false} visible={modalVisibleTwo}>
        <View style={styles.modal}>
            <View style={styles.viewContainer}>
                <Text style={styles.text_left}>Nom : </Text>
                <Text style={styles.text}>Bon</Text>
            </View>
            <View style={styles.viewContainer}>
                <TextInput placeholder='Nouveau Nom'  style={styles.text_left}></TextInput>
                    <TouchableOpacity onPress={() => {setModalVisibleTwo(!modalVisibleTwo);}}>
                        <Text style={styles.text}><AntDesign name="right" size={32} color="white"/></Text>
                    </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => {setModalVisibleTwo(!modalVisibleTwo);}}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Retour</Text>
            </View>
            </TouchableOpacity>
        </View>
    </Modal>
    );
    const modalPrenom =(
    <Modal transparent={false} visible={modalVisibleThree}>
        <View style={styles.modal}>
            <View style={styles.viewContainer}>
                <Text style={styles.text_left}>Prénom : </Text>
                <Text style={styles.text}>jean</Text>
            </View>
            <View style={styles.viewContainer}>
                <TextInput placeholder='Nouveau Prénom'  style={styles.text_left}></TextInput>
                    <TouchableOpacity onPress={() => {setModalVisibleThree(!modalVisibleThree);}}>
                        <Text style={styles.text}><AntDesign name="right" size={32} color="white"/></Text>
                    </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => {setModalVisibleThree(!modalVisibleThree);}}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Retour</Text>
            </View>
            </TouchableOpacity>
        </View>
    </Modal>
    );
    const modalIfsi =(
    <Modal transparent={false} visible={modalVisibleFour}>
        <View style={styles.modal}>
            <View style={styles.viewContainer}>
                <Text style={styles.text_left}>Ifsi : </Text>
                <Text style={styles.text}>Pitié-Salpétrière AP-HP</Text>
            </View>
            <View style={styles.viewContainer}>
                <TextInput placeholder='Nouvel Ifsi'  style={styles.text_left}></TextInput>
                    <TouchableOpacity onPress={() => {setModalVisibleFour(!modalVisibleFour);}}>
                        <Text style={styles.text}><AntDesign name="right" size={32} color="white"/></Text>
                    </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => {setModalVisibleFour(!modalVisibleFour);}}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Retour</Text>
            </View>
            </TouchableOpacity>
        </View>
    </Modal>
    );

    return (
        <SafeAreaView style={styles.container}>
        {modalPseudo}
        {modalNom}
        {modalPrenom}
        {modalIfsi}
            <View style={styles.view}>
                <Burger navigation></Burger>
            </View>
            <View style={styles.center}>
                <Image style={styles.logo} source={require("../assets/images/person.png")}></Image>
            <View style={styles.viewContainer}>
                    <Text style={styles.text_left}>Pseudo : </Text>
                    <Text style={styles.text}>Player</Text>
                        <TouchableOpacity onPress={() => {setModalVisibleOne(true);}}>
                            <Text style={styles.text}><AntDesign name="right" size={32} color="white"/></Text>
                        </TouchableOpacity>
            </View>
            <View style={styles.viewContainer}>
                    <Text style={styles.text_left}>Nom : </Text>
                    <Text style={styles.text}>Bon</Text>
                        <TouchableOpacity onPress={() => {setModalVisibleTwo(true);}}>
                            <Text style={styles.text}><AntDesign name="right" size={32} color="white"/></Text>
                        </TouchableOpacity>
            </View>
            <View style={styles.viewContainer}>
                    <Text style={styles.text_left}>Prénom : </Text>
                    <Text style={styles.text}>jean</Text>
                        <TouchableOpacity onPress={() => {setModalVisibleThree(true);}}>
                            <Text style={styles.text}><AntDesign name="right" size={32} color="white"/></Text>
                        </TouchableOpacity>
            </View>
            <View style={styles.viewContainer}>
                    <Text style={styles.text_left}>Ifsi : </Text>
                    <Text style={styles.text}>Pitié-Salpétrière AP-HP</Text>
                        <TouchableOpacity onPress={() => {setModalVisibleFour(true);}}>
                            <Text style={styles.text}><AntDesign name="right" size={32} color="white"/></Text>
                        </TouchableOpacity>
            </View>
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
    textButton:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: '#258D93',
    },
    container: {
        flex: 1,
        height: 500,
        backgroundColor: '#2fb7bd'
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
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#258D93',
        marginHorizontal: 40,
        marginBottom: '10%',
        borderBottomColor: '#217D82',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#217D82',
        borderBottomLeftRadius: 3,
        paddingLeft:10,
        paddingRight:10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: 'center',
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
