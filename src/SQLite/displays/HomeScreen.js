import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import CustomButton from '../pages/CustomButton';
//import CustomText from '../pages/CustomText';

var db = openDatabase({ name: 'UserDatabase.db' });

export default class HomeScreen extends React.Component {
    
    constructor(props) {
        super(props); 
        //var that = this; 
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length); if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS table_user', []); txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                            []
                        );
                    }
                }
            );
        });
    }

    
    render() {
        return (
            <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
                <Text style={styles.text}>Example of React Native SQLite</Text>
                <CustomButton
                    title="User Registeration"
                    customClick={() =>
                        this.props.navigation.navigate('RegisterUser')}
                />
                <CustomButton
                    title="User Deletion"
                    customClick={() =>
                        this.props.navigation.navigate('DeleteUser')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#111825',
        fontSize: 19,
        marginBottom:'20%',
        alignSelf:'center'
    },
});