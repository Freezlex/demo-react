import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export default function Burger({ navigation }: { navigation: any }) {
    navigation = useNavigation();

    return (
        <Ionicons name="ios-menu" size={25}
                  backgroundColor="#6F9FCE" onPress={() => navigation.openDrawer()}>
        </Ionicons>
    );
}

//Dans chaque screen:
// Importer le Burger,
// Inserer la balise <Burger navigation><Burger/>
// Voir App.tsx pour l'import d'écrans dans le menu
