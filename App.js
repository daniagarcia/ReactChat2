import React, {Component} from 'react';
import { AppRegistry,StyleSheet, Text,TextInput, View, Button } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import LoginView from './Views/LoginView'
import ChatView from './Views/ChatView'


class Home extends React.Component{
  static navigationOptions = ({navigation}) =>({
    //opciones para el stack nav
    
  });
  render(){
    return(
      <View style={{flex: 1, alignItems: 'center' , justifyContent: 'center'}}>
          <Text>Home</Text>
          <Button
          title='Go to ..'
          onPress={() => {this.props.navigation.navigate('Details')}}
          />
      </View>
    );
  }
}

class Details extends React.Component{
  render(){
    const {goBack} = this.props.navigation;
    return(
      <View style={{flex: 1, alignItems: 'center' , justifyContent: 'center'}}>
        <Text>Detalles</Text>
        <Button
          title='Go Back ..'
          onPress={() =>{ this.props.navigation.goBack();
          }}
          />
      </View>
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
  Details: {screen: ChatView,
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

























// export default class App extends React.Component {
//   // constructor(proops){
//   //   super(props);
//   //   this.state= {text:''};
//   // }

//   render() {
//     return (
//       <View style={styles.general}>
      
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   prueba:{
//     flex:1,
//     backgroundColor:'#364575',
   
//   },
//   general:{
//     flex:1
//   },  
//   diseniocontent1:{
//     flex:1,
//     backgroundColor:'#787823'
//   },  
//   diseniocontent2:{
//     flex:2,
//     backgroundColor:'#123456'
//   },
//   textos:{
//     height: 40,   
//   }
// });
