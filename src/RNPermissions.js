import React from 'react';
import {
    SafeAreaView
    , View
    , Text
    , StyleSheet
    , PermissionsAndroid
    , TouchableOpacity
    , Platform
} from 'react-native';

const RNPermissions = () => {
    const proceed = () => {
        alert('Access to Gallery has been granted');
    };
    const onPress
        = async (
        ) => {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Galleria Application Gallery Permission',
                        message: 'Kindly grant access to your gallery for Proper functioning of Galleria Application',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    proceed();
                } else {
                    alert('Access to Gallery Denied');
                }
            } else {
                proceed();
            }
        };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: '#7a1229'
                    }}>
                </Text>
                <Text
                    style={{
                        fontSize: 20,
                        textAlign: 'center',
                        color: '#0d8028'
                    }}>
                    React Permission Example
                </Text>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={onPress}>
                        <Text style={styles.textStyle}>
                            Click to Grant Gallery Permission
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        fontSize: 20,
                        textAlign: 'center',
                        color: '#185ea3'
                    }}>
                    Gallery Permission Asked
                    {'\n'}
                    .........................
                </Text>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f71b',
        justifyContent: 'center',
        padding: 10,
    },
    textStyle: {
        fontSize: 20,
        color: '#f8fc83',
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#a30d1c',
        padding: 50,
    },
});
export default RNPermissions;