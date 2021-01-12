import {Text, View} from './Themed';
import * as React from 'react';
import {useState} from 'react';
import {Button, FlatList, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Chat() {
    const [initialElements, changeEl] = useState([
    ]);

    const [value, onChangeText] = useState('');
    const [data, setExampleState] = useState(initialElements);
    const [idx, incr] = useState(2);

    let addElement: () => void;
    ;
    addElement = () => {
        let newArray = [...initialElements, {id: idx, text: value}];
        incr(idx + 1);
        console.log(initialElements.length);
        setExampleState(newArray);
        changeEl(newArray);
        onChangeText('');
    };

    return (

        <SafeAreaView style={styles.background}>
            <View style={{backgroundColor: '#2e6294'}}>
                <Text style={styles.text}>TCHAT</Text>
                <FlatList
                    keyExtractor={item => item.id}
                    data={data}
                    renderItem={item => (<Text style={styles.title}>{item.item.text}</Text>)}/>
            </View>
            <View style={styles.view}>

                <TextInput
                    style={styles.input}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
                <Button
                    title="Entrer"
                    onPress={addElement}/>
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({


        background: {
            position: 'absolute',
            width: '98%',
            height:'50%',
            borderWidth: 2,
            borderRadius: 6,
            marginTop: 30,
            marginHorizontal: '1%',
            backgroundColor: '#2e6294',
        },
        view: {
            backgroundColor: '#2e6294',
            position: 'absolute',
            bottom: 0,
            width: '98%',
            marginHorizontal: '1%',

        },
        text: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            textTransform: "uppercase",
            marginBottom: 20,
            marginHorizontal: '30%',
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            alignItems: 'center',
            backgroundColor: '#2e6294',

        },
        input: {
            height: 40,
            borderColor: 'black',
            borderWidth: 2,
            backgroundColor: '#2e6294',
        },

        title: {
            fontSize: 15,
            fontWeight: 'bold',
            backgroundColor: '#2e6294',
        }
    },
);
