import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Accueil from './src/component/accueil' 
import SavoirFaire from './src/component/savoirFaire';
import Realisation from './src/component/realisation';
import Contact from './src/component/contact';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName={'Accueil'}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Accueil') {
            iconName = 'home-outline';
            size = 24;
            }
            if (route.name === 'Savoir Faire') {
            iconName = 'construct-outline';
            size = 24;
            }
            if (route.name === 'Realisations'){
              iconName= 'color-wand-outline'
              size = 24;
            }
            if(route.name === 'Contact'){
              iconName='information-circle-outline';
              size = 24;
            }
            
            return <Ionicons name = {iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
            showIcon: true,
            style: {
              borderTopWidth: 10,
              backgroundColor: 'black',
            },
            labelStyle: {
              fontSize: 10,
            },
            }}>
          <Tab.Screen name="Accueil" component={Accueil}
           options={{
            tabBarLabel: 'Accueil',
          }}
          />
          <Tab.Screen name="Savoir Faire" component={SavoirFaire}
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
