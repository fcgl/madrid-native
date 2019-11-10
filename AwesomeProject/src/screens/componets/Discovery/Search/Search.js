import React, {Component} from 'react';
import {
    Animated,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import DiscoveryHeader from "../DiscoveryHeader";
import CategorySelection from "../Recommended/CategorySelection";
import Feather from "react-native-vector-icons/Feather";
import Product from "../Products/Product";
import ListOfProducts from "../Products/ListOfProducts";
import {RECOMMENDED_PRODUCTS} from "../../../../redux/actions/Types/productTypes";
import {connect} from "react-redux";
import {fetchFeaturedPosts} from "../../../../redux/actions/forumActions";
import {searchProducts, disableError, resetSearch} from "../../../../redux/actions/searchActions";
import {AlertHelper} from "../../../../../pages/AlertHelper";
import SearchProducts from "./SearchProducts";
import DefaultSearchScreen from "./DefaultSearchScreen";

class Search extends Component {
    state = {
        categories: [{'name': 'Beverages', id: 1},{'name': 'Fruit', id: 2},{'name': 'Vegetables', id: 3},{'name': 'Snacks', id: 4}],
        recentSearchHistory: [{name: 'Banana', id: 1}, {name: 'coca cola', id: 2}, {name: 'doritoz', id: 3}],
        search: ''
    };

    componentDidUpdate() {
        if (this.props.reduxState.hasError) {
            AlertHelper.show('error', 'Error', this.props.reduxState.errorMessage);
        }
    }

    _updateSearch = (key) => {
        if (this.props.reduxState.hasError) {
            this.props.disableError();
        }
        this.setState({search: key});
    };

    _startSearch = () => {
        this.props.searchProducts(this.state.search);
    };

    toggleSearch = () => {

        if (this.props.reduxState.isLoading) {
            return (
                <View style={{flex: 10, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                    <ActivityIndicator/>
                </View>
                )
        }

        if (this.props.reduxState.searchResultsObtained) {
            return (
                <SearchProducts
                    reduxState={this.props.reduxState}
                />
            )
        }

        return (
              <DefaultSearchScreen
                  recentSearchHistory={this.state.recentSearchHistory}
                  categories={this.state.categories}
                  searchProducts={this.props.searchProducts}
              />
           )
    };

    _goBackAndReset = () => {
        this.props.resetSearch();
        this.props.navigation.goBack()
    };

    render() {

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#4395BF'}}>
                <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
                    <View style={{flexDirection: 'row', flex: 1, backgroundColor: 'white',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,}}>
                           <View style={{flex: 1, paddingLeft: 5, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                               <TouchableOpacity onPress={() => this._goBackAndReset()}>
                                   <Feather name={'x'} style={{fontSize: 18, color: '#797979'}}/>
                               </TouchableOpacity>
                           </View>
                           <View style={{flex: 10, justifyContent: 'center', paddingLeft: 5}}>
                                <TextInput
                                    onChangeText={(text) => this._updateSearch(text)}
                                    value = {this.state.search}
                                    placeholder = "Search..."
                                        style={{fontSize: 20, fontFamily: 'Avenir'}}
                                    onSubmitEditing={() => this._startSearch()}
                                />
                           </View>
                    </View>
                    {this.toggleSearch()}
                </View>

            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        reduxState: state.searchProduct
    }
};

export default connect(mapStateToProps, {searchProducts, disableError,resetSearch})(Search);

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

