import React, {Component} from 'react';
import { View, StyleSheet, Text,TouchableOpacity,Image } from 'react-native';
import { withNavigation } from 'react-navigation';

class BackIcon extends Component{
  render(){
    return (
  <View style={{ padding: 5 }}>
    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
      <Image style={{height:25,width:25}} source={{uri: 'https://cdn4.iconfinder.com/data/icons/arrow-sets-2/32/left-arrow-ico-512.png'}} />
    </TouchableOpacity>
  </View>
    );
  }
}

export default withNavigation(BackIcon);
