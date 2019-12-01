import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import ShoppingList from './ShoppingList'
import {toggleTodo} from "../../../redux/actions";

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

//Connects the props to the TodoList
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)

