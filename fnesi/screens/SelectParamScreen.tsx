import React, {Component, useState} from 'react';
import {Modal, TouchableOpacity, Alert, StyleSheet, ScrollView, TextInput, Platform} from 'react-native';
import {CheckBox} from 'react-native-elements'
import url from '../env/variableUrl'


import { Text, View } from '../components/Themed';
import {useNavigation, useRoute} from '@react-navigation/native';



export default function SelectParamScreen() {
    const route = useRoute();
    const{ local } = route.params;
    const{ publicRoom } = route.params;

    const [password,setPassword] = useState('');
    const [code,setCode] =useState('');
    const [pseudo,setPseudo] = useState('Host')


    const [selectedValueUE, setSelectedValueUE] = useState("Pas de thème selectionné");
    const [selectedValueSemestre, setSelectedValueSemestre] = useState("Pas de level selectionné");

    const [modalVisibleOne, setModalVisibleOne] = useState(false);

    const [modalVisibleTwo, setModalVisibleTwo] = useState(false);

    const [modSansCorrection, setmodSansCorrection] = useState(false);
    const [checkBoxSemestre1, setcheckBoxSemestre1] = useState(false);
    const [checkBoxSemestre2, setcheckBoxSemestre2] = useState(false);
    const [checkBoxSemestre3, setcheckBoxSemestre3] = useState(false);
    const [checkBoxSemestre4, setcheckBoxSemestre4] = useState(false);
    const [checkBoxSemestre5, setcheckBoxSemestre5] = useState(false);
    const [checkBoxSemestre6, setcheckBoxSemestre6] = useState(false);

    const [checkBoxUE1, setcheckBoxUE1] = useState(false);
    const [checkBoxUE2, setcheckBoxUE2] = useState(false);
    const [checkBoxUE3, setcheckBoxUE3] = useState(false);
    const [checkBoxUE4, setcheckBoxUE4] = useState(false);
    const [checkBoxUE5, setcheckBoxUE5] = useState(false);
    const [checkBoxUE6, setcheckBoxUE6] = useState(false);
    const [checkBoxUE7, setcheckBoxUE7] = useState(false);



    async function createRoom() {

        fetch("http://"+ url + ":8080/room/new?publicRoom=true",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "amount": 0,
                    "level": 0,
                    "publicRoom": publicRoom,
                    "set": 0,
                    "theme": [
                        0
                    ]
                })})
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setPassword(json.response.password);
                setCode(json.response.id);
                navigation.navigate("Room", {code:json.response.id,password:json.response.password,pseudo:pseudo,isHost:true ,modSansCorrection : modSansCorrection ,response : json.response})

            })
            .catch((error) => {
                console.error(error);
            });


    }

    const modalHeaderOne = (
        <View style={styles.modalHeader}>
            <Text style={styles.title}>Choisissez le(s) UE(s) de la partie</Text>
            <View style={styles.divider}></View>
        </View>
    )
    const modalHeaderTwo = (
        <View style={styles.modalHeader}>
            <Text style={styles.title}>Choisissez le(s) semestre(s) de la partie</Text>
            <View style={styles.divider}></View>
        </View>
    )
    const modalBodyOne = (
        <ScrollView style={styles.scrollView}>
            <View style={styles.modalBody}>
                <CheckBox
                    title='UE 1'
                    checked={checkBoxUE1}
                    onPress={() => {
                        setcheckBoxUE1(!checkBoxUE1);
                    }}/>
                <CheckBox
                    title='UE 2'
                    checked={checkBoxUE2}
                    onPress={() => {
                        setcheckBoxUE2(!checkBoxUE2);
                    }}/>
                <CheckBox
                    title='UE 3'
                    checked={checkBoxUE3}
                    onPress={() => {
                        setcheckBoxUE3(!checkBoxUE3);
                    }}/>
                <CheckBox
                    title='UE 4'
                    checked={checkBoxUE4}
                    onPress={() => {
                        setcheckBoxUE4(!checkBoxUE4);
                    }}/>
                <CheckBox
                    title='UE 5'
                    checked={checkBoxUE5}
                    onPress={() => {
                        setcheckBoxUE5(!checkBoxUE5);
                    }}/>
                <CheckBox
                    title='UE 6'
                    checked={checkBoxUE6}
                    onPress={() => {
                        setcheckBoxUE6(!checkBoxUE6);
                    }}/>
                <CheckBox
                    title='UE 7'
                    checked={checkBoxUE7}
                    onPress={() => {
                        setcheckBoxUE7(!checkBoxUE7);
                    }}/>


            </View>
        </ScrollView>
    )

    console.log(selectedValueUE)

    const modalBodyTwo = (
        <ScrollView style={styles.scrollView}>
            <View style={styles.modalBody}>
                <CheckBox
                    title='Semestre 1'
                    value={checkBoxSemestre1}
                    checked={checkBoxSemestre1}
                    onPress={() => {
                        setcheckBoxSemestre1(!checkBoxSemestre1);
                    }}/>
                <CheckBox
                    title='Semestre 2'
                    checked={checkBoxSemestre2}
                    onPress={() => {
                        setcheckBoxSemestre2(!checkBoxSemestre2);
                    }}/>
                <CheckBox
                    title='Semestre 3'
                    checked={checkBoxSemestre3}
                    onPress={() => {
                        setcheckBoxSemestre3(!checkBoxSemestre3);
                    }}/>
                <CheckBox
                    title='Semestre 4'
                    checked={checkBoxSemestre4}
                    onPress={() => {
                        setcheckBoxSemestre4(!checkBoxSemestre4);
                    }}/>
                <CheckBox
                    title='Semestre 5'
                    checked={checkBoxSemestre5}
                    onPress={() => {
                        setcheckBoxSemestre5(!checkBoxSemestre5);
                    }}/>
                <CheckBox
                    title='Semestre 6'
                    checked={checkBoxSemestre6}
                    onPress={() => {
                        setcheckBoxSemestre6(!checkBoxSemestre6);
                    }}/>



            </View>
        </ScrollView>
    )

    console.log(selectedValueSemestre);
    const modalFooterOne = (
        <View style={styles.modalFooter}>
            <View style={styles.divider}></View>
            <View style={{flexDirection: "row-reverse", margin: 10}}>
                <TouchableOpacity style={{...styles.actions, backgroundColor: "#db2828"}}
                                  onPress={() => {
                                      setModalVisibleOne(!modalVisibleOne);
                                  }}>
                    <Text style={styles.actionText}>Annuler</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.actions, backgroundColor: "#21ba45"}}
                                  onPress={() => {
                                      setModalVisibleOne(!modalVisibleOne);
                                      setModalVisibleTwo(true);
                                  }}>
                    <Text style={styles.actionText}>Confirmer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    const modalFooterTwo = (
        <View style={styles.modalFooter}>
            <View style={styles.divider}></View>
            <View style={{flexDirection: "row-reverse", margin: 10}}>
                <TouchableOpacity style={{...styles.actions, backgroundColor: "#8d0700"}}
                                  onPress={() => {
                                      setModalVisibleTwo(!modalVisibleTwo);
                                  }}>
                    <Text style={styles.actionText}>Annuler</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.actions, backgroundColor: "#028d05"}}
                                  onPress={() => {
                                      setModalVisibleTwo(!modalVisibleTwo);
                                  }}>
                    <Text style={styles.actionText}>Confirmer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    const modalContainerOne = (
        <View style={styles.modalContainer}>
            {modalHeaderOne}
            {modalBodyOne}
            {modalFooterOne}
        </View>
    )
    const modalContainerTwo = (
        <View style={styles.modalContainer}>
            {modalHeaderTwo}
            {modalBodyTwo}
            {modalFooterTwo}
        </View>
    )
    const modalOne = (
        <Modal
            transparent={false}
            visible={modalVisibleOne}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.modal}>
                <View>
                    {modalContainerOne}
                </View>
            </View>
        </Modal>
    )
    const modalTwo = (
        <Modal
            transparent={false}
            visible={modalVisibleTwo}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.modal}>
                <View>
                    {modalContainerTwo}
                </View>
            </View>
        </Modal>
    )

    const navigation = useNavigation( );
    return (
        <View style={styles.container}>

            {modalOne}
            {modalTwo}
            <TouchableOpacity
                onPress={() => {
                    setModalVisibleOne(true);
                }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}> Configurer la partie</Text>
                </View>
                
            </TouchableOpacity>
            <Text style={styles.Selection}>
                UE(s) choisis :
            </Text>
            <Text style={styles.ValueCheckBox}>
                {checkBoxUE1 ? "UE 1 " : ""}
                {checkBoxUE2 ? "UE 2 " : ""}
                {checkBoxUE3 ? "UE 3 " : ""}
                {checkBoxUE4 ? "UE 4 " : ""}
                {checkBoxUE5 ? "UE 5 " : ""}
                {checkBoxUE6 ? "UE 6 " : ""}
                {checkBoxUE7 ? "UE 7 " : ""}
            </Text>
            <Text style={styles.Selection}>
                Semestre(s) choisis :
            </Text>
            <Text style={styles.ValueCheckBox}>
                {checkBoxSemestre1 ? "Semestre 1 " : ""}
                {checkBoxSemestre2 ? "Semestre 2 " : ""}
                {checkBoxSemestre3 ? "Semestre 3 " : ""}
                {checkBoxSemestre4 ? "Semestre 4 " : ""}
                {checkBoxSemestre5 ? "Semestre 5 " : ""}
                {checkBoxSemestre6 ? "Semestre 6 " : ""}
            </Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <CheckBox
                title='Mode sans correction'
                value={modSansCorrection}
                checked={modSansCorrection}
                onPress={() => {
                    setmodSansCorrection(!modSansCorrection);
                }}/>

            <TouchableOpacity style={styles.startButton} onPress={() => local ? navigation.navigate("Question" , {modSansCorrection : modSansCorrection}) : createRoom()} >
                <View>
                    <Text style={styles.buttonText}>Jouer</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    ValueCheckBox:{
        fontWeight: "bold",
        fontSize: 13,
        color: "#000000",
    },
    scrollView: {
        height: '53%',
    },
    configGame: {
        fontWeight: "bold",
        fontSize: 25,
    },
    Selection: {
        fontWeight: "bold",
        fontSize: 18,
        color: "gray",
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        width: "80%",
        borderRadius: 5,
        marginTop: '30%'

    },
    modalHeader: {
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        padding: 15,
    },
    divider: {
        width: "100%",
        height: 1,
    },
    modalBody: {
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    modalFooter: {},
    actions: {
        borderRadius: 5,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    actionText: {
        color: "#fff"
    },
    configButton: {
        width :'80%',
        marginTop: 40,
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#258D93',
        marginBottom: 30,
        borderBottomColor: '#217D82',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#217D82',
        borderBottomLeftRadius: 3,
    },

    startButton: {
        width :'70%',
        marginTop: 40,
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#258D93',
        marginBottom: 30,
        borderBottomColor: '#217D82',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#217D82',
        borderBottomLeftRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: 'center',
        paddingLeft:10,
        paddingRight:10,
    },
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#217D82',
        marginHorizontal: 40,
        marginBottom: 30,
        borderBottomColor: '#1D6E72',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#1D6E72',
        borderBottomLeftRadius: 3,
    },
});
