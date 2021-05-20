import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Image } from 'react-native';

export default Realisation = () => {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
            <Image source={require('../img/mur.jpg')}/>
            <Text>Plafond et mur</Text>
            <Text>Lorem Ipsum</Text>
        </View>
    </View>
    )
}