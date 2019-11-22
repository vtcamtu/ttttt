import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  StackActions,
  NavigationAction,
} from 'react-navigation';
import Swiper from 'react-native-web-swiper';
import ProductCard from './components/ProductCard';
import productsStore from './stores/Products';
type Props = {};
class ListScreen extends Component<Props>{
  state = {};
  render() {
    const {data} = productsStore;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 3 / 10 }}>
          <Swiper>
            <View style={styles.slideContainer}>
              <Image
                source={{
                  uri:
                    'https://www.bettergiftflowers.com/wp-content/uploads/2017/07/cake-banner.jpg',
                }}
                style={{ height: 150, width: 360 }}
              />
            </View>
            <View style={styles.slideContainer}>
              <Image
                source={{
                  uri:
                    'https://www.cakesandsugarcraftsupplies.com/wp-content/uploads/2015/08/classes-banner-1.jpg',
                }}
                style={{ height: 150, width: 360 }}
              />
            </View>
            <View style={styles.slideContainer}>
              <Image
                source={{
                  uri:
                    'https://alpendelicious.com.au/sites/default/files/Carousel_Images/Banner_BirthdayCakes.jpg',
                }}
                style={{ height: 150, width: 360 }}
              />
            </View>
          </Swiper>
        </View>
        <Text
          style={{ backgroundColor: '#ffe6e6', fontSize: 17, height: 17 }}
        />
        <View style={styles.container}>
          <ScrollView>
            {data.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default ListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 7 / 10,
  },
  slideContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
