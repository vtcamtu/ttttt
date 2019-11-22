import  React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  StackActions,
  NavigationAction,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import Authentication from './Authentication';
import ChangeInfo from './ChangeInfo';
import OrderHistory from './OrderHistory';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';
import Cart from './Cart';
import Search from './Search';
import Profile from './Profile';
import ShoppingCartIcon from './ShoppingCartIcon';
import BackIcon from './BackIcon';
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
const ListScreenTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: ListScreen,
    },
    Cart: {
      screen: Cart,
    },
    Search: {
      screen: Search,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerStyle: {
          backgroundColor: '#007872',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 23,
        },
      };
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Cart') {
          iconName = `ios-cart`;
        } else if (routeName === 'Search') {
          iconName = `ios-search`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
const ListScreenStackNavigator = createStackNavigator(
  {
    ListScreenTabNavigator: ListScreenTabNavigator,
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerRight: <ShoppingCartIcon />,
        headerStyle: {
          backgroundColor: '#007872',
        },
        headerLeft: <BackIcon />
      };
    },
  }
);
const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: ListScreenStackNavigator,
  },
});
const AppSwitchNavigator = createSwitchNavigator(
  {
    List: {
      screen: AppDrawerNavigator,
    },
    Detail: {
      screen: DetailScreen,
    },
    Authen: {
      screen: Authentication,
    },
    Change: {
      screen: ChangeInfo,
    },
    Order: {
      screen: OrderHistory,
    },
  },
  {
    initialRouteName: 'List',
  }
);
const AppContainer = createAppContainer(AppSwitchNavigator);
