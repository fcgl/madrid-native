// import React from 'react';
//
// import AddCity from './AddCity/AddCity';
// import Cities from './Cities/Cities';
// import City from './Cities/City';
// import SignUp from './SignUp';
// import {colors} from './theme';
//
// import {createStackNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
//
// import {
//   ActivityIndicator,
//   AsyncStorage,
//   Button,
//   StatusBar,
//   StyleSheet,
//   View,
// } from 'react-native';
//
//
// const CitiesNav = createStackNavigator(
//   {
//     Cities: {screen: Cities},
//     City: {screen: City}
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#4395BF',
//       },
//       headerTintColor: '#4395BF',
//     }
//   },
// );
//
// const Tabs = createBottomTabNavigator({
//   Home: {screen: CitiesNav},
//   Start: {screen: AddCity},
//   Forum: {screen: AddCity},
//   Profile: {screen: AddCity},
// });
//
// const AuthStack = createStackNavigator({
//   'SignUp': SignUp
// });
//
// class AuthLoadingScreen extends React.Component {
//   constructor() {
//     super();
//     this._bootstrapAsync();
//   }
//
//   // Fetch the token from storage then navigate to our appropriate place
//   _bootstrapAsync = async () => {
//     const userToken = await AsyncStorage.getItem('userToken');
//
//     // This will switch to the App screen or Auth screen and this loading
//     // screen will be unmounted and thrown away.
//     this.props.navigation.navigate(userToken ? 'App' : 'Auth');
//   };
//
//   // Render any loading content that you like here
//   render() {
//     return (
//         <View style={styles.container}>
//           <ActivityIndicator />
//           <StatusBar barStyle="default" />
//         </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
//
// // const App = createAppContainer(CitiesNav);
// const App = createAppContainer(createSwitchNavigator ( {
//       AuthLoading: AuthLoadingScreen,
//       App: Tabs,
//       Auth: AuthStack
//   }, {
//     // initialRouteName: 'AuthLoading',
//     initialRouteName: 'App',
//     }
//
// ));
// export default App;
