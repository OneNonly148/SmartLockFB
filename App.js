import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
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
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.datas.value}</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Iman should not shake anything though</Text>
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
