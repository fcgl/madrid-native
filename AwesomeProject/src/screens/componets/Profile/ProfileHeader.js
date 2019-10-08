import React, {Component} from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

class ProfileHeader extends Component {

    render() {
        const isProfile = () => {
            const currentRoute = this.props.navigation.state.routeName;
            const profileRoutes = ['Profile', 'ProfileSaved', "ProfileTrophies"];
            return profileRoutes.includes(currentRoute);
        };

        return (
            <View style={{backgroundColor: '#4395BF', paddingBottom: 15}}>
                <View style={{flexDirection: 'row', paddingBottom: 10,
                    marginTop: Platform.OS === 'android' ? 30 : null
                }}
                >
                    <View style={{paddingLeft: 25, paddingRight: 20}}>
                        <Image source={require('../../../assets/home.jpg')}
                               style={{ height: 60, width: 60,
                                   resizeMode: 'cover', borderRadius: 30}}/>
                    </View>

                    <View style={{paddingTop: 7}}>
                        <Text style={{color: 'white', fontSize: 22, fontWeight: '300'}}>John Smith</Text>
                        <View style={{flexDirection: 'row', paddingTop: 2}}>
                            <MaterialIcons name={"location-on"} style={{color: '#B5D5E6', fontSize: 15}}/>
                            <Text style={{color: 'white', fontSize: 12, marginLeft: 4, fontWeight: '300'}}>Madrid, Spain</Text>
                        </View>
                    </View>

                    <View style={{flex: 2}}>
                        {/* EMPTY SPACE*/}
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="settings-outline" size={23} style={{color: '#D9EAF2', fontWeight: '0'}}/>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 3}}>
                    <View>
                        <TouchableOpacity  onPress={() => { this.props.navigation.navigate('Profile')}}>
                            <Text style={isProfile() ? styles.headerNavActive : styles.headerNavInactive}>Reward Summary</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity  onPress={() => { this.props.navigation.navigate('SavedItems')}}>
                            <Text style={this.props.navigation.state.routeName === 'SavedItems' ? styles.headerNavActive : styles.headerNavInactive}>Saved Items</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity  onPress={() => { this.props.navigation.navigate('ShoppingLists')}}>
                            <Text style={this.props.navigation.state.routeName === 'ShoppingLists' ? styles.headerNavActive : styles.headerNavInactive}>Shopping Lists</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default ProfileHeader;

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

