'use strict'
import React, {Component} from 'react';
import {View,TextInput,Text,StyleSheet,FlatList,AsyncStorage, ActivityIndicator}from 'react-native'


export default class UsuariosGrupos extends Component{

    constructor(props){
        super(props);
        this.state = {
            users:[],
            groups:[],
            isLoading:true
        }
      }

    render(){
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator></ActivityIndicator>
              </View>
            )
          }
      
          return(
            <View style={styles.container}>
              <FlatList 
                   data={this.state.users}
                   renderItem={({item}) => <Text onPress={() => this.abrirConversacion(item.id, item.username)}>{item.username}</Text>}
              />
            </View>
          );
    }

    componentDidMount(){
         return fetch('http://192.168.43.151:3333/users',{
            method: 'GET',
         })
         .then((response) => response.json())
         .then((responseJson) => {
            this.setState({
                isLoading: false,
                users: responseJson.users,
              }, function(){})
         }).catch((error) =>{
            console.error(error);
          });
        }
        
        abrirConversacion(idUsuario, username){
            AsyncStorage.setItem('id_usuario2',idUsuario.toString())
            AsyncStorage.setItem('username_remitente',username)
            this.props.navigation.navigate('Chats') 
        }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
})

