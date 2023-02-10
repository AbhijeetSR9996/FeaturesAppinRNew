import React, { Component } from 'react';
import {
    StyleSheet
    , Text
    , View
    , Switch
    , Alert
} from 'react-native';

export default class Usage extends Component {
    constructor() {
        super(); this.state = {
            SwitchOnValueHolder: false
        }
    }
    ShowAlert = (value) => {
        this.setState({
            SwitchOnValueHolder: value
        })
        if (value == true) {
            Alert.alert("You have truned ON the Switch.");
        }
        else {
            Alert.alert("You have turned OFF the Switch.");
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> It is a Switch </Text>
                <Switch
                    onValueChange={(value) => this.ShowAlert(value)} style={{ marginBottom: 10 }} value={this.state.SwitchOnValueHolder} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#afff63',
    },
    text: {
        fontSize: 19,
        color: '#000000',
    },
});