import React from 'react';
import { View, StyleSheet, Platform, Image, Text} from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import Loading from './Loading'
import HomeScreen from './HomeScreen'
import Login from './Login'
import Register from './Register'
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7yhJtk0ino5-hzZILOfx4fVEsws4qzPU",
  authDomain: "smartlock-fc432.firebaseapp.com",
  databaseURL: "https://smartlock-fc432.firebaseio.com",
  projectId: "smartlock-fc432",
  storageBucket: "smartlock-fc432.appspot.com",
  messagingSenderId: "813331204757"
}

firebase.initializeApp(firebaseConfig);

const App = createSwitchNavigator(
  {
    Loading,
    HomeScreen,
    Login,
    Register
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App;
