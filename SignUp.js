import * as React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';

import register from './api/register';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      rePassword: '',
    };
  }

  onSuccess() {
    Alert.alert(
      'Notice',
      'Sign Up successful!',
      [
        {
          text: 'OK',
          onPress: this.props.gotoSignIn()
        }
      ],
      { cancelable: false }
    );
  }

  onFail() {
    Alert.alert(
      'Notice',
      'Email has been used by other',
      [
        {
          text: 'OK',
          onPress: () => this.removeEmail.bind(this)
        }
      ],
      { cancelable: false }
    );
  }

   removeEmail(){
    this.setState({ email: '' });
  }

  registerUser() {
    const { name, email, password } = this.state;
    register(email, name, password)
    .then(res => {
      if(res === 'THANH_CONG') return this.onSuccess();
      this.onFail();
    });
  }

  render() {
    return (
      <View style  = {styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your name"
          value={this.state.name}
          onChangeText={text => this.setState({ name: text })}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your email"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your password"
          value={this.state.password}
          secureTextEntry
          onChangeText={text => this.setState({ password: text })}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Re-enter your password"
          value={this.state.rePassword}
          secureTextEntry
          onChangeText={text => this.setState({ rePassword: text })}
        />
        <TouchableOpacity
          style={styles.bigButton}
          onPress={this.registerUser.bind(this)}>
          <Text style={styles.buttonText}>SIGN UP NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '400',
  },
});
