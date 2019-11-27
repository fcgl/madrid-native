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
    View,
    FlatList
} from 'react-native';
import ProfileHeader from "./componets/Profile/ProfileHeader"
import RewardSummaryTabs from "./componets/Profile/RewardSummary/RewardSummaryTabs"
import PointOverview from "./componets/Profile/RewardSummary/Points/PointOverview"
import AllPoints from "./componets/Profile/RewardSummary/Points/AllPoints";
import {connect} from "react-redux";
import {fetchUserPointHistory} from "../redux/actions/Profile/UserPoint/userPointActions";

class Profile extends Component {


    componentDidMount() {
        this.props.fetchUserPointHistory();
    }

    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#4395BF', flex: 1}}>
                        <View style={{backgroundColor: '#F9F9F9', flex: 1}}>
                            <View style={{flex: 3}}>
                                <ScrollView scrollEventThrottle={16} onScroll={Animated.event([{nativeEvent: {contentOffset: {y:this.scrollY}}}])}>
                                    <ProfileHeader navigation={this.props.navigation}/>
                                    <RewardSummaryTabs navigation={this.props.navigation}/>
                                    <PointOverview/>
                                </ScrollView>
                            </View>
                                <View style={{padding: 15}}>
                                    <Text style={{fontFamily: 'Avenir', fontSize: 12, fontWeight: '800', color: '#575757'}}>
                                        ALL POINTS
                                    </Text>
                                </View>
                            <View style={{flex: 2}}>
                            <FlatList
                                onEndReachedThreshold={0.1}
                                initialNumToRender={30}
                                data={this.props.reduxState.userPointHistory}
                                keyExtractor = {(item) => item.id + ''}
                                renderItem={({item}) =>
                                    <AllPoints
                                        key={item.id + ''}
                                        date={item.createdAt}
                                        type={item.action.type}
                                        points={item.action.points}
                                        name={item.description}
                                    />
                                }
                            />
                            </View>
                        </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        reduxState: state.userPointHistoryReducer
    }
};

export default connect(mapStateToProps, {fetchUserPointHistory})(Profile);

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

