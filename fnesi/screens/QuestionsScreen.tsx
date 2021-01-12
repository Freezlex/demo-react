
import * as React from 'react';
import {TouchableOpacity, StyleSheet, FlatList, SafeAreaView, View, Text} from 'react-native';

export default function QuestionScreen() {
    const DATA = [
        {
            id: '1',
            response: 'Réponse 1',
            result: true,
        },
        {
            id: '2',
            response: 'Réponse 2',
            result: false,
        },
        {
            id: '3',
            response: 'Réponse 3',
            result: false,
        },
        {
            id: '4',
            response: 'Réponse 4',
            result: false,
        },
        ]

    function Reponse(number){
        console.log(DATA[0].result);

    }

    const Item = ({response}) => (
        <TouchableOpacity onPress={Reponse}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{response}</Text>
        </View>
        </TouchableOpacity>

    );
    const renderItem = ({item}) => (
        <TouchableOpacity>

            <Item response={item.response}/>
        </TouchableOpacity>
    );

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.view}>

            <Text style={styles.title}>QUESTION 1</Text>
            <Text style={styles.question}>blablablabla ?</Text>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            </View>
        </SafeAreaView>
    );
}
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
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'press-2-start',
    },

});