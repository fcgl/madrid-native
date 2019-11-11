import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from "react-native-vector-icons/Feather";

class DefaultSearchScreen extends Component {

    _startSearch = (name) => {
        this.props.searchProducts(name);
    };

    render() {
        return (
            <View style={{flex: 10}}>
                <View style={{paddingTop: 20, paddingHorizontal: 15}}>
                    <Text style={{fontSize: 12, color: '#1F1F1F', fontWeight: '600'}}>
                        SUGGESTED CATEGORIES
                    </Text>

                    <View style={{paddingVertical: 10, flexDirection: 'row', flexWrap: 'wrap'}}>
                        {
                            this.props.categories.map((category) => (
                                <TouchableOpacity style={{marginBottom: 7}} key={category.id}>
                                    <View style={[styles.activeCategory,{marginRight: 10, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3}]}>
                                        <Text style={[styles.activeCategory, {fontFamily: 'Avenir', fontSize: 12}]}>
                                            {category.name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }

                    </View>
                </View>
                <View style={{paddingTop: 20, paddingHorizontal: 15}}>
                    <Text style={{fontSize: 12, color: '#1F1F1F', fontWeight: '600'}}>
                        RECENT SEARCHES
                    </Text>
                    {
                        this.props.recentSearchHistory.map((searchHistory) => (
                            <TouchableOpacity style={{paddingLeft: 10}} key={searchHistory.id} onPress={()=>this._startSearch(searchHistory.name)}>
                                <View style={{borderColor: '#EEEEEE', borderTopWidth: 1, borderBottomWidth: 1, paddingVertical: 10, flexDirection: 'row'}}>
                                    <Text style={{color: '#6B6B6B'}}>
                                        {searchHistory.name}
                                    </Text>
                                    <View style={{flex: 1, justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end'}}>
                                        <Feather
                                            name={'arrow-up-right'}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    }

                </View>
            </View>
        );
    }
}

export default DefaultSearchScreen;

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

