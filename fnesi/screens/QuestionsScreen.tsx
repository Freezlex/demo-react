import React, { useState } from "react";
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Animated,
    Dimensions
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

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
        question: "Que signifie le préfixe : brady?",
        answers: [
            { id: "1", text: "En dehors"  },
            { id: "2", text: "Lent" , correct: true },
            { id: "3", text: "A l'intérieur"},
            { id: "4", text: "Autour "}
        ]
    },
    {
        question: "Que signifie le préfixe : hypo?",
        answers: [
            { id: "1", text: " Au dessous, diminution" , correct: true},
            { id: "2", text: "Auprès de, contre, à travers, voisin"  },
            { id: "3", text: "Beaucoup, plusieurs"   },
            { id: "4", text: "Rapide" }
        ]
    },
    {
        question: "Que signifie le terme : cyanosé  ?",
        answers: [
            { id: "1", text: "Peur de l'eau" , correct: true  },
            { id: "2", text: "Coloration bleutée de la peau et des ongles" , correct: true  },
            { id: "3", text: "Se parler à soi-même" },
            { id: "4", text: "Ralentissement psychopathologique du cours de la pensée" }
        ]
    },
    {
        question: "Que signifie le terme : pyrogène ?",
        answers: [
            { id: "1", text: "Ablation / Enlever"},
            { id: "2", text: "Ecoulement"  },
            { id: "3", text: "Qui provoque de la fièvre",correct: true  },
            { id: "4", text: "Diminution de la quantité de thrombocytes" }
        ]
    },
];





const QuestionsScreen = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [question , nextQuestion] = useState(0);
    const [valid , isValid] = useState(false);
    const [pause , enpause] = useState(false);
    const [points , addpoints] = useState(0);
    const navigation = useNavigation();
    const route = useRoute();
    const {modSansCorrection} = route.params;
    const [timerIsPlay, setTimer] = React.useState(false);
    const [seconds, setSeconds] = React.useState(10);


    const topValue = useState(new Animated.Value(0)) [0]
    const { height, width } = Dimensions.get('window');


    function moveBlock() {
        console.log(timerIsPlay)
        setTimer(true);

        Animated.timing(topValue,{
            toValue: height,
            duration: seconds * 1000,
            useNativeDriver: false
        }).start()
    }




    React.useEffect( () => {
        console.log(timerIsPlay)

        if (timerIsPlay) {
            if (seconds > 0) {
                setTimeout(() => setSeconds(seconds - 1), 1000);
            } else {
                // @ts-ignore
                console.log('BOOOOM!');
            }
        }
    });



        const renderItem = ({item}) => {
            moveBlock

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
        <TouchableOpacity onPress={onPress} style={[styles.button , pause ? modSansCorrection ? {backgroundColor: "#5d645c"} :  item.correct ? {backgroundColor: "#168d20"} : {backgroundColor:"#8d0700"} : style ]}>
            <Text style={styles.buttonText}>{item.text}</Text>
        </TouchableOpacity>
    );

    function validate() {
        if (valid){
            console.log("Bravo GG");
            addpoints(points +1);
            enpause(true);
            isValid(false)
            setSelectedId(null)
        }
        else {
            console.log('ahah la loose');
            enpause(true);
            setSelectedId(null)
        }
    }

    function continuer() {
        if (question === 4) {
            nextQuestion(0);
            addpoints(0);
            enpause(false);
                navigation.navigate('Classement', {
                    points: points})}

        else {
            nextQuestion(question + 1);
            enpause(false);

        }
    }
    return (
        <View style={styles.block} >


            <SafeAreaView style={styles.container} >
                <Text style={{
                    zIndex: 9999,
                    fontSize: 60,
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>{seconds}</Text>
                <Animated.View style={[{
                    width:'100%',
                    height: height,
                    marginTop: topValue,
                    position: 'absolute',
                    backgroundColor: '#2fb7bd'},] }>
                </Animated.View>

                <View style={{

                    zIndex: 9999,
                    margin: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',}}>

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

        </View>
    );

};


const styles = StyleSheet.create({
    block: {
        height: '100%'
    },
    view: {
        marginTop: 50,
        flex: 1,
    },
    container: {
        paddingTop : 20,
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
        marginHorizontal: "30%",
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
