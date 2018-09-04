'use strict'
import React from 'react';
import { StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  FlatList,
  Image,
  AsyncStorage,
  ScrollView
} from 'react-native';
import Ws from '@adonisjs/websocket-client'



const NAME = '@realDonaldTrump';
const CHANNEL = 'Random';
const AVATAR =
  'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg';

  export default class ChatView extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          mensajes:[],
          mensaje:''
      }
    }




    render(){
      
        return(
            <View style={styles.container}>

                <ScrollView>
                                  
				           {this.MostrarMsj()}
				         </ScrollView>

                <KeyboardAvoidingView behavior="padding">
                <View style={styles.footer}>
                    <TextInput
                    value={this.state.mensaje}
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Type something nice"
                    onChangeText={(text) => this.setState({ mensaje: text })}
                    />
                    <TouchableOpacity onPress={() => this.GuardarMensajes()}>
                    <Text style={styles.send}>Send</Text>
                    </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
      </View>
        )
    }

    componentDidMount(){
      this.recuperandoValores();
    }

     async MostrarMsj() {
      var idUsuario = await AsyncStorage.getItem('id_usuario')
      return this.state.mensajes.map((x, index) => {
          if(idUsuario==x.id_usuario){
            return( 
              <View style={styles.rowDer} >
              <Text style={styles.message}>{x.mensajes}</Text>
              </View>
      )
          }else{
            return( 
              <View style={styles.rowIzq}>
              <Text style={styles.message}>{x.mensajes}</Text>
              </View>
      )
          }
        
      })
  }
     async recuperandoValores(){
      var idUsuario = await AsyncStorage.getItem('id_usuario')
      var idUsuario2 = await AsyncStorage.getItem('id_usuario2')
      var UserArray = [idUsuario,idUsuario2]
      UserArray.sort()
      var ArrayUsers = UserArray.join('_')    
      
      
      fetch('http://192.168.43.151:3333/chats/'+ArrayUsers,{
         method: 'GET',
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
         this.setState({
          mensajes:responseJson
           }, function(){})
      }).catch((error) =>{
         console.error(error);
       });
     }

    
     async GuardarMensajes(){
    
      var fromData = new FormData
      var idusuario = await AsyncStorage.getItem('id_usuario')

      var idUsuario = await AsyncStorage.getItem('id_usuario')
      var idUsuario2 = await AsyncStorage.getItem('id_usuario2')
      var UserArray = [idUsuario,idUsuario2]
      UserArray.sort()
      var ArrayUsers = UserArray.join('_')  

      fromData.append('mensaje', this.state.mensaje)
      fromData.append('id_usuario', idusuario)
      fromData.append('UsersArray', ArrayUsers)

      try{         
        let response = await fetch('http://192.168.43.151:3333/chats', {
            method: 'POST',
            body: fromData,
            });
            this.state.mensajes.push(this.state.mensaje)
            this.componentDidMount()
        }catch(error){
            console.log(error)
        }
    }

    ws;
    canal;


}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    row: {
      flexDirection: 'row',
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#eee'
    },
    avatar: {
      borderRadius: 20,
      width: 40,
      height: 40,
      marginRight: 10
    },
    rowText: {
      flex: 1
    },
    message: {
      fontSize: 18
    },
    sender: {
      fontWeight: 'bold',
      paddingRight: 10
    },
    footer: {
      flexDirection: 'row',
      backgroundColor: '#eee'
    },
    input: {
      paddingHorizontal: 20,
      fontSize: 18,
      flex: 1
    },
    send: {
      alignSelf: 'center',
      color: 'lightseagreen',
      fontSize: 16,
      fontWeight: 'bold',
      padding: 20
    },
    rowIzq:{
      fontWeight: 'bold',
      paddingRight: 10

    },
    rowDer:{
      fontWeight: 'bold',
      paddingLeft: 10,
      alignItems: 'flex-end'

    },


  });