import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  StackActions,
  NavigationAction,
} from 'react-navigation';
import Cart from './Cart';
export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params.data,
    };
  }
  static navigationOptions = {
    headerTitle: 'Detail',
    headerTitleStyle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 23,
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 / 3 }}>
          <Image style={styles.image} source={{ uri: this.state.data.hinh }} />
        </View>
        <View
          style={{
            flex: 4 / 3,
            paddingTop: 180,
            alignItems: 'center',
            padding: 20,
            flexDirection: 'column',
          }}>
          <Text style={styles.title}>{this.state.data.ten}</Text>
          <Text style={[styles.subTitle, { color: '#990000' }]}>
            Price: {this.state.data.gia}
          </Text>
          <Text style={{ fontSize: 18, padding: 10 }}>
            Decription: {this.state.data.mota}
          </Text>
        </View>
        <View style={styles.button}>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Cart')} style={{alignItems:'center'}}>
              <Text
                style={{
                  backgroundColor: '#cc6600',
                  color: '#fff',
                  height: 40,
                  width: 130,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                View Your Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffecec',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
  },
  subTitle: {
    fontSize: 16,
  },
  button: {
    padding: 30,
    flex: 1 / 3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
