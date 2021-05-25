import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, ScrollView } from 'react-native';

export default SavoirFaire = () => {
    return(
    <ScrollView style={styles.container}>
        <StatusBar/>
        <View style={styles.header}>
            <Text style={styles.headerText}>Notre Savoir Faire</Text>
        </View>
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
                <Text style={styles.blockText_texte}>Lorem ipsum dolor sit amet,{"\n"}consectetur adipiscing elit.{"\n"}Sed suscipit ultricies{"\n"}massa eget fermentum.</Text>
            </View>
            <Image style={styles.image} source={require('../img/escalier.jpg')}/>
        </View>
        <View style={styles.block}>
            <Image style={styles.image} source={require('../img/menuiserie.jpg')}/>
            <View style={styles.blockText}>
                <Text style={styles.blockText_titre}>Menuiserie</Text>
                <Text style={styles.blockText_texte}>
                    Lorem ipsum dolor sit amet,{"\n"}consectetur adipiscing elit.{"\n"}Sed suscipit ultricies{"\n"}massa eget fermentum.
                </Text>
            </View>
        </View>
        <View style={styles.block}>
            <View style={styles.blockText}>
                <Text style={styles.blockText_titre}>Façade</Text>
                <Text style={styles.blockText_texte}>Lorem ipsum dolor sit amet,{"\n"}consectetur adipiscing elit.{"\n"}Sed suscipit ultricies{"\n"}massa eget fermentum.</Text>
            </View>
            <Image style={styles.image} source={require('../img/façade.jpg')}/>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c92a2a",
    },

    header: {
        backgroundColor: 'black',
        paddingBottom: 8,
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
        marginLeft: 0,
        borderWidth: 1,
        borderColor: "#20232a",
        borderRadius: 6,
    },

    image: {
        width: 150,
        height: 130,
        borderRadius: 6,
    },

    blockText: {
        padding: 10,
    },

    blockText_titre: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    blockText_texte: {
        textAlign: 'justify',
    }
})