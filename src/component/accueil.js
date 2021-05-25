import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar } from 'react-native';



export default Accueil = () => {
    return(
    <SafeAreaView style={styles.container}>
        <StatusBar/>
        <View style={styles.accueil}>
            <Image style={styles.logo} source={require("../img/Logo.png")}/>
            <Image style={styles.logoPeinture80} source={require("../img/peinture80.png")}/>
            <Text style={styles.titre}>Artisan Peintre à Amiens depuis 1996</Text>
            <Text style={styles.presentation}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ultricies massa eget fermentum. Quisque vulputate feugiat consequat. In rhoncus dui a ligula iaculis molestie. Vestibulum elit ipsum, pharetra non mi convallis, bibendum gravida lacus.
            </Text>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#c92a2a"
    },

    accueil: {
        marginLeft: "auto",
        marginRight: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto',
    },

    logo: {
        alignSelf: "center",
        marginTop: -30,
    },

    logoPeinture80: {
        marginTop: 50,
    },

    titre: {
        marginTop: 15,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },

    presentation: {
        marginTop: 15,
        textAlign: 'justify',
    }
})