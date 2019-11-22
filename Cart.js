import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import shoppingCartStore from './stores/Cart';
import { observer } from 'mobx-react/native';
import CartItem from './components/cartItem';
type Props = {};
@observer
class Cart extends Component<Props> {
  state = {};
  removeAll = () => {
    shoppingCartStore.removeList();
    alert('Thanks for order');
  }
  render() {
    const { products } = shoppingCartStore;
    if (shoppingCartStore.totalProducts === 0) {
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Your Cart Is Empty</Text>
        </View>
      );
    }
    return (
      <View style={styles.MainContainer}>
        <ScrollView>
          {products.map(product => (
            <CartItem key={product.id} product={product} />
          ))}
        </ScrollView>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: '#007872',
            height: 35,
          }}>
          <TouchableOpacity
            onPress={this.remove}
            style={{ justifyContent: 'center' }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                bottom: 7,
              }}>
              Check out
            </Text>
          </TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              right: 5,
              height: 20,
              width: 90,
              alignItems: 'center',
              backgroundColor: 'lightgray',
              bottom: 7,
            }}>
            <TouchableOpacity onPress={this.removeAll}>
              <Text>{shoppingCartStore.totalAmount}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
export default Cart;
