import {Text, View} from './Themed';
import * as React from 'react';
import {useState} from 'react';
import {Button, FlatList, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {AntDesign, Ionicons} from "@expo/vector-icons";

export default function Chat() {
    const [initialElements, changeEl] = useState([
    ]);

    const [value, onChangeText] = useState('');
    const [data, setExampleState] = useState(initialElements);
    const [idx, incr] = useState(2);

    let addElement: () => void;
    addElement = () => {
        let newArray = [...initialElements, {id: idx, text: value}];
        incr(idx + 1);
        console.log(initialElements.length);
        setExampleState(newArray);
        changeEl(newArray);
        onChangeText('');
    };

    function f() {

    }

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
                <View style={styles.input}>

                    <TextInput
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                </View>

                <View style={styles.icon}>

                    <AntDesign name="rightcircle" size={32} color="black"  onPress={addElement}/>

                </View>
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
            marginTop: 55,
            marginHorizontal: '1%',
            backgroundColor: '#2e6294',
        },
        view: {
            backgroundColor: '#2e6294',
            position: 'absolute',
            bottom: 0,
            width: '98%',
            marginHorizontal: '1%',
            flexDirection: 'row',
            marginBottom: '1%',

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
            borderRadius: 8,
            width: '88%',
        },

        title: {
            fontSize: 15,
            fontWeight: 'bold',
            backgroundColor: '#2e6294',
        },
        icon: {
            marginLeft: '2%',
            marginTop: 3,
            backgroundColor: '#2e6294',
        },
    },
);
