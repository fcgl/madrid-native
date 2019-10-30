import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ShoppingListComponent from "../../Profile/ShoppingLists/ShoppingListComponent";
import ListOfSavedItems from "../../Profile/SavedItems/ListOfSavedItems";
import ListOfProducts from "../Products/ListOfProducts";
import {RECOMMENDED_PRODUCTS} from "../../../../redux/actions/Types/productTypes";
class CategorySelection extends Component {

    state = {
        category: 1
    };

    _changeCategory = (key) => {
        this.setState({category: key})
    };


    render() {
        return (
            <View>
                <View style={{paddingLeft: 15, paddingBottom: 20}}>
                    <Text style={{fontFamily: 'Avenir', color: 'black', fontWeight: '800', fontSize: 12, paddingTop: 20, paddingBottom: 15}}> RECOMMENDATIONS FOR YOU</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{paddingRight: 10, flexDirection: 'row'}}>

                            <TouchableOpacity onPress={() => this._changeCategory(1)}>
                                <View style={[this.state.category === 1 ? styles.activeCategory : styles.inactiveCategory, {marginRight: 10, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3}]}>
                                    <Text style={[this.state.category === 1 ? styles.activeCategory : styles.inactiveCategory, {fontFamily: 'Avenir', fontSize: 12}]}>
                                        All
                                    </Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => this._changeCategory(2)}>
                                <View style={[this.state.category === 2 ? styles.activeCategory : styles.inactiveCategory, {marginRight: 10, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3}]}>
                                    <Text style={[this.state.category === 2 ? styles.activeCategory : styles.inactiveCategory, {fontFamily: 'Avenir', fontSize: 12}]}>
                                        Beverages
                                    </Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => this._changeCategory(3)}>
                                <View style={[this.state.category === 3 ? styles.activeCategory : styles.inactiveCategory, {marginRight: 10, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3}]}>
                                    <Text style={[this.state.category === 3 ? styles.activeCategory : styles.inactiveCategory, {fontFamily: 'Avenir', fontSize: 12}]}>
                                        Toiletries
                                    </Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </View>
                {/*<ListOfSavedItems/>*/}
                <ListOfProducts productType={RECOMMENDED_PRODUCTS}/>
            </View>
        );
    }
}

export default CategorySelection;

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


