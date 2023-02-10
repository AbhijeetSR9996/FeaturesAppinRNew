import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text,
    View, TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class RNAsyncStorage extends Component {
    saveUserDetails() {
        let username = "Ranjan";
        let age = '31'
        let sex = "male"
        AsyncStorage.setItem('username', username);
        AsyncStorage.setItem('age', age);
        AsyncStorage.setItem('sex', sex);
    }
    displayuserDetail = async () => {
        let username = ''
        let age = ''
        let sex = ''
        try {
            AsyncStorage.multiGet(["username", "age", "sex"]).then(response => {
                username = response[0][1];
                age = response[1][1];
                sex = response[2][1];
                alert("user age is " + age + " " + "and name of user is " + username + " " + " user is " + sex);
            })
        }
        catch (error) {
            alert(error)
        }
    }
    render() {
        return (
            <View style={syncStyles.containerStyle}>
                <TouchableOpacity onPress={this.saveUserDetails}>
                    <Text>click here to set the user data</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.displayuserDetail}>
                    <Text>Click me to the user see the detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const syncStyles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});