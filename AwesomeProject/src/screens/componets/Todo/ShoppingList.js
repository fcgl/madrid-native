import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import {toggleTodo,fetchActiveShoppingList} from "../../../redux/actions/shoppingListActions";
import {connect} from "react-redux";

//TODO: Might be better to keep track of this on the state
const getCheckedOffCount = (todoList) => {
    let completed = 0;
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].completed) {
            completed++;
        }
    }
    return completed;
};

const listHeader = (checkedOffCount = 0, todoCount = 0) => {
    return (
        <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{flex: 4, paddingLeft: 10}}>
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>SHOPPING LIST</Text>
            </View>
            <View style={{flex: 6}}>
                <Text style={{fontSize: 12}}>{checkedOffCount}/{todoCount}</Text>
            </View>
            <View style={{flex: 2, paddingRight: 5}}>
                <Text style={{fontSize: 11, fontWeight: '800', color: '#4395BF'}}>VIEW ALL</Text>
            </View>
        </View>)

};

const emptyList = () => {
    return(
        <View>
            {listHeader()}
            <View style={{height: 235, alignItems: 'center', justifyContent: 'center', paddingBottom: 10}}>
                <SimpleLineIcons name="basket" size={60}
                                 style={{color: 'grey', paddingBottom: 20, margin: 0}}/>
                <Text style={{fontSize: 15, color: 'grey'}}>
                    No list yet! How about adding one?
                </Text>
            </View>
        </View>
    )
};

const notEmptyList = (items, toggleTodo, shoppingListId) => {
    return (
        <View style={{flex: 1}}>
            {listHeader(getCheckedOffCount(items), items.length)}
            <View style={{flex: 10}}>
            <ScrollView style={{backgroundColor: 'white'}}>
                {items.map(item=>
                    <TouchableOpacity key={"box-" + item.id} onPress={()=>toggleTodo(item.id, shoppingListId)}>
                        <View key={"view-1" + item.id}  style={{padding: 10, flex: 1, flexDirection: 'row', backgroundColor: item.completed ? '#F9F9F9' : 'white' }}>
                            <View style={{flex: 1}}>
                                <Icon name={item.completed ? "md-checkmark": 'ios-square-outline' }
                                      style={[item.completed ? styles.checked : styles.unChecked]}
                                />
                            </View>
                            <View style={{flex: 10}}>
                                <Text style={{fontSize: 14, textDecorationLine: item.completed? 'line-through': 'none'}}>{item.productName}</Text>
                            </View>
                            <View style={{flex: 2}}>
                                {/*TODO: NEED TO HAVE AN API REQUEST THAT GETS THE PRICES!!!*/}
                                <Text style={{fontSize: 14}}>~ $1.34</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                )}
            </ScrollView>
            </View>
        </View>
    )
};


class ShoppingList extends Component {

    componentDidMount() {
        this.props.fetchActiveShoppingList(this.props.shoppingListId)
    }

    render() {
        if (this.props.reduxState2[this.props.shoppingListId].shoppingProducts.length === 0) {
            return emptyList()
        } else {
            return notEmptyList(this.props.reduxState2[this.props.shoppingListId].shoppingProducts, this.props.toggleTodo, this.props.shoppingListId)
        }
    }
}
const mapStateToProps = state => {
    return {
        reduxState: state.todos,
        reduxState2: state.activeShoppingList
    }
};

//Connects the props to the TodoList
export default connect(mapStateToProps, {toggleTodo, fetchActiveShoppingList})(ShoppingList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checked: {
        color: 'green',
        fontSize: 20
    },
    unChecked: {
        color: 'grey',
        fontSize: 20
    }
});

