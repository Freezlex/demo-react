import {Text, View} from './Themed';
import * as React from 'react';
import {useState} from 'react';
import {Button, FlatList, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Chat() {
    const [initialElements, changeEl] = useState([
        {id: '0', text: 'Object 1'},
        {id: '1', text: 'Object 2'},
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
            <View>
                <FlatList
                    keyExtractor={item => item.id}
                    data={data}
                    renderItem={item => (<Text style={styles.title}>{item.item.text}</Text>)}/>

                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
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
            top : 20,
            right: 0,
            borderWidth: 2,
            borderRadius: 6,
            width: '80%',
        },

        title: {
            fontSize: 15,
            fontWeight: 'bold',
        }
    }
);
