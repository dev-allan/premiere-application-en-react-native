import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Linking, Platform, TouchableOpacity } from 'react-native';

const makeCallCellPhone = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    } else {
      phoneNumber = 'telprompt:${1234567890}';
    }

    Linking.openURL(phoneNumber);
};

const makeCallFixPhone = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    } else {
      phoneNumber = 'telprompt:${1234567890}';
    }

    Linking.openURL(phoneNumber);
};

export default Contact= () => {
    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Nous contacter</Text>
        </View>
        <View style={styles.contact}>
            <TouchableOpacity onPress={makeCallCellPhone}>
                <Text style={styles.contactMobile}>06 11 62 34 22</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={makeCallFixPhone}>
                <Text style={styles.contactFix}>03 22 72 11 91</Text>
            </TouchableOpacity>
            <Text style={styles.contactEmail}>johann.pupin@orange.fr</Text>
        </View>
    </SafeAreaView>
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

    contact: {
        marginLeft: "auto",
        marginRight: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto',
    },

    contactMobile: {
        fontSize: 32,
        backgroundColor: 'red',
        marginBottom: 10,
        borderRadius: 6,
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 1,
    },

    contactFix: {
        fontSize: 32,
        backgroundColor: 'red',
        marginBottom: 10,
        borderRadius: 6,
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 1,
    },

    contactEmail: {
        fontSize: 20,
        marginTop: 10,
    }
})