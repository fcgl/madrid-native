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
                            <ShoppingListComponent/>

                        </View>
                    </ScrollView>
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


