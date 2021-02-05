import * as React from 'react';
import {SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { View } from '../components/Themed';
import Burger from '../components/Burger';
import QuestionLocal from '../assets/data/QuestionLocal';


const DATA = QuestionLocal();


export default function CorrectionScreen() {

    const renderItem = ({item , index}) => {
        console.log(item.answers)


        return (
            <View style={styles.questionNumber}>

                <Text style={styles.title}>Question {index + 1} :</Text>
                <Text style={styles.question}>{item.question}  </Text>

                <FlatList
                    data={item.answers}
                    renderItem={renderItemAnswer}
                />

            </View>
        );
    };
    const renderItemAnswer = ({item , index}) => {
        return(
            <View>
                <TouchableOpacity  style={[styles.button , item.correct ? {backgroundColor: "#168d20", borderBottomColor: "#0f7518", borderEndColor: "#0f7518"} : {backgroundColor:"#8d0700", borderBottomColor: "#5d0703", borderEndColor: "#5d0703"} ]}>
                <View>
                        <Text style={[styles.text, item.correct ? {backgroundColor: "#168d20", borderBottomColor: "#0f7518", borderEndColor: "#0f7518"} : {backgroundColor:"#8d0700", borderBottomColor: "#5d0703", borderEndColor: "#5d0703"}]}>{item.text}</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )



    }
    return (

        <View style={styles.view}>
            <ScrollView>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                />
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    view: {
        height: '100%',
    },

    questionNumber: {
        marginBottom: 50,
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 50,
        marginBottom: 20,
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
    },
    question: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        marginBottom: 20,
    },
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        marginHorizontal: 40,
        marginBottom: 20,
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderBottomLeftRadius: 3,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
    },
});
