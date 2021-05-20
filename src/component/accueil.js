import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default Accueil = () => {
    return(
    <View style={styles.container}>
        <Image source={require("")}/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#E47070"
    }
})