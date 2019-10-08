import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";

class DiscoveryHeader extends Component {
    render() {
        const isRoute = (expectedRoute) => {
            const currentRoute = this.props.navigation.state.routeName;
            return currentRoute === expectedRoute
        };

        const getIcon = () => {
          if (this.props.iconName !== null) {
              return(
                  <View style={{position: 'absolute', top: 0, left: null, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                      <Fontisto name={this.props.iconName} size={20} style={{color: '#D9EAF2'}}/>
                  </View>
              )
          }
        };
        return (
            <View style={{backgroundColor: '#4395BF', paddingBottom: 15, marginTop: Platform.OS === 'android' ? 30 : null}}>
                <View style={{alignItems: 'center'}}>
                    <View style={{paddingRight: 15, marginBottom: 20, paddingBottom: 30, flex: 1, width: '90%'}}>
                        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'Avenir', color: 'white', fontSize: 22, fontWeight: '400'}}>
                                {this.props.headerName}
                            </Text>
                        </View>
                        {getIcon()}
                    </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                    <View style={{flexDirection: 'row', paddingTop: 3, width: '90%', flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity  onPress={() => { this.props.navigation.navigate(this.props.headerNav[0].nav)}}>
                                <Text style={isRoute(this.props.headerNav[0].nav) ? styles.headerNavActive : styles.headerNavInactive}>{this.props.headerNav[0].title}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity  onPress={() => { this.props.navigation.navigate(this.props.headerNav[1].nav)}}>
                                <Text style={isRoute(this.props.headerNav[1].nav) ? styles.headerNavActive : styles.headerNavInactive}>{this.props.headerNav[1].title}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity  onPress={() => { this.props.navigation.navigate(this.props.headerNav[2].nav)}}>
                                <Text style={isRoute(this.props.headerNav[2].nav) ? styles.headerNavActive : styles.headerNavInactive}>{this.props.headerNav[2].title}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default DiscoveryHeader;

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

