import React from 'react';
import {
    View
    , ScrollView
    , KeyboardAvoidingView
    , Alert
    , Text
} from 'react-native';
import CustomTextinput from '../pages/CustomTextinput';
import CustomButton from '../pages/CustomButton';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

export default class RegisterUser extends React.Component {
    constructor(props) {
        super(props); this.state = {
            user_name: '', user_contact: '', user_address: '',
        };
    }
    register_user = () => {
        var that = this;
        const { user_name } = this.state; const { user_contact } = this.state; const { user_address } = this.state; if (user_name) {
            if (user_contact) {
                if (user_address) {
                    db.transaction(function (tx) {
                        tx.executeSql(
                            'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
                            [user_name, user_contact, user_address], (tx, results) => {
                                // console.log('Results', results.rowsAffected); if (results.rowsAffected > 0) {
                                        console.log('Results', results); if (results.rowsAffected > 0) {
                                    Alert.alert('Success Alert',
                                        'Your Registration is Successful', [
                                        {
                                            text: 'Alright!',
                                            onPress: () =>
                                                that.props.navigation.navigate('HomeScreen'),
                                        },
                                    ],
                                        { cancelable: false }
                                    );
                                } else {
                                    alert('Registration has Failed');
                                }
                            }
                        );
                    });
                } else {
                    alert('Please mention Address');
                }
            } else {
                alert('Please mention Contact Number');
            }
        } else {
            alert('Please mention Name');
        }
    };
    render() {
        return (
            <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
                <ScrollView keyboardShouldPersistTaps="handled">
                    <KeyboardAvoidingView behavior="padding"
                        style={{ flex: 1, justifyContent: 'space-between' }}>
                        <CustomTextinput
                            placeholder="Enter Name here"
                            onChangeText={user_name => this.setState({ user_name })} style={{ padding: 10 }}
                        />
                        <CustomTextinput
                            placeholder="Enter Contact No here"
                            onChangeText={user_contact => this.setState({
                                user_contact
                            })}
                            maxLength={10} keyboardType="numeric" style={{ padding: 10 }}
                        />
                        <CustomTextinput
                            placeholder="Enter Address here"
                            onChangeText={user_address => this.setState({
                                user_address
                            })}
                            maxLength={225} numberOfLines={5} multiline={true}
                            style={{ textAlignVertical: 'top', padding: 10 }}
                        />
                        <CustomButton
                            title="Click to Submit" customClick={this.register_user.bind(this)}
                        />


                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    }
}