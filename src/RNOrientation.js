import React, { Component } from 'react'; import {
    AppRegistry, StyleSheet, Text,
    View
} from 'react-native';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

export default class RNOrientation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to My Application!
                </Text>
                <Text style={styles.instructions}>
                    It helps you keep a track of your regular Activities
                </Text>
                <Text style={styles.instructions}> To reload Press Cmd+R,{'\n'}
                    For dev menu Shake the device or Press Cmd+D
                </Text>
                <OrientationLoadingOverlay visible={true} color="#ffffff" indicatorSize="large" messageFontSize={25}
                    message="Page is Loading... Just wait for few seconds... "
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5e14e',
    },
    welcome: {
        fontSize: 21, textAlign: 'center', margin: 11,
    },
    instructions: {
        textAlign: 'center', color: '#242020',
        marginBottom: 4,
    },
});
AppRegistry.registerComponent('original', () => original);