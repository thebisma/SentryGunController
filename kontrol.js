import React from 'react';
import {
  StyleSheet, 
  TextInput, 
  Text,
  Button, 
  View,
  TouchableOpacity,
  WebView,
  YellowBox
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import './socket.js'
YellowBox.ignoreWarnings(['Warning:']);
export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { text: "" }
  }

  onSubmitButtonTapped(test) {
    global.sendData(test)

  }

  render() {
    return (
        
      <View style={styles.container}>        
         <WebView
        source={{uri: 'http://www.ubermorgen.com/THE_BLACK_WEBSITE/'}}
        style={styles.containerdua}
          />
         
          <View style={styles.containerempat}>
         

          <View style={styles.containertiga}>
         
          <TouchableOpacity
                onPress={() => this.onSubmitButtonTapped("kiri")}
                style={styles.searchInput}>
                <Icon name="arrow-bold-left"
                  size={24} color="blue"
                  style={{ margin: 5 }}
                />
          </TouchableOpacity>
          <View>
          <TouchableOpacity
                onPress={() => this.onSubmitButtonTapped("atas")}
                style={styles.searchInput}>
                <Icon name="arrow-bold-up"
                  size={24} color="blue"
                  style={{ margin: 5 }}
                />
          </TouchableOpacity>

          <TouchableOpacity
                onPress={() => this.onSubmitButtonTapped("bawah")}
                style={styles.searchInput}>
                <Icon name="arrow-bold-down"
                  size={24} color="blue"
                  style={{ margin: 5 }}
                />
          </TouchableOpacity>
         
          </View>
          <TouchableOpacity
                onPress={() => this.onSubmitButtonTapped("kanan")}
                style={styles.searchInput}>
                <Icon name="arrow-bold-right"
                  size={24} color="blue"
                  style={{ margin: 5 }}
                />
          </TouchableOpacity>
         
          <View>
          <TouchableOpacity
                onPress={() => this.onSubmitButtonTapped("tembak")}
                style={styles.searchInput}>
                 <Text style = {styles.submitButtonText}> Fire </Text>  
          </TouchableOpacity> 
          <TouchableOpacity
                onPress={() => this.onSubmitButtonTapped("on")}
                style={styles.searchInput}>
                 <Icon name="flashlight"
                  size={24} color="blue"
                  style={{ margin: 5 }}
                /> 
          </TouchableOpacity> 
          </View>

          </View>

          
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containertiga: {
    flex: 1,
    flexDirection: 'row',
   // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerempat: {
    flex: 1,
    flexDirection: 'column',
   // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerdua: {
   // backgroundColor: '#9966ff',
    width: 800, 
    height: 10
  },
  submitButtonText:{ 
    color: '#fff',
    textAlign: 'center',
   },
  searchInput: {
    borderWidth: 2,
    //color:'#fff',
    borderColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
