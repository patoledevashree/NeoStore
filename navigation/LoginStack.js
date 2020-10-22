import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import ForgetPassword from '../screens/ForgetPassword';
import SetPassword from '../screens/SetPassword';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();


/**
 * @author Devashree Patole
 * @description This file provides the stack navigation of the
 *              Login ,ForgotPassword and SetPassword screens.
 * @returns JSX of the stack navigation
 */
export default function LoginStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#2874F0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
           marginLeft:80,
            fontSize: 25
          },
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} color='white'  onPress={() => navigation.openDrawer()}></Icon.Button>) 
        }} />
      <Stack.Screen name='ForgetPassword' component={ForgetPassword}
        options={{
          title: 'Forget Password',
          headerStyle: {
            backgroundColor: '#2874F0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {

            fontSize: 25
          },
        }}
      />
       <Stack.Screen name='SetPassword' component={SetPassword}
        options={{
          title: 'Set Password',
          headerStyle: {
            backgroundColor: '#2874F0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {

            fontSize: 25
          },
        }}
      />
    </Stack.Navigator>
  )
}