import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Emoji from 'react-native-emoji';
import {connect} from "react-redux";
import {fetchUserTrophies} from "../../../../../redux/actions/Profile/UserTrophy/userTrophyActions";
import PostSummary from "../../../Forum/components/PostSummary";


class AllTrophies extends Component {

    componentDidMount() {
        this.props.fetchUserTrophies();
    }

    render() {
        return (
            <View>
                <Text>
                    {this.props.reduxState.errorMessage}
                </Text>
                <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal: 20, paddingVertical: 15}}>
                        ALL TROPHIES
                    </Text>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', backgroundColor: 'white'}}>
                        {
                            this.props.reduxState.userTrophies.map((userTrophy) => (
                                <View key={userTrophy.id} style={{width: '33%', paddingVertical: 20}}>
                                    <View style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                                        <Emoji name={userTrophy.trophy.emojiName} style={{fontSize: 26}} />

                                        <Text style={{fontSize: 10, color: '#575757', fontFamily: 'Avenir'}}>{userTrophy.trophy.numberOfPoints} points</Text>

                                    </View>
                                </View>
                            ))

                        }

                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        reduxState: state.userTrophies
    }
};

export default connect(mapStateToProps, {fetchUserTrophies})(AllTrophies);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

