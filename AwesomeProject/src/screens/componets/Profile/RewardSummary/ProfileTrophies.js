import React, {Component} from 'react';
import {
    Animated,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import ProfileHeader from "../ProfileHeader"
import RewardSummaryTabs from "./RewardSummaryTabs"
import AllTrophies from "./Trophies/AllTrophies";

class ProfileTrophies extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#4395BF'}}>
                <View style={{flex: 1}}>
                    <ScrollView style={{backgroundColor: '#F9F9F9'}} scrollEventThrottle={16} onScroll={Animated.event([{nativeEvent: {contentOffset: {y:this.scrollY}}}])}>
                        <ProfileHeader navigation={this.props.navigation}/>
                        <RewardSummaryTabs navigation={this.props.navigation}/>
                        <AllTrophies/>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default ProfileTrophies;

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

