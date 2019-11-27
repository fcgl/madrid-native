import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AllPoints from "../RewardSummary/Points/AllPoints";
import ShoppingListSummary from "./ShoppingListSummary";

class ShoppingListComponent extends Component {
    render() {
        const shoppingLists = [{"active": true, "totalPrice": 0.0, "summary": "Coca cola, Banana",
            "userId": 1, "updatedDate": 1574872900515, "createdDate": 1574872415372,
            "name": "default", "id": 1}];
        return (
            <View>
                <FlatList
                    onEndReachedThreshold={0.1}
                    initialNumToRender={30}
                    data={shoppingLists}
                    keyExtractor = {(item) => item.id + ''}
                    renderItem={({item}) =>
                        <ShoppingListSummary
                            key={item.id + ''}
                            id={item.id}
                            active={item.active}
                            totalPrice={item.totalPrice}
                            summary={item.summary}
                            createdDate={item.createdDate}
                            name={item.name}
                        />
                    }
                />
            </View>
        );
    }
}

export default ShoppingListComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

