import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigator } from "react-navigation";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity,  } from 'react-native';

//Importation des écrans détails des réalisations
import Screen1 from './realisation-detail/screen1';
import Screen2 from './realisation-detail/screen2';
import Screen3 from './realisation-detail/screen3';
import Screen4 from './realisation-detail/screen4';


const ViewRealisation = ({ navigation }) => {
    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.block}>
            <TouchableOpacity onPress={() => navigation.navigate("Plafond et mur")}>
                <Image style={styles.image} source={require('../img/cuisinePlafondMurRealisation.jpg')}/>
            </TouchableOpacity>
            <View style={styles.blockText}>
                <Text style={styles.blockText_titre}>Plafond et mur</Text>
                <Text style={styles.blockText_texte}>
                    Lorem ipsum dolor sit amet,{"\n"} consectetur adipiscing elit.{"\n"} Sed suscipit ultricies{"\n"} massa eget fermentum.
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
                    Lorem ipsum dolor sit amet,{"\n"} consectetur adipiscing elit.{"\n"} Sed suscipit ultricies{"\n"} massa eget fermentum.
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
                    Lorem ipsum dolor sit amet,{"\n"} consectetur adipiscing elit.{"\n"} Sed suscipit ultricies{"\n"} massa eget fermentum.
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
                    Lorem ipsum dolor sit amet,{"\n"} consectetur adipiscing elit.{"\n"} Sed suscipit ultricies{"\n"} massa eget fermentum.
                </Text>
            </View>
        </View>
    </SafeAreaView>
    )
}

const Stack = createStackNavigator();

function Realisation() {
    return (
        <Stack.Navigator initialRouteName="Realisation">
          <Stack.Screen name="Realisation" header="none" component={ViewRealisation} 
          options={() => ({
            title: '',
            headerTransparent: true,
        })}/>
          <Stack.Screen name="Plafond et mur" component={Screen1} />
          <Stack.Screen name="Sol et escalier" component={Screen2} />
          <Stack.Screen name="Menuiserie" component={Screen3} />
          <Stack.Screen name="Façade" component={Screen4} />
        </Stack.Navigator>
    );
}


export default Realisation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#E23F3F"
    },

    block: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 10,
        paddingBottom: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 'auto',
        marginTop: 'auto',
    },

    image: {
        width: 150,
        height: 130,
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
    },
})