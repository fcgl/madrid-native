import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {connect} from "react-redux";
import {fetchUserDetails} from "../../../../../redux/actions/Profile/UserPoint/userPointActions";

class PointOverview extends Component {
    render() {
        return (
            <View>
                <View style={{paddingLeft: 20, paddingTop: 30, paddingBottom: 15}}>
                    <Text style={{fontFamily: 'Avenir', fontWeight: '900', fontSize: 12, color: '#575757'}}>
                        OVERVIEW
                    </Text>
                </View>
                <View style={{backgroundColor: 'white', flexDirection: 'row', paddingVertical: 20}}>
                    <View style={{flex: 1}}>

                    </View>
                    <View style={{borderRadius: 3, flex: 4, backgroundColor: '#62A196', height: 90, flexDirection: 'row'}}>
                        <View style={{flex: 3, height: 90, justifyContent: 'center', paddingLeft: 15}}>
                            {/*<FontAwesome5 style={{color: 'white'}} name={'ticket-alt'}/>*/}
                            <Text style={{fontFamily: 'Avenir', color: 'white', fontSize: 26, fontWeight: '700'}}>20</Text>
                            <Text style={{fontFamily: 'Avenir', color: 'white', fontSize: 11, fontWeight: '300'}}>Until Next</Text>
                            <Text style={{fontFamily: 'Avenir',color: 'white', fontSize: 11, fontWeight: '300'}}>Raffle Entry</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <MaterialCommunityIcons style={{color: 'white', paddingTop: 12, fontSize: 18}} name={'ticket-outline'}/>
                        </View>
                    </View>
                    <View style={{flex: 1}}>

                    </View>
                    <View style={{flex: 2, height: 90, justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'Avenir',fontSize: 24, fontWeight: '700', color: '#797979'}}>{this.props.reduxState.tournamentPoints}</Text>
                        <Text style={{fontFamily: 'Avenir',fontSize: 11, color: '#797979', fontWeight: '300'}}>This Month</Text>
                    </View>
                    <View style={{flex: 1}}>

                    </View>
                    <View style={{flex: 2, height: 90, justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'Avenir',fontSize: 24, fontWeight: '700', color: '#797979'}}>{this.props.reduxState.totalPoints}</Text>
                        <Text style={{fontFamily: 'Avenir',fontSize: 11, color: '#797979', fontWeight: '300'}}>Total</Text>
                    </View>
                    <View style={{flex: 1}}>

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

export default connect(mapStateToProps)(PointOverview);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

