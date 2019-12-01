import React, {Component} from 'react';
import {
    Animated,
    Image, ImageBackground,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProfileHeader from "./ProfileHeader";
import AllPoints from "./RewardSummary/Points/AllPoints";
import ShoppingListComponent from "./ShoppingLists/ShoppingListComponent";
import AntDesign from "react-native-vector-icons/AntDesign";

class ShoppingLists extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#4395BF'}}>
                <View style={{flex: 1}}>
                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event([{nativeEvent: {contentOffset: {y:this.scrollY}}}])}
                        style={{backgroundColor: '#F9F9F9'}}
                    >
                        <ProfileHeader navigation={this.props.navigation}/>

                        <View style={{paddingHorizontal: 15}}>
                            <View style={{paddingVertical: 17}}>
                                <Text style={{fontFamily: 'Avenir', fontSize: 12, fontWeight: '800', color: '#575757'}}>
                                    SHOPPING LISTS
                                </Text>
                            </View>
                            <ShoppingListComponent navigation={this.props.navigation}/>

                        </View>
                    </ScrollView>
                    <View style={{shadowOpacity: 0.3,shadowColor: '#575757', margin: 20, bottom: 0,right: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: '#4293BD', height: 42, width: 42, borderRadius: 42/2}}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('IndividualShoppingList', {
                                shoppingListId: null,
                                name: null,
                                totalPrice: null,
                            })}
                        >
                            <AntDesign name={'plus'} style={{color: 'white', fontSize: 24, fontWeight: '900'}}/>
                        </TouchableOpacity>

                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default ShoppingLists;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerNavActive: {
        fontSize: 13,
        color: 'white',
        fontWeight: '600'
    },
    headerNavInactive: {
        fontSize: 13,
        color: '#A1CADF',
        fontWeight: '600'
    }

});


