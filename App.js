import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Accueil from './src/component/accueil' 
import SavoirFaire from './src/component/savoirFaire';
import Realisation from './src/component/realisation';
import Contact from './src/component/contact';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

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
            }
            if (route.name === 'Savoir Faire') {
            iconName = 'construct-outline';
            }
            if (route.name === 'Realisations'){
              iconName= 'color-wand-outline'
            }
            if(route.name === 'Contact'){
              iconName='information-circle-outline'
            }
            
            return <Ionicons name = {iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
            style: {
              borderTopWidth: 0,
              position: 'absolute',
              backgroundColor: 'black',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              height: 55,
              paddingBottom: 5,
            }
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
