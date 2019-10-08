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
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileHeader from "./ProfileHeader";
import ListOfSavedItems from "./SavedItems/ListOfSavedItems";

class SavedItems extends Component {
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

                        <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
                            <View style={{paddingBottom: 20}}>
                                <Text style={{fontFamily: 'Avenir', fontSize: 12, fontWeight: '900', color: '#575757'}}>ALL ITEMS</Text>
                            </View>
                                <ListOfSavedItems/>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default SavedItems;

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

