import * as React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  DeviceEventEmitter
} from 'react-native';
import {saveData} from './Storage'
import global from './global';

import signIn from './api/signIn';

export default class SignIn extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount(){
  
  }

  onSignIn = () =>{
   const { email, password } = this.state;
   const {navigation} = this.props;
   
   signIn(email, password)
   .then(res => {
    global.onSignIn(res.user);
    this.props.updateUi();
    saveData('dataUser',JSON.stringify(res.user)).then(() => {
      console.log('save data user success!');
    })
   })
   .catch(err => console.log(err));
  }

  render(){

    const { email, password } = this.state;

    return(
      <View style = {styles.container}>
        <TextInput 
          style={styles.inputStyle} 
          placeholder="Enter your email" 
          value = {email}
          onChangeText = { text => this.setState({ email : text }) }
          />
        <TextInput 
          style={styles.inputStyle} 
          placeholder="Enter your password"
          value = {password}
          onChangeText = { text => this.setState({ password : text })}
          secureTextEntry
        />
        <TouchableOpacity style={styles.bigButton} onPress={this.onSignIn}>
          <Text style={styles.buttonText}>SIGN IN NOW</Text>
        </TouchableOpacity>
        <View/>
        <TouchableOpacity onPress={this.props.gotoSignUp}>
        <Text style={styles.registerText} >Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  registerText:{
    color: 'white',
    marginTop: 16,
    fontSize: 13,
    fontWeight: 'italic',
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  inputStyle: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 30,
    width: 300,
  },
  bigButton: { 
    height: 50,
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '400',
  },
});