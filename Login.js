import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: ''};
  }
  login(email,pass){
    Alert.alert('Logging in');
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(()=>{
      this.props.navigation.navigate('Loading');
    });

  }
  signup(){
    Alert.alert('Signing up');
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(()=>{
      var id = firebase.auth().currentUser;
      this.props.navigation.navigate('Register');
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>{this.state.email}|{this.state.password}</Text>
        <Image style={{ width: 51, height: 51 }} source={require('./assets/img/16480.png')}/>
        <TextInput
          autoCapitalize="none"
          style={{height:40, width: 200}}
          placeholder="Email"
          textContentType="emailAddress"
          onChangeText={(email)=>this.setState({email})}
        />
        <TextInput
          secureTextEntry
          style={{height:40, width: 200}}
          textContentType="password"
          placeholder="Password"
          onChangeText={(password)=>this.setState({password})}
        />
        <Button
          style={{height:40, width: 200}}
          onPress={this.login.bind(this)}
          title="Login"
          color="#808080"
        />
        <Button
          style={{height:40, width: 200}}
          onPress={this.signup.bind(this)}
          title="Sign Up"
          color="#808080"
        />
      </View>
    );
  }
}

export default createStackNavigator({
  Login: { screen: Login },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
