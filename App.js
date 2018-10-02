import React from 'react';
import { 
  TextInput,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
  Button,
  TouchableOpacity,
  YellowBox
} 
from 'react-native';
import * as firebase from 'firebase';
import {createStackNavigator} from 'react-navigation';
import Kontrol from './kontrol.js';
import Login from './login.js'
YellowBox.ignoreWarnings(['Setting a timer']);


const RootRouter = createStackNavigator({
  Login: {
    screen: Login, navigationOptions: {title: 'Login'}
  },
  Kontrol: {
    screen: Kontrol, navigationOptions: {title: 'Kontrol'}
  },
})



export default class App extends React.Component {
componentDidMount() {

const config = {
    apiKey: "AIzaSyBq7ElJrtnkOeIGvtaA1ldp_Y8nEXemnjY",
    authDomain: "sentrygun-96213.firebaseapp.com",
    databaseURL: "https://sentrygun-96213.firebaseio.com",
    projectId: "sentrygun-96213",
    storageBucket: "sentrygun-96213.appspot.com",
    messagingSenderId: "126616946207"
}  
firebase.initializeApp(config);
}

state = {
  fontLoaded: false,
};


  render() {
    return ( <RootRouter/> );
  }
}