import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import shoppingCartStore from './stores/Cart';
import {observer} from 'mobx-react/native';

@observer
class ShoppingCartIcon extends Component{
  render(){
    return (
  <View style={{ padding: 5 }}>
  {shoppingCartStore.totalProducts > 0 && (
    <View
      style={{
        position: 'absolute',
        height: 28,
        width: 28,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 117, 26,0.8)',
        right: 15,
        bottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
      }}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>
        {shoppingCartStore.totalProducts}
      </Text>
    </View>
  )}
    <Icon
      name="ios-cart"
      size={30}
      onPress={() => this.props.navigation.navigate('Cart')}
    />
  </View>
    );
  }
}

export default withNavigation(ShoppingCartIcon);
