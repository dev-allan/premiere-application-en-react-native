import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import data from '../../../contentRealisation.json';

const Screen3 = () => {
    return(
        <SafeAreaView style={styles.container}>
                <Image style={styles.image} source={require('../../img/menuiserieDetail.png')}/>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.entete}>{data[2].headerText}</Text>
                    <Text style={styles.corpus}>{data[2].desc}</Text>
                </ScrollView>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        padding: 10,
        backgroundColor: "#B5ABAD"
    },

    image:{
        width: 250,
        height: 180,
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
    },

    scrollView:{
        marginTop: 20,
    },

    entete:{
        textAlign: 'justify',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
    },

    corpus: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 50,
        textAlign: 'justify',
    },

})

export default Screen3;