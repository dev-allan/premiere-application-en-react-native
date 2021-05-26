import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView  } from 'react-native';

const Screen4 = () => {
    return(
        <SafeAreaView style={styles.container}>
                <Image style={styles.image} source={require('../../img/facadeDetail.jpg')}/>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.entete}>La façade de votre maison n'est pas simplement un aspect esthétique, elle garantie également l'étanchéité de vos murs. C'est pourquoi l'entretien de celle-ci est indispensable pour conserver l'isolation de votre maison. Alors n'attendez plus, contacter Peinture80 et notre équipe de professionnels s'occupera du ravalement de votre façade.</Text>
                    <Text style={styles.corpus}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ultricies massa eget fermentum. Quisque vulputate feugiat consequat. In rhoncus dui a ligula iaculis molestie. Vestibulum elit ipsum, pharetra non mi convallis, bibendum gravida lacus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ante ex, pharetra non tincidunt in, interdum ac ipsum. Donec luctus eu risus ultrices vestibulum. Maecenas eu lacinia leo. Fusce ultrices molestie nulla nec sollicitudin. Phasellus vestibulum semper sollicitudin. Nulla ac feugiat enim. Integer ornare, ligula sit amet semper fringilla, elit mi luctus ipsum, vel pretium libero dui vitae est. Integer tempus ultricies ex id ultricies. Phasellus a bibendum libero. In mollis volutpat tincidunt. Mauris dignissim nulla a dolor egestas, nec porttitor massa dignissim.

                        Vivamus venenatis justo vitae sem vehicula scelerisque ut sit amet sapien. Pellentesque massa quam, suscipit at quam vel, blandit rutrum odio. Sed maximus et ex eget pretium. Mauris ante turpis, tempor et maximus eget, porttitor sed elit. Proin vel hendrerit purus. Etiam efficitur turpis non nunc ullamcorper, vitae hendrerit turpis facilisis. Vestibulum fringilla enim sem, id scelerisque diam pretium vel. Etiam convallis felis eget sagittis sagittis. Etiam id magna ipsum. Aenean id orci tortor. Fusce ultricies vulputate sapien, vitae ornare lacus imperdiet at. Quisque ornare, risus id vestibulum tempus, odio mi lobortis ex, non faucibus est nisl ac enim.
                    </Text>
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

export default Screen4;