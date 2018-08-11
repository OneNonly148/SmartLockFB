import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: ''};
  }
  save(){
    Alert.alert('Saving');
    firebase.firestore().collection('users').add({name: 'steve'});
  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          style={{height:40, width: 200}}
          placeholder="Email"
          textContentType="emailAddress"
          onChangeText={(name)=>this.setState({name})}
        />
        <Button
          style={{height:40, width: 200}}
          onPress={this.save.bind(this)}
          title="Submit"
          color="#808080"
        />
      </View>
    );
  }
}

export default createStackNavigator({
  Register: { screen: Register },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
