import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../../carouselCard';
import data from '../../contentRealisation.json';

export default SavoirFaire = () => {
    return(
    <ScrollView style={styles.container}>
        <StatusBar/>
        <CarouselCards />
        <View style={styles.blockView}>
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
        </View>
    </ScrollView>
    )
}

//test carousel
const CarouselCards = () => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
  
    return (
      <View>
          <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      </View>
    )
};

//////

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#B5ABAD",
    },

    blockView: {
        paddingBottom: 80,
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
        borderRadius: 6,
        margin: 10,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 6,
        backgroundColor : "#FFF",
    },

    image: {
        width: 130,
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