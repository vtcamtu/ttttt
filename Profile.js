import * as React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  DeviceEventEmitter,
  TextInput,
} from 'react-native';

import { getData } from './Storage';
import global from './global';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Change from './ChangeInfo';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogedIn: false,
      isSignIn: true,
      isSignUp: false,
      user: null,
      email: '',
      password: '',
    };
    global.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn(user) {
    console.log(user);
    this.setState({ user });
  }

  updateUi = () => {
    this.setState({
      isSignIn: false,
    });
  };

  gotoSignUp() {
    this.setState({
      isSignUp: true,
      isSignIn: false,
    });
  }
  backToSignIn = () => {
    this.setState({
      isSignUp: false,
      isSignIn: true,
    });
  };

  render() {
    console.log(JSON.stringify(this.state.user));
    if (this.state.isSignIn) {
      return (
        <View style={styles.container}>
          <Image
            style={styles.profileStyle}
            source={{
              uri:
                'http://probiz-integrasi.com/wp-content/uploads/2018/04/person-icon.png',
            }}
          />
          <SignIn
            updateUi={this.updateUi}
            gotoSignUp={() => this.gotoSignUp()}
          />
        </View>
      );
    } else if (this.state.isSignUp) {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={{ position: 'absolute', top: 16, left: 16 }}
            onPress={this.backToSignIn}>
            <Text style={{ color: 'white', fontSize: 16 }}>BACK</Text>
          </TouchableOpacity>
          <Image
            style={styles.profileStyle}
            source={{
              uri:
                'http://probiz-integrasi.com/wp-content/uploads/2018/04/person-icon.png',
            }}
          />
          <SignUp />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Image
          style={styles.profileStyle}
          source={{
            uri:
              'http://probiz-integrasi.com/wp-content/uploads/2018/04/person-icon.png',
          }}
        />
        <View style={styles.loginContainer}>
          <Text style={styles.userName}>
            {this.state.user ? this.state.user.name : ''}
          </Text>
          <View>
            <TouchableOpacity
              style={styles.btnSignInStyles}
              onPress={() => this.props.navigation.navigate('Change')}>
              <Text style={styles.btnTextSignIn}>Change Info</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnSignInStyles}
              onPress={this.backToSignIn}>
              <Text style={styles.btnTextSignIn}>Sign Out</Text>
            </TouchableOpacity>
          </View>
          <View />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B089',
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileStyle: {
    width: 130,
    height: 130,
    marginVertical: 30,
  },
  btnSignInStyles: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 5,
    width: 200,
    marginBottom: 10,
    paddingLeft: 10,
  },
  btnTextSignIn: {
    color: '#34B089',
    fontSize: 15,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 16,
    fontWeight: 'bold',
  },
});
