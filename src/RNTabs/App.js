import * as React from 'react';
// import {
//     createMaterialTopTabNavigator, createAppContainer,
// } from 'react-navigation';
import { createAppContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import FirstPage from './FirstPage'; 
import SecondPage from './SecondPage';

// const TabScreen = createMaterialTopTabNavigator(
//     {
//         Home: { screen: FirstPage }, Chats: { screen: SecondPage },
//     },
//     {
//         tabBarPosition: 'top',
//         swipeEnabled: true,
//         animationEnabled: true, tabBarOptions: {
//             activeTintColor: '#f0f0f0', inactiveTintColor: '#fff7f7', style: {
//                 backgroundColor: '#a8395e',
//             },
//             labelStyle: {
//                 textAlign: 'center',
//             },
//             indicatorStyle: {
//                 borderBottomColor: '#a6ff6e', borderBottomWidth: 2,
//             },
//         },
//     }
// );

const TabScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="FirstPage" component={FirstPage}/>
            <Tab.Screen name="SecondPage" component={SecondPage}/>
        </Tab.Navigator>
    )
}

const App = createStackNavigator({
    TabScreen: {
        screen: TabScreen, navigationOptions: {
            headerStyle: {
                backgroundColor: '#369c95',
            },
            headerTintColor: '#FFFFFF', title: 'Example of Tab',
        },
    },
});
export default createAppContainer(App);