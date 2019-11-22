import * as React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import SignIn from './SignIn';
import SignUp from './SignUp';

import Icon from '@expo/vector-icons/Ionicons';

export default class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSignIn: true };
  }

  gotoSignIn(){
    this.setState({ isSignIn: true });
  }

  signIn (){
    this.setState({ isSignIn : true });
  }

  signUp (){
    this.setState({ isSignIn : false });
  }

  render() {

    const { isSignIn } = this.state;
    const mainJSX = isSignIn ? <SignIn /> : <SignUp gotoSignIn={this.gotoSignIn.bind(this)}/>;

    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <TouchableOpacity>
            <Icon
              style={{ paddingLeft: 10, padding: 5, color: '#fff' }}
              onPress={() => this.props.navigation.navigate('List')}
              name="md-arrow-back"
              size={30}
            />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>Wanting a Cake</Text>
          <Image
            source={{
              uri:
                'http://downloadicons.net/sites/default/files/love--cake-icon-95356.png',
            }}
            style={{ height: 30, width: 30 }}
          />
        </View>
        {mainJSX}
        <View style={styles.controlStyle}>
          <TouchableOpacity style={styles.signInStyle} onPress={this.signIn.bind(this)}>
            <Text style={isSignIn ? styles.activeStyle : styles.inactiveStyle}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpStyle} onPress={this.signUp.bind(this)}>
            <Text style={!isSignIn ? styles.activeStyle : styles.inactiveStyle}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EBA77',
    padding: 30,
    justifyContent: 'space-between',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontSize: 27,
  },
  controlStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  inactiveStyle: {
    color: '#D7D7D7',
  },
  activeStyle: {
    color: '#3EBA77',
  },
  signInStyle: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 1,
    alignText: 'center',
  },
  signUpStyle: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: 1,
  },
  
});

//alignItems: 'center', justifyContent:'center'
