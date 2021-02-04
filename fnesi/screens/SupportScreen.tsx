import * as React from 'react';
import {Button, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { View, Text } from '../components/Themed';
import Burger from '../components/Burger';
import { Linking } from 'react-native'



export default function SupportScreen() {
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Burger navigation />
                <Text style={styles.title}>Si vous rencontrez un problème lors de l'utilisation ou si vous avez des questions, merci de contacter le support.</Text>
                {/* <Button onPress={() => Linking.openURL('mailto:aurelien.ivars@fnesi.org')}
                    title="Contacter le support par mail" /> */}

                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('mailto:aurelien.ivars@fnesi.org')}>
                    <View>
                        <Text style={styles.buttonText}>Contacter le support par mail</Text>
                    </View>
                </TouchableOpacity>
                {/* Remplacer ça par une zone de texte et un bouton envoyer avec confirmation et identification obligatoire ?
                Section aide / FAQ ?  */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2fb7bd'
    },
    view: {
        marginTop: 50,
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 30,
        paddingBottom: 20,
        textAlign: 'center',
        color:'white',
    },
    button: {
        borderRadius: 8,
        paddingVertical: 10,
        backgroundColor: '#258D93',
        marginHorizontal: 20,
        marginBottom: 30,
        borderBottomColor: '#217D82',
        borderBottomWidth: 5,
        borderEndWidth: 5,
        borderEndColor: '#217D82',
        borderBottomLeftRadius: 3,
    },
    buttonText: {
        backgroundColor: '#258D93',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: 'center',
    },
});

