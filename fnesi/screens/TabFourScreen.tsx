import React, {Component, useState} from 'react';
import {Modal, TouchableOpacity, Alert, StyleSheet, Picker, ScrollView} from 'react-native';
import {CheckBox} from 'react-native-elements'
import PlayButton from "../components/Buttons/Play"
import EditScreenInfo from "../components/EditScreenInfo";


import { Text, View } from '../components/Themed';



export default function TabFourScreen() {
    const [selectedValueTheme, setSelectedValueTheme] = useState("Pas de thème selectionné");
    const [selectedValueLevel, setSelectedValueLevel] = useState("Pas de level selectionné");

    const [modalVisibleOne, setModalVisibleOne] = useState(false);

    const [modalVisibleTwo, setModalVisibleTwo] = useState(false);

    const [checkBoxLevel1, setcheckBoxLevel1] = useState(false);
    const [checkBoxLevel2, setcheckBoxLevel2] = useState(false);
    const [checkBoxLevel3, setcheckBoxLevel3] = useState(false);
    const [checkBoxLevel4, setcheckBoxLevel4] = useState(false);
    const [checkBoxLevel5, setcheckBoxLevel5] = useState(false);
    const [checkBoxLevel6, setcheckBoxLevel6] = useState(false);
    const [checkBoxLevel7, setcheckBoxLevel7] = useState(false);

    const [checkBoxTheme1, setcheckBoxTheme1] = useState(false);
    const [checkBoxTheme2, setcheckBoxTheme2] = useState(false);
    const [checkBoxTheme3, setcheckBoxTheme3] = useState(false);
    const [checkBoxTheme4, setcheckBoxTheme4] = useState(false);
    const [checkBoxTheme5, setcheckBoxTheme5] = useState(false);
    const [checkBoxTheme6, setcheckBoxTheme6] = useState(false);
    const [checkBoxTheme7, setcheckBoxTheme7] = useState(false);



    const modalHeaderOne = (
        <View style={styles.modalHeader}>
            <Text style={styles.title}>Choisissez le(s) thème(s) de la partie</Text>
            <View style={styles.divider}></View>
        </View>
    )
    const modalHeaderTwo = (
        <View style={styles.modalHeader}>
            <Text style={styles.title}>Choisissez le(s) level(s) de la partie</Text>
            <View style={styles.divider}></View>
        </View>
    )
    const modalBodyOne = (
        <ScrollView style={styles.scrollView}>
            <View style={styles.modalBody}>
                <CheckBox
                    title='Thème 1'
                    checked={checkBoxTheme1}
                    onPress={() => {
                        setcheckBoxTheme1(!checkBoxTheme1);
                    }}/>
                <CheckBox
                    title='Thème 2'
                    checked={checkBoxTheme2}
                    onPress={() => {
                        setcheckBoxTheme2(!checkBoxTheme2);
                    }}/>
                <CheckBox
                    title='Thème 3'
                    checked={checkBoxTheme3}
                    onPress={() => {
                        setcheckBoxTheme3(!checkBoxTheme3);
                    }}/>
                <CheckBox
                    title='Thème 4'
                    checked={checkBoxTheme4}
                    onPress={() => {
                        setcheckBoxTheme4(!checkBoxTheme4);
                    }}/>
                <CheckBox
                    title='Thème 5'
                    checked={checkBoxTheme5}
                    onPress={() => {
                        setcheckBoxTheme5(!checkBoxTheme5);
                    }}/>
                <CheckBox
                    title='Thème 6'
                    checked={checkBoxTheme6}
                    onPress={() => {
                        setcheckBoxTheme6(!checkBoxTheme6);
                    }}/>
                <CheckBox
                    title='Thème 7'
                    checked={checkBoxTheme7}
                    onPress={() => {
                        setcheckBoxTheme7(!checkBoxTheme7);
                    }}/>


            </View>
        </ScrollView>
    )

    console.log(selectedValueTheme)

    const modalBodyTwo = (
        <ScrollView style={styles.scrollView}>
            <View style={styles.modalBody}>
                <CheckBox
                    title='Level 1'
                    value={checkBoxLevel1}
                    checked={checkBoxLevel1}
                    onPress={() => {
                        setcheckBoxLevel1(!checkBoxLevel1);
                    }}/>
                <CheckBox
                    title='Level 2'
                    checked={checkBoxLevel2}
                    onPress={() => {
                        setcheckBoxLevel2(!checkBoxLevel2);
                    }}/>
                <CheckBox
                    title='Level 3'
                    checked={checkBoxLevel3}
                    onPress={() => {
                        setcheckBoxLevel3(!checkBoxLevel3);
                    }}/>
                <CheckBox
                    title='Level 4'
                    checked={checkBoxLevel4}
                    onPress={() => {
                        setcheckBoxLevel4(!checkBoxLevel4);
                    }}/>
                <CheckBox
                    title='Level 5'
                    checked={checkBoxLevel5}
                    onPress={() => {
                        setcheckBoxLevel5(!checkBoxLevel5);
                    }}/>
                <CheckBox
                    title='Level 6'
                    checked={checkBoxLevel6}
                    onPress={() => {
                        setcheckBoxLevel6(!checkBoxLevel6);
                    }}/>
                <CheckBox
                    title='Level 7'
                    checked={checkBoxLevel7}
                    onPress={() => {
                        setcheckBoxLevel7(!checkBoxLevel7);
                    }}/>


            </View>
        </ScrollView>
    )

    console.log(selectedValueLevel)

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
                <TouchableOpacity style={{...styles.actions, backgroundColor: "#db2828"}}
                                  onPress={() => {
                                      setModalVisibleTwo(!modalVisibleTwo);
                                  }}>
                    <Text style={styles.actionText}>Annuler</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.actions, backgroundColor: "#21ba45"}}
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

    return (
        <View style={styles.container}>

            {modalOne}
            {modalTwo}
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    setModalVisibleOne(true);
                }}>
                <Text style={styles.buttonText}> Configurer la partie</Text>
            </TouchableOpacity>
            <Text style={styles.Selection}>
                Thème(s) choisis :
            </Text>
            <Text style={styles.ValueCheckBox}>
                {checkBoxTheme1 ? "Thème 1 " : ""}
                {checkBoxTheme2 ? "Thème 2 " : ""}
                {checkBoxTheme3 ? "Thème 3 " : ""}
                {checkBoxTheme4 ? "Thème 4 " : ""}
                {checkBoxTheme5 ? "Thème 5 " : ""}
                {checkBoxTheme6 ? "Thème 6 " : ""}
                {checkBoxTheme7 ? "Thème 7 " : ""}
            </Text>
            <Text style={styles.Selection}>
                Level(s) choisis :
            </Text>
            <Text style={styles.ValueCheckBox}>
                {checkBoxLevel1 ? "Level 1 " : ""}
                {checkBoxLevel2 ? "Level 2 " : ""}
                {checkBoxLevel3 ? "Level 3 " : ""}
                {checkBoxLevel4 ? "Level 4 " : ""}
                {checkBoxLevel5 ? "Level 5 " : ""}
                {checkBoxLevel6 ? "Level 6 " : ""}
                {checkBoxLevel7 ? "Level 7 " : ""}
            </Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <PlayButton/>
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
        color: "#2fb7bd",
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
        fontFamily: 'press-2-start',
        borderRadius: 5,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    actionText: {
        color: "#fff"
    },
    button: {
        width :'90%',
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#2464A4',
        marginHorizontal: 40,
        marginBottom: 30,
        borderBottomColor: '#205183',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#205183',
        borderBottomLeftRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'press-2-start',
    }
});
