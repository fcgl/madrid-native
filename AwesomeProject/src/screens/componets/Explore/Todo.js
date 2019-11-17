import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ShoppingList from '../Todo/ShoppingList';

class Todo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ShoppingList/>
            </View>
        );
    }
}

export default Todo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    }
});

