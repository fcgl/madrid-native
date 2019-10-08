import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {fetchUserDetails} from "../../../../redux/actions/Profile/UserPoint/userPointActions";

class RewardSummaryTabs extends Component {

    componentDidMount = async () => {
        this.props.fetchUserDetails();
    };

    render() {
        const isProfile = () => {
            return this.props.navigation.state.routeName === 'Profile';
        };

        const isProfileSaved = () => {
            return this.props.navigation.state.routeName === 'ProfileSaved';
        };

        const isProfileTrophies = () => {
            return this.props.navigation.state.routeName === 'ProfileTrophies';
        };

        return (
            <View>
                <View>
                    <Text>
                        {this.props.reduxState.errorMessage}
                    </Text>
                </View>
            <View style={{flexDirection: 'row', marginTop: 25, height: 60}}>
                <View style={{flex: 2}}>

                </View>

                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('ProfileTrophies')}}
                    style={[isProfileTrophies() ? styles.RewardBoxContentActive : styles.RewardBoxContentInactive, {backgroundColor: isProfileTrophies() ? '#4395BF' : 'white'}]}
                >
                    <Text style={[isProfileTrophies() ? styles.TextActive : styles.TextInactive, {fontSize: 14}]}>{this.props.reduxState.trophyCount}</Text>
                    <Text style={[isProfileTrophies() ? styles.TextActive : styles.TextInactive, {fontSize: 11}]}>Trophies</Text>
                </TouchableOpacity>

                <View style={{flex: 1}}>

                </View>

                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('Profile')}}
                    style={[isProfile() ? styles.RewardBoxContentActive : styles.RewardBoxContentInactive, {backgroundColor: isProfile() ? '#ECD58D' : 'white'}]}
                >
                    <Text style={[isProfile() ? styles.TextActive : styles.TextInactive, {fontSize: 14}]}>{this.props.reduxState.totalPoints}</Text>
                    <Text style={[isProfile() ? styles.TextActive : styles.TextInactive, {fontSize: 11}]}>Points</Text>
                </TouchableOpacity>
                <View style={{flex: 1}}>

                </View>

                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('ProfileSaved')}}
                    style={[isProfileSaved() ? styles.RewardBoxContentActive : styles.RewardBoxContentInactive, {backgroundColor: isProfileSaved() ? '#79A977' : 'white'}]}
                >
                    <Text style={[isProfileSaved() ? styles.TextActive : styles.TextInactive, {fontSize: 14}]}>34,675</Text>
                    <Text style={[isProfileSaved() ? styles.TextActive : styles.TextInactive, {fontSize: 11}]}>Budget</Text>
                </TouchableOpacity>
                <View style={{flex: 2}}>

                </View>
            </View>
            </View>
        );
    }
}


const mapStateToProps = state => {
    return {
        reduxState: state.userPointReducer
    }
};

export default connect(mapStateToProps, {fetchUserDetails})(RewardSummaryTabs);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    RewardBoxContentActive: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        borderRadius: 2
    },
    RewardBoxContentInactive: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    TextActive: {
        color: 'white',
        fontWeight: '700'
    },
    TextInactive: {
        color: '#797979',
        fontWeight: '500'
    },
    pointsInactive: {

    },
    pointsActive: {

    }

});

