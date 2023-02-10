import React from 'react';
import {
    View
    , KeyboardAvoidingView
    , Image
    , TextInput
    , StyleSheet
    , Text
    , ImageBackground
    , Platform
    , TouchableWithoutFeedback
    , Button
    , Keyboard
} from 'react-native';

const styles = StyleSheet.create({
    docker: {
        flex: 1,
        alignItems: 'center'
    },
    inside: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    input: {
        height: 40,
        borderColor: "#bbed64",
        color: '#e32480',
        textShadowColor: '#79edd0',
        borderBottomWidth: 10,
        marginBottom: 36,
        borderRadius: 100 / 2
    },
});

const RNKeyboardAvoidView = () => {
    return (
        <ImageBackground
            source={{
                uri:
                    'https://images.pexels.com/photos/1862695/pexels-photo-1862695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            style={{ flex: 1 }}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios"
                    ? "padding"
                    : "height"}
                style={styles.docker}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={
                        styles.inside
                    }>
                        <Image
                            source={{
                                uri:
                                    'https://cdn.educba.com/academy/wp-content/uploads/2020/05/cropped-website_logo_transparent_background_white.png',
                            }}
                            style={{
                                height: 130,
                                marginTop: 10,
                                width: 350,
                            }}
                        />
                        <Text style={
                            {
                                fontSize: 36
                                , marginBottom: 48
                                , color: '#faf569'
                                , backgroundColor: '#54f0cb'
                                , alignItems: 'center'
                                , borderWidth: 10
                                , textAlign: 'center'
                                , borderRadius: 100
                                , borderColor: '#d938f5'
                                , justifyContent: 'center'
                            }
                        }>EDUCBA
                        </Text>
                        <TextInput
                            placeholder="Yourentry"
                            style={
                                styles.input
                            } />
                        <View
                            style={{
                                backgroundColor: "#d83ef0",
                                marginTop: 12,
                                color: '#f2bf7c',
                                borderWidth: 10,
                                borderRadius: 100,
                                borderColor: '#f0294d'
                            }}>
                            <Button
                                title=
                                "Let's Proceed"
                                onPress={() => null} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
};
export default RNKeyboardAvoidView;