import React, { useState } from "react";
import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const DATA = [
    {
        question: "Que signifie le terme : asthénie ?",
        answers: [
            { id: "1", text: "Rotule"   },
            { id: "2", text: "Saignement du nez"  },
            { id: "3", text: "Saignement de l'oreille"  },
            { id: "4", text: "Fatigue", correct: true }
        ]
    },
    {
        question: "Qui est le meilleur dev",
        answers: [
            { id: "1", text: "Nathan"  },
            { id: "2", text: "Julien"  },
            { id: "3", text: "Justin Trudo"},
            { id: "4", text: "Florian ", correct: true}
        ]
    },
    {
        question: "Question 3",
        answers: [
            { id: "1", text: "Reponse 1" },
            { id: "2", text: "Reponse 2"  },
            { id: "3", text: "Reponse 3"  },
            { id: "4", text: "Reponse 4", correct: true  }
        ]
    },
    {
        question: "Question 4",
        answers: [
            { id: "1", text: "Mais oui c'est clair" },
            { id: "2", text: "La dynamisme des sport" },
            { id: "3", text: "Congolexicomatisation des lois du marché" },
            { id: "4", text: "La reponse D", correct: true }
        ]
    },
];





const QuestionsScreen = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [question , nextQuestion] = useState(0);
    const [valid , isValid] = useState(false);
    const [pause , enpause] = useState(false);
    const [points , addpoints] = useState(0)

    const renderItem = ({ item}) => {
        const backgroundColor = item.id === selectedId ? "#172f46" : "#295B8D";

        function validAnswer(id , correct) {
            setSelectedId(id)
            if (correct){
                isValid(true);
            }
            else {
                isValid(false);
            }
        }


        return (
            <Item
                item={item}
                onPress={() =>validAnswer(item.id , item.correct) }
                style={{ backgroundColor }}
            />
        );
    };

    const Item = ({ item, onPress , style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.button , pause ?  item.correct ? {backgroundColor: "#168d20"} : {backgroundColor:"#8d0700"} : style ]}>
            <Text style={styles.buttonText}>{item.text}</Text>
        </TouchableOpacity>
    );

    function validate() {
        if (valid){
            console.log("Bravo GG");
            addpoints(points +1);
            enpause(true);
            setSelectedId(null)
        }
        else {
            console.log('ahah la loose');
            enpause(true);
            setSelectedId(null)
        }
    }

    function continuer() {
        nextQuestion(question + 1)
        enpause(false);
    }

    return (

        <SafeAreaView style={styles.container}>

            <View>

                <Text style={styles.title}>Q{question + 1} {DATA[question].question}</Text>

                <FlatList
                    data={DATA[question].answers}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                />

            </View>
            <TouchableOpacity onPress={pause ? continuer : validate}  style={[styles.buttonNext ]}>
                <Text style={styles.buttonText}>{pause ? "Continuer" : "Valider"  }</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    view: {
        marginTop: 50,
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#6F9FCE'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        textAlign:'center',
        color:'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        marginBottom:15,
    },
    question: {
        fontSize: 20,
        textAlign:'center',
        color:'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        marginBottom: 15,
    },
    response: {
        fontSize: 32,
    },
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#295B8D',
        marginHorizontal: 40,
        marginBottom: 20,
        borderBottomColor: '#274e75',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#274e75',
        borderBottomLeftRadius: 3,
    },
    buttonNext: {
        borderRadius: 8,
        paddingVertical: 20,
        backgroundColor: '#295b8d',
        marginHorizontal: 170,
        marginBottom: 20,
        borderBottomColor: '#274e75',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#274e75',
        borderBottomLeftRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'press-2-start',
    },

});

export default QuestionsScreen;
