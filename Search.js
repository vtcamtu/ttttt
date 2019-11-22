import * as React from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { observer } from 'mobx-react/native';
import { SearchBar } from 'react-native-elements';
@observer
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }
  componentDidMount() {
    return fetch(
      'https://gist.githubusercontent.com/VuTuNhi/12e01b8e3c0fcc39d78d6661534abe7c/raw/c98cdb8d1b158275ece7e02232e13a5eebde3d97/database'
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.TenBanh
        ? item.TenBanh.toUpperCase()
        : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    const { product } = this.props;
    const { isHover } = this.state;
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
        />
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <View style={styles.container}>
              <View style={{ flex: 3 }}>
                <Image style={styles.image} source={{ uri: item.Hinh }} />
              </View>
              <View style={{ flex: 8, padding: 10 }}>
                <Text style={styles.title}>{item.TenBanh}</Text>
                <Text style={styles.title}>{item.Gia} d</Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Detail', {
                      data: {
                        id: item.ID,
                        ten: item.TenBanh,
                        gia: item.Gia,
                        mota: item.MoTa,
                        hinh: item.Hinh,
                      },
                    })
                  }>
                  <Image
                    source={{
                      uri:
                        'https://pbs.twimg.com/profile_images/547901444708241408/JKjU008S.png',
                    }}
                    style={{ height: 20, width: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    marginBottom: 8,
    marginTop: 8,
  },
  title: {
    fontSize: 14,
  },
});
