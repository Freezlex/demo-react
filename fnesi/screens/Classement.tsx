import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { View } from '../components/Themed';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function Classement() {
    const route = useRoute();
    const { points} = route.params;
    const navigation = useNavigation( );


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titreCenter}>
                <Text style={styles.title}>Classement</Text>
            </View>
            <View style={styles.textAlign}>
                <Text style={styles.text}>1er Pseudo {points} Points</Text>
            </View>
            <View style={styles.view}>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Detail</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Continuer</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 500,
        backgroundColor: '#6F9FCE',
    },
    view: {
        position: 'absolute',
        bottom: 0,
        right: 1,
        left: 1,
    },
    titreCenter: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 30,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'press-2-start',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        margin: 10,
    },
    textAlign: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
            borderRadius: 8,
            paddingVertical: 20,
            backgroundColor: '#28537D',
            marginHorizontal: 120,
            marginBottom: 30,
            borderBottomColor: '#1e3c5a',
            borderBottomWidth: 5,
            borderEndWidth: 5,
            borderEndColor: '#1e3c5a',
            borderBottomLeftRadius: 3,

        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold',
            textTransform: "uppercase",
            fontSize: 25,
            textAlign: 'center',
            fontFamily: 'press-2-start'
        }
});
