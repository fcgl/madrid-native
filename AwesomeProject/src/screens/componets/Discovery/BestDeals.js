import React, {Component} from 'react';
import {Animated, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DiscoveryHeader from "./DiscoveryHeader";
import Category from "../Explore/Category";
import ListOfSavedItems from "../Profile/SavedItems/ListOfSavedItems";
import ListOfProducts from "./Products/ListOfProducts";
import {RECOMMENDED_PRODUCTS} from "../../../redux/actions/Types/productTypes";

class BestDeals extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#4395BF'}}>
                <View style={{flex: 1}}>
                    <ScrollView style={{backgroundColor: '#F9F9F9'}} scrollEventThrottle={16} onScroll={Animated.event([{nativeEvent: {contentOffset: {y:this.scrollY}}}])}>
                        <DiscoveryHeader headerNav={[{nav: 'Discovery', title: 'Recommended'}, {nav: 'BestDeals', title: 'Deals'}, {nav: 'Nearby', title: 'Nearby'}]} headerName={'Discovery'} iconName={'search'} navigation={this.props.navigation}/>
                        <View>
                            <View style={{paddingVertical: 15, paddingLeft: 15}}>
                                <Text style={{fontSize: 12, fontWeight: '600'}}>
                                    BEST DEALS FOR YOU
                                </Text>
                            </View>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={{paddingRight: 10, flexDirection: 'row'}}>

                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}

                                    >
                                        <Category
                                            imageUri={require('../../../assets/StirFry.jpg')}
                                            name="Home"
                                        />
                                        <Category
                                            imageUri={require('../../../assets/experiences.jpg')}
                                            name="Experiences"
                                        />
                                        <Category
                                            imageUri={require('../../../assets/restaurant.jpg')}
                                            name="Restaurant"
                                        />
                                    </ScrollView>

                                </View>
                            </ScrollView>
                            <View style={{paddingVertical: 20, paddingLeft: 15}}>
                                <Text style={{fontSize: 12, fontWeight: '600'}}>
                                    ALL OFFERS
                                </Text>
                            </View>
                            <ListOfProducts productType={RECOMMENDED_PRODUCTS}/>

                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}

export default BestDeals;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

