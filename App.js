import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Accueil from './src/component/accueil' 
import SavoirFaire from './src/component/savoirFaire';
import Realisation from './src/component/realisation';
import Contact from './src/component/contact';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName={'Critic'}
        tabBarOptions={{
           activeTintColor: '#fff',
           inactiveTintColor: 'lightgray',
           activeBackgroundColor: '#c4461c',
           inactiveBackgroundColor: '#b55031',
               style: {
                     backgroundColor: '#CE4418',
                     paddingBottom: 3
               }
        }}>
          <Tab.Screen name="Accueil" component={Accueil}
           options={{
            tabBarLabel: 'Accueil'
          }}
          />
          <Tab.Screen name="Savoir  Faire" component={SavoirFaire}
           options={{
            tabBarLabel: 'Savoir Faire'
          }}/>
          <Tab.Screen name="Realisations" component={Realisation}
           options={{
            tabBarLabel: 'Realisations'
          }}/>
          <Tab.Screen name="Contact" component={Contact}
           options={{
            tabBarLabel: 'Contact'
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}
