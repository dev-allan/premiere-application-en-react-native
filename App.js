import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accueil from './src/component/accueil' 
import SavoirFaire from './src/component/savoirFaire';
import Realisation from './src/component/realisation';
import Contact from './src/component/contact';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Accueil" component={Accueil}
           options={{
            tabBarLabel: 'Accueil'
          }}/>
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
