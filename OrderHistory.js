import * as React from 'react';
import {
  Text,
  View
} from 'react-native';

export default class OrderHistory extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text>
          OrderHistory
        </Text>
      </View>
    );
  }
}