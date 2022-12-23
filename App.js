import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import Items from "./src/items";
import AddItems from "./src/additems";


const Tab = createBottomTabNavigator();

const App =() => {
  return (
    <NavigationContainer>
    <Tab.Navigator
    tabBarOptions={{
      labelStyle: {fontSize:15},
      activeTintColor:'blue',
      inactiveTintColor:'grey',
    }}>
      <Tab.Screen name="View" component={Items} headerShown={false}/>
      <Tab.Screen name="Add New" component={AddItems}/>
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;

