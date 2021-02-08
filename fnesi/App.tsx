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
import Pub from './screens/Pub';
import SuggestionScreen from './screens/SuggestionScreen';
import {MaterialCommunityIcons, Ionicons, Entypo, Feather} from '@expo/vector-icons';
import ReglageScreen from './screens/ReglageScreen';
import CorrectionScreen from './screens/Correction';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

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

              <Drawer.Screen name="Accueil" component={TabOneScreen}
              options={{drawerIcon: ({focused, size}) => (
              <Ionicons name="md-home" style={{position:'absolute'}} size={size} color={focused ? '#7cc' : '#ccc'}/>
              )}}/>
               <Drawer.Screen name="Login" component={LoginScreen}
              options={{drawerIcon: ({focused, size}) => (
              <MaterialCommunityIcons name="account" size={size} color={focused ? '#7cc' : '#ccc'} />
              )}}/>
              <Drawer.Screen name="Suggestions" component={SuggestionScreen}
               options={{drawerIcon: ({focused, size}) => (
              <Entypo name="new-message" size={size} color={focused ? '#7cc' : '#ccc'} />
               )}}/>
              <Drawer.Screen name="Support" component={SupportScreen}
               options={{drawerIcon: ({focused, size}) => (
                <Feather name="phone" size={size} color={focused ? '#7cc' : '#ccc'} />
              )}}/>
              <Drawer.Screen name="Règlage" component={ReglageScreen}
               options={{drawerIcon: ({focused, size}) => (
              <Ionicons name="settings-outline" size={size} color={focused ? '#7cc' : '#ccc'} />
              )}}/>
              <Drawer.Screen name="Param" component={SelectParamScreen}    options={{
                  drawerLabel: () => null,
                  drawerIcon: () => null,
                  title: undefined,
              }}/>
              <Drawer.Screen name="Room" component={RoomScreen}   options={{
                  drawerLabel: () => null,
                  drawerIcon: () => null,
                  title: undefined,
              }}/>
              <Drawer.Screen name="P/P" component={SelectPrivatePublicScreen}   options={{
                  drawerLabel: () => null,
                  drawerIcon: () => null,
                  title: undefined,
              }}/>
              <Drawer.Screen name="Question" component={QuestionsScreen}   options={{
                  drawerLabel: () => null,
                  title: undefined,
                  drawerIcon: () => null,
              }}/>
              <Drawer.Screen name="Classement" component={Classement}   options={{
                  drawerLabel: () => null,
                  title: undefined,
                  drawerIcon: () => null,
              }}/>
                <Drawer.Screen name="Profile" component={ProfileScreen}   options={{
                    drawerLabel: () => null,
                    title: undefined,
                    drawerIcon: () => null,
                }}/>
              <Drawer.Screen name="GameMenu" component={JoinsGameMenu}   options={{
                  drawerLabel: () => null,
                  drawerIcon: () => null,
                  title: undefined,
              }}/>
              <Drawer.Screen name="Pub" component={Pub}   options={{
                  drawerLabel: () => null,
                  drawerIcon: () => null,
                  title: undefined,
              }}/>
              <Drawer.Screen name="Correction" component={CorrectionScreen}   options={{
                  drawerLabel: () => null,
                  drawerIcon: () => null,
                  title: undefined,
              }}/>
                <Drawer.Screen name="Register" component={RegisterScreen}   options={{
                    drawerLabel: () => null,
                    drawerIcon: () => null,
                    title: undefined,
                }}/>

              {/* Pour ajouter un écran cible dans le menu :
            <Drawer.Screen name="Nom à afficher" component={Screen à ajouter} /> */}
            </Drawer.Navigator>
          </NavigationContainer>
          <StatusBar />
        </SafeAreaProvider>
    )
  }
}
