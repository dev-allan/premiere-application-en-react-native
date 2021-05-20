import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import Screen1 from './realisation-detail/screen1';

export default Realisation = () => {
    
    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.block}>
            <TouchableOpacity onPress={() => alert('hello')}>
                <Image style={styles.image} source={require('../img/mur.jpg')}/>
            </TouchableOpacity>
            <View style={styles.blockText}>
                <Text style={styles.blockText_titre}>Plafond et mur</Text>
                <Text style={styles.blockText_texte}>
                    Lorem ipsum dolor sit amet,{"\n"} consectetur adipiscing elit.{"\n"} Sed suscipit ultricies{"\n"} massa eget fermentum.
                </Text>
            </View>
        </View>
        <View style={styles.block}>
            <TouchableOpacity>
                <Image style={styles.image} source={require('../img/mur.jpg')}/>
            </TouchableOpacity>
            <View style={styles.blockText}>
                <Text style={styles.blockText_titre}>Plafond et mur</Text>
                <Text style={styles.blockText_texte}>
                    Lorem ipsum dolor sit amet,{"\n"} consectetur adipiscing elit.{"\n"} Sed suscipit ultricies{"\n"} massa eget fermentum.
                </Text>
            </View>
        </View>
        <View style={styles.block}>
            <TouchableOpacity>
                <Image style={styles.image} source={require('../img/mur.jpg')}/>
            </TouchableOpacity>
            <View style={styles.blockText}>
                <Text style={styles.blockText_titre}>Plafond et mur</Text>
                <Text style={styles.blockText_texte}>
                    Lorem ipsum dolor sit amet,{"\n"} consectetur adipiscing elit.{"\n"} Sed suscipit ultricies{"\n"} massa eget fermentum.
                </Text>
            </View>
        </View>
        <View style={styles.block}>
            <TouchableOpacity>
                <Image style={styles.image} source={require('../img/mur.jpg')}/>
            </TouchableOpacity>
            <View style={styles.blockText}>
                <Text style={styles.blockText_titre}>Plafond et mur</Text>
                <Text style={styles.blockText_texte}>
                    Lorem ipsum dolor sit amet,{"\n"} consectetur adipiscing elit.{"\n"} Sed suscipit ultricies{"\n"} massa eget fermentum.
                </Text>
            </View>
        </View>
    </SafeAreaView>
    )
}

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