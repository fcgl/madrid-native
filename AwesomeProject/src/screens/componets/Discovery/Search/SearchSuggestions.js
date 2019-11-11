import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class SearchSuggestions extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Search Suggestions</Text>
            </View>
        );
    }
}

export default SearchSuggestions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

