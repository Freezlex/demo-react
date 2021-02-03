import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import TabOneScreen from './screens/TabOneScreen';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import SelectParamScreen from './screens/SelectParamScreen';
import RoomScreen from './screens/RoomScreen';
import SelectPrivatePublicScreen from './screens/SelectPrivatePublicScreen';
import QuestionsScreen from './screens/QuestionsScreen';
import Classement from './screens/Classement';
import ProfileScreen from './screens/ProfileScreen';
import SupportScreen from './screens/SupportScreen';
import JoinsGameMenu from './screens/JoinsGameMenu';

const Drawer = createDrawerNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <SafeAreaProvider>
          <NavigationContainer>
            <Drawer.Navigator drawerStyle={{backgroundColor: '#373737',}}
                              initialRouteName="Home"
                              drawerContentOptions={{
                                inactiveTintColor: 'white',
                                activeTintColor: '#258d93',
                            }}>

              <Drawer.Screen name="Home" component={TabOneScreen} />
              <Drawer.Screen name="Param" component={SelectParamScreen}  />
                <Drawer.Screen name="Room" component={RoomScreen} />
                <Drawer.Screen name="P/P" component={SelectPrivatePublicScreen} />
                <Drawer.Screen name="Question" component={QuestionsScreen} />
                <Drawer.Screen name="Classement" component={Classement} />
              <Drawer.Screen name="Support" component={SupportScreen} />
              <Drawer.Screen name="Profile" component={ProfileScreen} />
              <Drawer.Screen name="GameMenu" component={JoinsGameMenu} />


              {/* Pour ajouter un écran cible dans le menu :
            <Drawer.Screen name="Nom à afficher" component={Screen à ajouter} /> */}
            </Drawer.Navigator>
          </NavigationContainer>
          <StatusBar />
        </SafeAreaProvider>
    )
  }
}
