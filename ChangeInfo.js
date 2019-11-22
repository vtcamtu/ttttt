import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
export default class ChangeInfo extends React.Component {
  constructor(props) {
    super(props);
    //const { name, address, phone } = props.user;
    this.state = {
      txtName: '',
      txtAddress: '',
      txtPhone: '',
    };
  }

  updateInfo = () =>{
    const {txtName, txtAddress, txtPhone} = this.state;
    
  }

  render() {
    const { txtName, txtAddress, txtPhone } = this.state;
    return (
      <View style={styles.wrapper}>
   
        <View style={styles.body}>
        <TouchableOpacity style = {{position: 'absolute', top : 44, left: 16}} onPress = {() => this.props.navigation.navigate('List')}>
            <Text style = {{color : 'black', fontSize : 17}}>BACK</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            autoCapitalize="none"
            value={txtName}
            onChangeText={text =>
              this.setState({ ...this.state, txtName: text })
            }
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your address"
            autoCapitalize="none"
            value={txtAddress}
            onChangeText={text =>
              this.setState({ ...this.state, txtAddress: text })
            }
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your phone number"
            autoCapitalize="none"
            value={txtPhone}
            onChangeText={text =>
              this.setState({ ...this.state, txtPhone: text })
            }
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.signInContainer} onPress = {this.updateInfo}>
            <Text style={styles.signInTextStyle}>CHANGE YOUR INFOMATION</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
  },
  textInput: {
    height: 45,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: '#2ABB9C',
    borderWidth: 1,
  },
  signInTextStyle: {
    color: '#FFF',
    fontWeight: '600',
    paddingHorizontal: 20,
  },
  signInContainer: {
    marginHorizontal: 20,
    backgroundColor: '#2ABB9C',
    borderRadius: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
});
