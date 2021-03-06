import React, {Component} from 'react';
import {Animated, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Product from "../Products/Product";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import {resetSearch} from "../../../../redux/actions/searchActions";

class SearchProducts extends Component {
    _allProducts = () => {
        if (this.props.reduxState.products.length === 0) {
            return (
                <View style={{flex: 10, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                    {/*<AntDesign name={"frowno"} style={{fontSize: 80, color: 'grey'}}/>*/}
                    <FontAwesome5 name={"sad-cry"} style={{fontSize: 80, color: 'grey'}}/>

                    <Text style={{color: 'grey', fontFamily: 'Avenir', fontSize: 18, paddingTop: 10}}>No Results Found</Text>
                    <TouchableOpacity onPress={() => this.props.resetSearch()}>
                        <Text style={{color: '#4395BF', fontFamily: 'Avenir', fontSize: 18, paddingTop: 10}}>Go Back ⟲</Text>
                    </TouchableOpacity>
                </View>

                )
        } else {
            return(
                <View style={{flex: 10}}>

                <ScrollView style={{backgroundColor: '#F9F9F9'}} scrollEventThrottle={16} onScroll={Animated.event([{nativeEvent: {contentOffset: {y:this.scrollY}}}])}>
                <View>
                    {
                        this.props.reduxState.products.map((product) => (
                            <Product
                                key={product._id + '-' + product.name}
                                price={product.retail_price.toFixed(2)}
                                category={product.categories[0]}
                                name={product.name}
                                extra={"VIEW ALL"}
                            />
                        ))
                    }
                </View>
            </ScrollView>
                </View>

            )
        }
    };


    render() {
        return (
                    this._allProducts()
        );
    }
}

export default SearchProducts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

