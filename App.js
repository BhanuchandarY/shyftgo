import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TextInput,CheckBox } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';




import LoginScreen from './src/LoginScreen';
import CreateScreen from './src/CreateScreen';
import IntroScreen from './src/IntroScreen';
import ForgotPasswordScreen from './src/ForgotPasswordScreen';
import AccountSettingScreen from './src/AccountSettingScreen';
import SavedLocationScreen from './src/SavedLocationScreen';
import SavedBookingsScreen from './src/SavedBookingsScreen';



import CreateAnAccuntScreen from './src/CreateAnAccuntScreen';



const App = createStackNavigator({

  LoginScreen: { screen: LoginScreen ,
    navigationOptions: {
      header: null,
    }
                
                }, 

  CreateScreen: { screen: CreateScreen,
    navigationOptions: {
      header: null,
    }
   }, 
  CreateAnAccuntScreen: { screen: CreateAnAccuntScreen, 
    navigationOptions: {
      header: null,
    }
  
  }, 
  IntroScreen: { screen: IntroScreen,
    navigationOptions: {
      header: null,
      
    }
  
  }, 
  AccountSettingScreen:{
    screen: AccountSettingScreen,
    navigationOptions: {
      header: null,

    }

  },
  SavedLocationScreen:{
    screen: SavedLocationScreen,
    navigationOptions: {
      header: null,
    }
  },
  SavedBookingsScreen:{
    screen: SavedBookingsScreen,
    navigationOptions: {
      header: null,
    }
  },

  ForgotPasswordScreen: { screen: ForgotPasswordScreen,
    navigationOptions: {
      header: null,
      // title: 'Forgot Password',
      // headerTintColor: '#ffffff',
      // headerStyle: {
      //   backgroundColor: '#3b2f66',
      //   borderBottomColor: '#ffffff',
        
      // },
      // headerTitleStyle: {
      //   fontSize: 18,
      //   alignSelf:"center",
        
      // },  
    }
  }


},
{
  initialRouteName: 'IntroScreen',
}
);
export default createAppContainer(App);

