import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
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
              tabBarIcon: ({ color, size }) => {
                let iconName;
                let sizeIcon = 24;
                if (route.name === 'Accueil') iconName= 'home'; size=sizeIcon;
                if (route.name ==='Savoir Faire') iconName = 'construct'; size=sizeIcon;
                if (route.name ==='Realisations') iconName = 'color-wand'; size=sizeIcon;
                if (route.name ==='Contact') iconName = 'information-circle'; size=sizeIcon;
                return <Ionicons name = {iconName} size={size} color={color} />;
              },
            })}

            tabBarOptions={{
              activeTintColor: '#FFF',
              inactiveTintColor: '#383838',
              showIcon: true,
              style: {
                backgroundColor: '#A49898',
              },
              labelStyle: {
                fontSize: 10,
              },
              indicatorStyle:{
                backgroundColor:"#FFF",
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
