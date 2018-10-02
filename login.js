import React from 'react';
import { 
  TextInput,
  Text,
  AppRegistry,
  Platform,
  StyleSheet,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  YellowBox

} 
  from 'react-native';

import {createStackNavigator} from 'react-navigation'
import * as firebase from 'firebase';


//var user = firebase.auth().currentUser;
var navigate
export default class App extends React.Component {

constructor(props){
  super(props)
  this.state =({
    email:'',
    password:''
  })
}

componentDidMount() {
  navigate = this.props.navigation
}

signUpUser = (email,password) => {
  try {
    if (this.state.password.length < 5){
      alert("Minimal 5 karakter")
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
    alert("Sign Up Sukses")
  }
  catch (error) {
    console.log(error.toString())
  }
}

loginUser = (email,password) => {

      firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
        console.log(user)
        //firebase.auth().currentUser.sendEmailVerification()
         alert("Sukses login")
         navigate.navigate("Kontrol") 
      })
}

  render() {
    //
    return (
        
        <View style={styles.top}>
      <KeyboardAvoidingView style={styles.formContainer} behavior="position">

        <View style={styles.topdua}>
        <TextInput style = {styles.searchInput} 
        underlineColorAndroid = "transparent" 
        placeholder ='ID'
        placeholderTextColor = '#fff'
        autoFocus = {true}
        //keyboardType={email-address}
        onChangeText={(text) => this.setState({email: text})}
        />
        </View>
        
        <View>
        <TextInput style = {styles.searchInput} 
        underlineColorAndroid = "transparent" 
        placeholder ='Pass'
        autoFocus = {true}
        secureTextEntry={true}
        onChangeText={(text) => this.setState({password: text})}
        />
        </View>

        <View>
        <TouchableOpacity
              onPress={() => this.loginUser(this.state.email,this.state.password)}//
              style = {styles.searchInput}>
               <Text style = {styles.submitButtonText}> Login </Text>
        </TouchableOpacity>
        </View>
      </KeyboardAvoidingView> 
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
  flex: 1,
  width: '100%',
  height: '100%',
  },
  top: {
    marginTop: 1,
    height: '100%',
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
    topdua: {
  

  },
  searchInput:{
    padding: 10,
    marginTop: 15,
    height:40,
    width:'100%',
    borderWidth:2,
    //alignItems: 'center'
    //color:'#fff',
    borderColor:'#fff',
    borderRadius:30,
  },
  searchInput2:{
    marginTop: 15,
    height:40,
    width:'100%',
    borderWidth:2,
    //alignItems: 'center'
    //color:'#fff',
    borderColor:'#fff',
    borderRadius:30,
  },
  submitButtonText:{ 
    color: '#fff',
    textAlign: 'center',

   },
   keyboard:{
     flex: 1,
     justifyContent: 'space-between',
   },
   formContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
