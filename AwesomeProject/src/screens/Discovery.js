import React, {Component} from 'react';
import {
    Animated,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import ProfileHeader from "./componets/Profile/ProfileHeader";
import RewardSummaryTabs from "./componets/Profile/RewardSummary/RewardSummaryTabs";
import PointOverview from "./componets/Profile/RewardSummary/Points/PointOverview";
import AllPoints from "./componets/Profile/RewardSummary/Points/AllPoints";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import DiscoveryHeader from "./componets/Discovery/DiscoveryHeader";
import Category from "./componets/Explore/Category";
import CategorySelection from "./componets/Discovery/Recommended/CategorySelection";

class Discovery extends Component {

    state = {
        category: 1
    };

    _changeCategory = (key) => {
        this.setState({category: key})
    };

    render() {

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#4395BF'}}>
                <View style={{flex: 1}}>
                    <ScrollView style={{backgroundColor: '#F9F9F9'}} scrollEventThrottle={16} onScroll={Animated.event([{nativeEvent: {contentOffset: {y:this.scrollY}}}])}>
                        <DiscoveryHeader headerNav={[{nav: 'Discovery', title: 'Recommended'}, {nav: 'BestDeals', title: 'Deals'}, {nav: 'Nearby', title: 'Nearby'}]} headerName={'Discovery'} iconName={'search'} navigation={this.props.navigation}/>
                        <CategorySelection/>
                    </ScrollView>
                </View>
            </SafeAreaView>

        );
    }
}

export default Discovery;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activeCategory: {
        backgroundColor: '#4395BF',
        color: 'white'
    },
    inactiveCategory: {
        backgroundColor: 'white',
        color: '#4395BF'
    }
});

