import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

class HomeScreen extends React.Component {
  logout(){
    firebase.auth().signOut();
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          style={{height:40, width: 200}}
          onPress={this.logout}
          title="Sign Out"
          color="#808080"
        />
      </View>
    );
  }
}

export default createStackNavigator({
  Home: { screen: HomeScreen }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
