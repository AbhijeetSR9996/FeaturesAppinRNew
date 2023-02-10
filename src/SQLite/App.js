import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './displays/HomeScreen';
import RegisterUser from './displays/RegisterUser';
import DeleteUser from './displays/DeleteUser';

const Stack = createStackNavigator();

function MainStackNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="RegisterUser" component={RegisterUser} />
          <Stack.Screen name="DeleteUser" component={DeleteUser} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default MainStackNavigation;


