import React, {Component} from 'react';
import {Animated, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Search extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', padding: 10,
                backgroundColor: 'white', marginHorizontal: 20,
                shadowOffset: {width: 0, height: 0},
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS === 'android' ? 30 : null
            }}
            >
                <Icon name="ios-search" size={20}/>
                <TextInput
                    underlineColorAndroid={"transparent"}
                    placeholder={"Try New Delhi"}
                    placeHolderTextColor={"grey"}
                    style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
                />
            </View>
        );
    }
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

