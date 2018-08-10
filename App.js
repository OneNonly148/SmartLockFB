import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB7yhJtk0ino5-hzZILOfx4fVEsws4qzPU",
  authDomain: "smartlock-fc432.firebaseapp.com",
  databaseURL: "https://smartlock-fc432.firebaseio.com",
  projectId: "smartlock-fc432",
  storageBucket: "smartlock-fc432.appspot.com",
  messagingSenderId: "813331204757"
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    firebase.initializeApp(firebaseConfig);
    firebase.database().ref('data').set({
      somedata: 12
    });
    firebase.database().ref('data').on('value', (snapshot) => {
      this.datas = {value: snapshot.val().somedata};
    });
    this.state = {email: '', password: ''};
  }
  _onPressButton(){
    Alert.alert('Logging in');
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 51, height: 51 }} source={require('./assets/img/16480.png')}/>
        <TextInput
          style={{height:40, width: 200}}
          placeholder="Email"
          textContentType="emailAddress"
          onChangeText={(email)=>this.setState({email})}
        />
        <TextInput
          style={{height:40, width: 200}}
          textContentType="password"
          placeholder="Password"
          onChangeText={(password)=>this.setState({password})}
        />
        <Button
          style={{height:40, width: 200}}
          onPress={this._onPressButton}
          title="Login"
          color="#808080"
        />
        <Text>{this.datas.value}|{this.state.email}|{this.state.password}</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
});
