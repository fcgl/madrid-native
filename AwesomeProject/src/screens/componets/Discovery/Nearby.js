import React, {Component} from 'react';
import {Animated, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import DiscoveryHeader from "./DiscoveryHeader";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

class Nearby extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#4395BF'}}>
                <View style={{flex: 1}}>
                    <ScrollView style={{backgroundColor: '#F9F9F9'}} scrollEventThrottle={16} onScroll={Animated.event([{nativeEvent: {contentOffset: {y:this.scrollY}}}])}>
                        <DiscoveryHeader headerNav={[{nav: 'Discovery', title: 'Recommended'}, {nav: 'BestDeals', title: 'Deals'}, {nav: 'Nearby', title: 'Nearby'}]} headerName={'Discovery'} iconName={'search'} navigation={this.props.navigation}/>
                        <Text>
                            TBD until MapView is figured out
                        </Text>
                    </ScrollView>

                </View>

                <Text>
                    Nearby
                </Text>
            </SafeAreaView>


        );
    }
}

export default Nearby;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

