import React, {Component} from 'react';
import { AppRegistry,StyleSheet, Text,TextInput, View } from 'react-native';



import Login from './Views/LoginView'
import Chat from './Views/ChatView'
export default class App extends React.Component {
  // constructor(proops){
  //   super(props);
  //   this.state= {text:''};
  // }

  render() {
    return (
      <View style={styles.general}>
      <Login></Login>
      {/* <View style={styles.diseniocontent1}></View>
      <View style={styles.diseniocontent2}>
      <TextInput  onChangeText={(text) => this.setState({text})}> </TextInput>
      </View>
       */}
      {/* <Claseprueba name='Dania'/>
      <Claseprueba name='asd'/>
      <Claseprueba name='cris'/> */}
        {/* <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make asd automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text> */}
      </View>
    );
  }
}

class Claseprueba extends Component{
  render(){
    return(
      <Text>Hello {this.props.name}</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prueba:{
    flex:1,
    backgroundColor:'#364575',
   
  },
  general:{
    flex:1
  },  
  diseniocontent1:{
    flex:1,
    backgroundColor:'#787823'
  },  
  diseniocontent2:{
    flex:2,
    backgroundColor:'#123456'
  },
  textos:{
    height: 40,   
  }
});
