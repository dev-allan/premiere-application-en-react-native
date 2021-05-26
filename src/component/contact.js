import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Linking, Platform, TouchableOpacity, Image } from 'react-native';


/////////////////////////////////////////////////////////////////////////////////
/* Liste des fonctions de la page contact pour le renvoie vers les applications*/
////////////////////////////////////////////////////////////////////////////////

//fonction permettant au bouton de l'adresse postale de renvoyer vers une application GPS
const adresseGPS = () => {
    const url = Platform.select({
        ios: `maps:0,0?q=${'96 rue Richard de Fournival 80090 Amiens'}`,
        android: `geo:0,0?q=${'96 rue Richard de Fournival 80090 Amiens'}`,
      })
      Linking.openURL(url)
};

//fonction permettant au bouton du numéro de téléphone portable de renvoyer vers le répertoire
const makeCallCellPhone = () => {
    let phoneNumber = '';
    Platform.select({
        ios: phoneNumber = 'telprompt:${1234567890}',
        android: phoneNumber = 'tel:${1234567890}',
    })
    Linking.openURL(phoneNumber);
};

//fonction permettant au bouton du numéro de téléphone fixe de renvoyer vers le répertoire
const makeCallFixPhone = () => {
    let phoneNumber = '';
    Platform.select({
        ios: phoneNumber = 'telprompt:${1234567890}',
        android: phoneNumber = 'tel:${1234567890}',
    })
    Linking.openURL(phoneNumber);
};

//fonction permettant au bouton de l'adresse mail de renvoyer vers une application mail
const goToMail = () => {
    Linking.openURL('mailto:johann.pupin@orange.fr?subject=Demande de devis&body=Bonjour Peinture80')
};

//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////*Fin de la liste des fonctions*///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

export default Contact = () => {
    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.contact}>
            <TouchableOpacity onPress={adresseGPS} style={styles.blockLocalisation}>
                <Image style={styles.iconGPS} source={require('../img/iconGPS.png')}/>
                <Text style={styles.adresseTexte}>96 rue Richard de Fournival{"\n"}80090 Amiens</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={makeCallCellPhone}>
                <Text style={styles.contactMobile}>06 11 62 34 22</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={makeCallFixPhone}>
                <Text style={styles.contactFix}>03 22 72 11 91</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToMail}>
                <Text style={styles.contactEmail}>johann.pupin@orange.fr</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#B5ABAD",
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

    contact: {
        marginLeft: "auto",
        marginRight: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto',
    },

    blockLocalisation: {
        flexDirection: "row"
    },

    contactMobile: {
        fontSize: 32,
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 60,
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 4,
        textAlign: 'center',
        elevation: 10,
    },

    contactFix: {
        fontSize: 32,
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 60,
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 4,
        textAlign: 'center',
        elevation: 10,
    },

    contactEmail: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center',
    },

    adresseTexte: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 100,
    }
})