import React, {Component} from 'react';
import { AppRegistry,StyleSheet, Text,TextInput, View, Button } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import LoginView from './Views/LoginView'
import ChatView from './Views/ChatView'


class Home extends React.Component{

  render(){
    return(
      <Apps />
    );
  }
}

const Apps = createStackNavigator({ 
  Home: {screen: LoginView,  
    navigationOptions: ({navigation}) => ({
      title: 'Login',
      headerTitleStyle: { color: 'purple'},
      headerStyle: {
        // backgroundColor: 'purple'
         
      },
    }),  
  },
  Chats: {screen: ChatView,
    navigationOptions: ({navigation}) => ({
      title: 'Chat',
      headerTitleStyle: { color: 'purple'},
      headerStyle: {
        // backgroundColor: 'purple'
         }
      }),
    },
}); 

export default Apps;