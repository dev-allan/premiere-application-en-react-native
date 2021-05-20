import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default SavoirFaire = () => {
    return(
    <View style={styles.container}>
        <View style={styles.block}>
            <Image style={styles.image} source={require('../img/mur.jpg')}/>
            <View style={styles.blockText}>
                <Text style={styles.blockText_titre}>Plafond et mur</Text>
                <Text style={styles.blockText_texte}>
                    Lorem ipsum dolor sit amet,{"\n"} consectetur adipiscing elit.{"\n"} Sed suscipit ultricies{"\n"} massa eget fermentum.
                </Text>
            </View>
        </View>
        <View style={styles.block}>
            <View style={styles.blockText}>
                <Text style={styles.blockText_titre}>Sol et escalier</Text>
                <Text style={styles.blockText_texte}>Lorem ipsum dolor sit amet,{"\n"} consectetur adipiscing elit.{"\n"} Sed suscipit ultricies{"\n"} massa eget fermentum.</Text>
            </View>
            <Image style={styles.image} source={require('../img/escalier.jpg')}/>
        </View>
        <View style={styles.block}>
            <Image style={styles.image} source={require('../img/menuiserie.jpg')}/>
            <View style={styles.blockText}>
                <Text style={styles.blockText_titre}>Menuiserie</Text>
                <Text style={styles.blockText_texte}>
                    Lorem ipsum dolor sit amet,{"\n"} consectetur adipiscing elit.{"\n"} Sed suscipit ultricies{"\n"} massa eget fermentum.
                </Text>
            </View>
        </View>
        <View style={styles.block}>
            <View style={styles.blockText}>
                <Text style={styles.blockText_titre}>Façade</Text>
                <Text style={styles.blockText_texte}>Lorem ipsum dolor sit amet,{"\n"} consectetur adipiscing elit.{"\n"} Sed suscipit ultricies{"\n"} massa eget fermentum.</Text>
            </View>
            <Image style={styles.image} source={require('../img/façade.jpg')}/>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#BF9292"
    },

    block: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 10,
        paddingBottom: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
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
    }
})