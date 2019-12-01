import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Explore from './screens/Explore'
import Discovery from './screens/Discovery'
import Profile from './screens/Profile'
import Forum from './screens/Forum'
import Trips from './screens/Trips'
import SavedItems from './screens/componets/Profile/SavedItems'
import ShoppingLists from './screens/componets/Profile/ShoppingLists'
import ProfileSaved from './screens/componets/Profile/RewardSummary/ProfileSaved'
import ProfileTrophies from './screens/componets/Profile/RewardSummary/ProfileTrophies'
import BestDeals from "./screens/componets/Discovery/BestDeals";
import Nearby from "./screens/componets/Discovery/Nearby";
import Top from "./screens/componets/Forum/Top";
import New from "./screens/componets/Forum/New";
import Post from "./screens/componets/Forum/Post/Post";
import CreatePost from "./screens/componets/Forum/Post/CreatePost";
import Search from "./screens/componets/Discovery/Search/Search";
import IndividualShoppingList from "./screens/componets/Profile/ShoppingLists/IndividualShoppingList";


const ProfileStack = createStackNavigator({
    Profile: { screen: Profile },
    SavedItems: { screen: SavedItems },
    ShoppingLists: {screen: ShoppingLists},
    ProfileTrophies: {screen: ProfileTrophies},
    ProfileSaved: {screen: ProfileSaved},
    IndividualShoppingList: {screen: IndividualShoppingList}
    },     {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    cardShadowEnabled: false,
    transitionConfig: () => ({
        transitionSpec: {
            duration: 0,
        },
    }),
});

const DiscoveryStack = createStackNavigator({
    Discovery: {screen: Discovery},
    BestDeals: {screen: BestDeals},
    Nearby: {screen: Nearby},
    Search: {screen: Search}
    },     {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    cardShadowEnabled: false,
    transitionConfig: () => ({
        transitionSpec: {
            duration: 0,
        },
    }),
});

const ForumStack = createStackNavigator({
    Forum: {screen: Forum},
    Top: {screen: Top},
    New: {screen: New},
    Post: {screen: Post},
    CreatePost: {screen: CreatePost}
    },     {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    cardShadowEnabled: false,
    transitionConfig: () => ({
        transitionSpec: {
            duration: 0,
        },
    }),
});

const AirbnbTabs = createBottomTabNavigator({
    Explore: {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: 'HOME',
            tabBarIcon: ({tintColor}) => (
                <FontAwesome name="home" color={tintColor} size={24}/>
            )
        }
    },
    Discovery: {
        screen: DiscoveryStack,
        navigationOptions: {
            tabBarLabel: 'DISCOVERY',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-star-outline" color={tintColor} size={24}/>
            )
        }
    },
    Trips: {
        screen: Trips,
        navigationOptions: {
            tabBarLabel: 'TRIPS',
            tabBarIcon: ({tintColor}) => (
                <MaterialCommunityIcons name="barcode-scan" color={tintColor} size={24}/>

            )
        }

    },
    Forum: {
        screen: ForumStack,
        navigationOptions: {
            tabBarLabel: 'FORUM',
            tabBarIcon: ({tintColor}) => (
                <MaterialCommunityIcons name="message-outline" color={tintColor} size={24}/>
            )
        }

    },
    Profile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({tintColor}) => (
                <MaterialIcons name="person-outline" color={tintColor} size={24}/>
            )
        },
    },
}, {
    tabBarOptions: {
        activeTintColor: '#4395BF',
        inactiveTintColor: 'grey',
        style: {
            backgroundColor: 'while',
            borderTopWidth: 0,
            //Shadow will not work on Android
            shadowOffset: {width:5, height:3},
            shadowColor: 'black',
            shadowOpacity: 0.1,
            elevation: 5
        }
}
});

const Test = createAppContainer(createSwitchNavigator ( {
        App: AirbnbTabs,
    }, {
        initialRouteName: 'App',
    }

));

export default Test;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});