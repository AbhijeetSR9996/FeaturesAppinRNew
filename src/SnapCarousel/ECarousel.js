import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    Image
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';

const { width: windowWidth } = Dimensions.get('window');

const data = [
    {
        uri: require('../../src/assets/ipad.jpeg'),
        txt1: 'Urban Tadka Dining',
        txt2: 'Nelson Bridge, Singapore',
        txt3: 'Chinese | Asian',
        txt4: ' 3 km',
        txt5: ' Free',
        txt6: ' 4.1/5 ',
        urii: require('../../src/assets/image.jpg'),
        uriii: require('../../src/assets/camera.png'),
    },
    {
        uri: require('../../src/assets/ipad.jpeg'),
        txt1: 'Urban Tadka Dining',
        txt2: 'Nelson Bridge, Singapore',
        txt3: 'Chinese | Asian',
        txt4: ' 3 km',
        txt5: ' Free',
        txt6: ' 4.1/5 ',
        urii: require('../../src/assets/image.jpg'),
        uriii: require('../../src/assets/camera.png'),
    },
    {
        uri: require('../../src/assets/ipad.jpeg'),
        txt1: 'Urban Tadka Dining',
        txt2: 'Nelson Bridge, Singapore',
        txt3: 'Chinese | Asian',
        txt4: ' 3 km',
        txt5: ' Free',
        txt6: ' 4.1/5 ',
        urii: require('../../src/assets/image.jpg'),
        uriii: require('../../src/assets/camera.png'),
    },
];

const INITIAL_INDEX = 0;

const ImageUsage = (props) => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

    function handleCarouselScrollEnd(item, index) {
        setCurrentIndex(index);
    }

    function renderItem({ item, index }) {
        const { uri, txt1, txt2, txt3, txt4, txt5, txt6, urii, uriii } = item;
        return (
            <TouchableOpacity style={{ top: 10, width: 180, height: 240, elevation: 8, borderRadius: 20, backgroundColor: 'white', left: 5 }}>
                <Image source={uri}
                    style={{ height: 150, width: 180, borderTopLeftRadius: 20, borderTopRightRadius: 20, left: -10, top: 0, marginHorizontal: 10, }} />
                <Text style={{ fontSize: 13, color: 'black', position: 'relative', top: 10, left: 20, fontWeight: 'bold', }}>{txt1}</Text>
                <Text style={{ fontSize: 11, color: 'grey', position: 'relative', top: 10, left: 20, fontWeight: 'bold' }}>{txt2}</Text>
                <Text style={{ fontSize: 11, color: 'grey', position: 'relative', top: 10, left: 20, fontWeight: '500' }}>{txt3}</Text>
                <Text style={{ fontSize: 11, color: 'grey', position: 'relative', top: 15, left: 30, fontWeight: 'bold' }}> {txt4}</Text>
                <Text style={{ fontSize: 11, color: 'grey', position: 'relative', top: 0, left: 80, fontWeight: '500' }}> {txt5}</Text>
                <View style={{ backgroundColor: '#4EC33B', height: 20, width: 38, bottom: 30, left: 115, top: -17, borderRadius: 8 }}>
                    <Text style={{ fontSize: 11, color: 'grey', position: 'relative', top: 2, left: 3, fontWeight: '500', color: 'white' }}> {txt6} </Text>
                </View>
                <View style={{ left: 140, top: -240, height: 30, width: 30, backgroundColor: '#fff', borderRadius: 50 }}>
                    <Image source={urii}
                        style={{ height: 30, width: 30, }} />
                    <Image source={uriii}
                        style={{ height: 15, width: 15, top: -22, left: 8 }} />
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <Carousel
                style={styles.carousel}
                data={data}
                renderItem={renderItem}
                itemWidth={0.7 * windowWidth}
                inActiveOpacity={0.3}
                containerWidth={windowWidth}
                onScrollEnd={handleCarouselScrollEnd}
                ref={carouselRef}
            />
        </View>
    );
}

export default ImageUsage;

const styles = StyleSheet.create({
    container: { backgroundColor: '#141518', paddingVertical: 20 },
    carousel: {
        backgroundColor: '#141518',
        aspectRatio: 1.5,
        flexGrow: 0,
        marginBottom: 20,
    },
    item: {
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        borderColor: 'white',
        elevation: 3,
    },
    imageBackground: {
        flex: 2,
        backgroundColor: '#EBEBEB',
        borderWidth: 5,
        borderColor: 'white',
    },
    rightTextContainer: {
        marginLeft: 'auto',
        marginRight: -2,
        backgroundColor: 'rgba(49, 49, 51,0.5)',
        padding: 3,
        marginTop: 3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    rightText: { color: 'white' },
    lowerContainer: {
        flex: 1,
        margin: 10,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    contentText: {
        marginTop: 10,
        fontSize: 12,
    },
});