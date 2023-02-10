import React from 'react';
import {
    Button
    , Text
    , View
    , Alert
} from 'react-native';
import Customtextinput from '../pages/CustomTextinput'; 
import CustomButton from '../pages/CustomButton';
import { openDatabase } from 'react-native-sqlite-storage'; 

var db = openDatabase({ name: 'UserDatabase.db' });

export default class DeleteUser extends React.Component {
    constructor(props) {
        super(props); this.state = {
            input_user_id: '',
        };
    }
    deleteUser = () => {
        var that = this;
        const { input_user_id } = this.state; db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM table_user where user_id=?', [input_user_id],
                (tx, results) => {
                    console.log('Results', results.rowsAffected); if (results.rowsAffected > 0) {
                        Alert.alert('Success Alert',
                            'Successfully deleted User', [
                            {
                                text: 'Alright!',
                                onPress: () => that.props.navigation.navigate('HomeScreen'),
                            },
                        ],
                            { cancelable: false }
                        );
                    } else {
                        alert('Please mention a valid User Id');
                    }
                }
            );
        });
    };
    render() {
        return (
            <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
                <Customtextinput
                    placeholder="Enter User Id"
                    onChangeText={input_user_id => this.setState({ input_user_id })}
                    style={{ padding: 11 }}
                />
                <CustomButton
                    title="Click to Delete User"
                    customClick={this.deleteUser.bind(this)}
                />
            </View>
        );
    }
}