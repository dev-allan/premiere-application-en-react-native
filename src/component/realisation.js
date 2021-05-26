import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ScrollView, FlatList } from 'react-native';
import data from '../../contentRealisation.json';

//Importation des écrans 'détails des réalisations' pour la navigation
import Screen1 from './realisation_detail/screen1';
import Screen2 from './realisation_detail/screen2';
import Screen3 from './realisation_detail/screen3';
import Screen4 from './realisation_detail/screen4';

const ViewRealisation = ({ navigation }) => {
    return(
    <ScrollView style={styles.container}>
        <StatusBar/>
        <View style={styles.blockView}>
            <View style={styles.block}>
                <TouchableOpacity onPress={() => navigation.navigate(data[0].title)}>
                    <Image style={styles.image} source={require('../img/cuisinePlafondMurRealisation.jpg')}/>
                </TouchableOpacity>
                <View style={styles.blockText}>
                    <Text style={styles.blockText_titre}>{data[0].title}</Text>
                    <Text style={styles.blockText_texte}>
                        {data[0].smallDesc}
                    </Text>
                </View>
            </View>
            <View style={styles.block}>
                <TouchableOpacity onPress={() => navigation.navigate(data[1].title)}>
                    <Image style={styles.image} source={require('../img/solEscalierRealisation.jpg')}/>
                </TouchableOpacity>
                <View style={styles.blockText}>
                    <Text style={styles.blockText_titre}>{data[1].title}</Text>
                    <Text style={styles.blockText_texte}>
                       {data[1].smallDesc}
                    </Text>
                </View>
            </View>
            <View style={styles.block}>
                <TouchableOpacity onPress={() => navigation.navigate(data[2].title)}>
                    <Image style={styles.image} source={require('../img/menuiserieRealisation.png')}/>
                </TouchableOpacity>
                <View style={styles.blockText}>
                    <Text style={styles.blockText_titre}>{data[2].title}</Text>
                    <Text style={styles.blockText_texte}>
                        {data[2].smallDesc}
                    </Text>
                </View>
            </View>
            <View style={styles.block}>
                <TouchableOpacity onPress={() => navigation.navigate(data[3].title)}>
                    <Image style={styles.image} source={require('../img/facadeRealisation.png')}/>
                </TouchableOpacity>
                <View style={styles.blockText}>
                    <Text style={styles.blockText_titre}>{data[3].title}</Text>
                    <Text style={styles.blockText_texte}>
                        {data[3].smallDesc}
                    </Text>
                </View>
            </View>
        </View>
    </ScrollView>
    )
}

const Stack = createStackNavigator();

//fonction permettant la navigation
const Realisation = () => {
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
          <Stack.Screen name={data[0].title} component={Screen1}/>
          <Stack.Screen name={data[1].title} component={Screen2} />
          <Stack.Screen name={data[2].title} component={Screen3} />
          <Stack.Screen name={data[3].title} component={Screen4} />
        </Stack.Navigator>
    );
}


export default Realisation;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#B5ABAD",
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
        borderRadius: 6,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 6,
        backgroundColor : "#FFF",
    },

    image: {
        width: 150,
        height: 130,
        borderRadius: 6,
        marginRight: 5,
        borderColor: 'black',
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