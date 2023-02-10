import React from 'react';
import {
    SafeAreaView
    , StyleSheet
    , View
    , Image
    , Text
    , ImageBackground
} from 'react-native';

const styles = StyleSheet.create({
    docker: {
        alignItems: 'center',
        flex: 1,
        marginTop: 20,
        margin: 15,
        padding: 20,
    },
});

const RNOpacity = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={{
                    uri:
                        'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
                style={{ flex: 1 }}
            >
                <View style={styles.docker}>
                    <Image
                        style={{
                            width: 200,
                            height: 200,
                            resizeMode: 'center',
                            opacity: 0.4,
                        }}
                      
                        source={require('../src/assets/ipad.jpeg')}
                    />
                    <Text style={{
                        width: 200,
                        height: 50,
                        backgroundColor: '#a8f571',
                        alignContent: 'center'
                    }}>With Opacity Introduced</Text>
                    <Image
                       
                        source={require('../src/assets/ipad.jpeg')}
                        style={{
                            width: 200,
                            height: 200,
                            resizeMode: 'center',
                        }}
                    />
                    <Text style={{
                        width: 200,
                        height: 50,
                        backgroundColor: '#a8f571',
                        alignContent: 'center',
                    }}>Without Opacity</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};
export default RNOpacity;