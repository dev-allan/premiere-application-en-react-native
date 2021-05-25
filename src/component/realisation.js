import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigator } from "react-navigation";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, StatusBar, ScrollView } from 'react-native';

//Importation des écrans 'détails des réalisations'
import Screen1 from './realisation-detail/screen1';
import Screen2 from './realisation-detail/screen2';
import Screen3 from './realisation-detail/screen3';
import Screen4 from './realisation-detail/screen4';


const ViewRealisation = ({ navigation }) => {
    return(
    <ScrollView style={styles.container}>
        <StatusBar/>
        <View style={styles.blockView}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Nos réalisations</Text>
            </View>
            <View style={styles.block}>
                <TouchableOpacity onPress={() => navigation.navigate("Plafond et mur")}>
                    <Image style={styles.image} source={require('../img/cuisinePlafondMurRealisation.jpg')}/>
                </TouchableOpacity>
                <View style={styles.blockText}>
                    <Text style={styles.blockText_titre}>Plafond et mur</Text>
                    <Text style={styles.blockText_texte}>
                        Lorem ipsum dolor sit{"\n"}amet,consectetur{"\n"}adipiscing elit.Sed{"\n"}suscipit ultricies{"\n"}massa eget fermentum.
                    </Text>
                </View>
            </View>
            <View style={styles.block}>
                <TouchableOpacity onPress={() => navigation.navigate("Sol et escalier")}>
                    <Image style={styles.image} source={require('../img/solEscalierRealisation.jpg')}/>
                </TouchableOpacity>
                <View style={styles.blockText}>
                    <Text style={styles.blockText_titre}>Sol et escalier</Text>
                    <Text style={styles.blockText_texte}>
                       Lorem ipsum dolor sit{"\n"}amet,consectetur{"\n"}adipiscing elit.Sed{"\n"}suscipit ultricies{"\n"}massa eget fermentum.
                    </Text>
                </View>
            </View>
            <View style={styles.block}>
                <TouchableOpacity onPress={() => navigation.navigate("Menuiserie")}>
                    <Image style={styles.image} source={require('../img/menuiserieRealisation.png')}/>
                </TouchableOpacity>
                <View style={styles.blockText}>
                    <Text style={styles.blockText_titre}>Menuiserie</Text>
                    <Text style={styles.blockText_texte}>
                        Lorem ipsum dolor sit{"\n"}amet,consectetur{"\n"}adipiscing elit.Sed{"\n"}suscipit ultricies{"\n"}massa eget fermentum.
                    </Text>
                </View>
            </View>
            <View style={styles.block}>
                <TouchableOpacity onPress={() => navigation.navigate("Façade")}>
                    <Image style={styles.image} source={require('../img/facadeRealisation.png')}/>
                </TouchableOpacity>
                <View style={styles.blockText}>
                    <Text style={styles.blockText_titre}>Façade</Text>
                    <Text style={styles.blockText_texte}>
                        Lorem ipsum dolor sit{"\n"}amet,consectetur{"\n"}adipiscing elit.Sed{"\n"}suscipit ultricies{"\n"}massa eget fermentum.
                    </Text>
                </View>
            </View>
        </View>
    </ScrollView>
    )
}

const Stack = createStackNavigator();

function Realisation() {
    return (
        <Stack.Navigator initialRouteName="Realisation" 
        screenOptions={{ 
            headerStyle: { backgroundColor: 'black'},
            headerTitleStyle: { color: 'gray'},
            headerTintColor: 'gray',
        }}>
          <Stack.Screen name="Realisation" header="none" component={ViewRealisation} 
          options={() => ({
            title: '',
            headerTransparent: true,
        })}/>
          <Stack.Screen name="Plafond et mur" component={Screen1}/>
          <Stack.Screen name="Sol et escalier" component={Screen2} />
          <Stack.Screen name="Menuiserie" component={Screen3} />
          <Stack.Screen name="Façade" component={Screen4} />
        </Stack.Navigator>
    );
}


export default Realisation;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#c92a2a",
    },

    header: {
        backgroundColor: 'black',
        paddingBottom: 8,
    },
    
    blockView: {
        paddingBottom: 80,
    },

    headerText: {
        color: 'gray',
        fontSize: 20,
        textTransform: 'uppercase',
        textAlign: 'center',
    },

    block: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 30,
        margin: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
    },

    image: {
        width: 150,
        height: 130,
        borderRadius: 6,
        marginRight: 5,
        borderColor: 'black',
        borderWidth: 1,
    },

    blockText: {
        justifyContent: 'space-around',
    },

    blockText_titre: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    blockText_texte: {
        textAlign: 'justify',
        padding: 10,
    },
})