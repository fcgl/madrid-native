import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddTodo from '../Todo/AddTodo';
import VisibleTodos from '../Todo/VisibleTodos';

class Todo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <VisibleTodos/>
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

