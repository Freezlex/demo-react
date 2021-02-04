import React, {Component, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, TouchableOpacity, Modal, TextInput} from 'react-native';
import { View, Text } from '../components/Themed';
import Burger from '../components/Burger';
import {AntDesign, Ionicons} from '@expo/vector-icons';

export default function ReglageScreen() {
    const [modalVisibleOne, setModalVisibleOne] = useState(false);

    const modalPseudo =(
        <Modal transparent={false}  visible={modalVisibleOne}>
            <View style={styles.modal}>
                <TouchableOpacity onPress={() => {setModalVisibleOne(!modalVisibleOne);}}>
                    <Text style={styles.Text}>Retour</Text>
                </TouchableOpacity>
            </View>
        </Modal>
        );

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Burger navigation />
                <View style={styles.align}>
                    {modalPseudo}
                    <Text style={styles.title}>Réglage</Text>
                    <View style={styles.viewContainer}>
                        <Text style={styles.text}>Enlever les pub</Text>
                            <TouchableOpacity onPress={() => {setModalVisibleOne(true);}}>
                                <Text style={styles.text}><AntDesign name="right" size={32} color="white"/></Text>
                            </TouchableOpacity>
                    </View>
                </View> 
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2fb7bd'
    },
    view: {
        marginTop: 50,
        flex: 1,
    },
    Text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        margin: 10,
    },
    align: {
        alignItems:'center',
        justifyContent:'center',
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
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        margin: 10,
    },
});

