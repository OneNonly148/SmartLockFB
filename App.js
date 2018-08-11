<<<<<<< HEAD
import React from 'react';
import { View, StyleSheet, Platform, Image, Text} from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import Loading from './Loading'
import HomeScreen from './HomeScreen'
import Login from './Login'
import Register from './Register'
import * as firebase from 'firebase';
import 'firebase/firestore';
=======
import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'
>>>>>>> 3fe746fc6addec9d774c01d9cb9d9060bde5734b

// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'

<<<<<<< HEAD
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
=======
// create our app's navigation stack
const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App
>>>>>>> 3fe746fc6addec9d774c01d9cb9d9060bde5734b
