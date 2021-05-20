import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Systrace } from 'react-native';

export default Contact= () => {
    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.contact}>
            <Text style={styles.contactMobile}>06 11 62 34 22</Text>
            <Text style={styles.contactFix}>03 22 72 11 91</Text>
            <Text style={styles.contactEmail}>johann.pupin@orange.fr</Text>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EA7A7A",
    },

    contact: {
        marginLeft: "auto",
        marginRight: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto',
    },

    contactMobile: {
        fontSize: 32,
    },

    contactFix: {
        fontSize: 32,
    },

    contactEmail: {
        fontSize: 20,
        marginTop: 10,
    }
})