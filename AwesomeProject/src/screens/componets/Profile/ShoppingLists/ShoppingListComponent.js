import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AllPoints from "../RewardSummary/Points/AllPoints";
import ShoppingListSummary from "./ShoppingListSummary";
import {connect} from "react-redux";
import {generateRandomShoppingList, resetRandomShoppingListKey} from "../../../../redux/actions/shoppingListActions";

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
                    data={this.props.reduxState.queue}
                    keyExtractor = {(item) => item + ''}
                    extraData={this.props}
                    renderItem={({item}) =>
                        <ShoppingListSummary
                            navigation={this.props.navigation}
                            key={item + ''}
                            id={item}
                            active={item === 'active'}
                            totalPrice={this.props.reduxState[item].totalPrice}
                            summary={this.props.reduxState[item].summary}
                            createdDate={this.props.reduxState[item].createdDate}
                            name={this.props.reduxState[item].name}
                        />
                    }
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        reduxState: state.activeShoppingList
    }
};

//Connects the props to the TodoList
export default connect(mapStateToProps)(ShoppingListComponent);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

