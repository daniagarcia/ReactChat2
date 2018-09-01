'use strict'
import React, {Component} from 'react';
import {View,TextInput,Text,StyleSheet,TouchableHighlight,Button}from 'react-native'
import logicaLogin from '../Backend/logicaLogin'
import {createStackNavigator} from 'react-navigation';

export default class LoginView extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textos}>Usuario</Text>
                <TextInput style={styles.cuadro}></TextInput>
                <Text style={styles.textos}>Contraseña</Text>
                <TextInput style={styles.cuadro}></TextInput>
                <TouchableHighlight  onPress={() => this.PeticionLogin()} style={styles.boton}>
                     <Text style={styles.textobonton}>LOGIN</Text>   
                    </TouchableHighlight>
            </View>
        )
    }

    async  PeticionLogin() {
        try {
            console.log("Entro")
          let response = await fetch(
            'http://192.168.1.130:3333/login'
          );          
          if(response != {}){
              alert('no exise el uusario')

          }else{
          this.props.navigation.navigate('Chats')
          let responseJson = await response.json();
          return responseJson.movies;
          }
        } catch (error) {
          console.error(error);
        }
      }
}



module.exports = LoginView



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    boton:{
        width:200,
        height:40,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:50,
        marginBottom:10,
        borderRadius:8,
        borderWidth:1,
        borderColor: 'purple'   
        
     },
    textobonton:{
        color:'purple'

    },
    textos:{
      fontSize:18  
    },
    cuadro:{
        width:300,
        height:40,
        marginTop:10,
        marginBottom:10
    }
})