import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import ShoppingList from "../Todo/ShoppingList";
import AddItem from "../Todo/AddItem";

class ShoppingListView extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#F9F9F9', paddingTop: 20}}>
                <View style={{flex: 1}}>
                    <ShoppingList shoppingListId={this.props.shoppingListId}/>
                </View>
                <AddItem shoppingListId={this.props.shoppingListId}/>
            </View>
        );
    }
}

export default ShoppingListView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

