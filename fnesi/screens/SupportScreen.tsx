import * as React from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';
import Background from "./Background";
import Burger from '../components/Burger';
import { Linking } from 'react-native'



export default function SupportScreen() {
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Burger navigation />
                <Text style={styles.title}>Si vous rencontrez un problème lors de l'utilisation de l'application ou si vous avez des questions, merci de contacter le support</Text>
                {/* <Button onPress={() => Linking.openURL('mailto:aurelien.ivars@fnesi.org')}
                    title="Contacter le support par mail" /> */}
                <Text style={styles.buttonText} onPress={() => Linking.openURL('mailto:aurelien.ivars@fnesi.org')}>Contacter le support par mail</Text>
                {/* Remplacer ça par une zone de texte et un bouton envoyer avec confirmation et identification obligatoire ?
                Section aide / FAQ ?  */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 500,
        backgroundColor: '#6F9FCE'
    },
    view: {
        marginTop: 50,
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 30,
        paddingBottom: 20,
        textAlign: 'center',

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: 'center',
    }
});

