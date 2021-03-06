import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'
import {addTodo} from '../../../redux/actions'
import {addToShoppingList, addToShoppingListQueue} from "../../../redux/actions/shoppingListActions";

class AddItem extends Component {

    state = {
        text: ''
    };

    render() {

        const addToShoppingList = () => {
            // if (this.props.placeholder!== null || this.props.placeholder!==undefined) {
            //     this.props.addToShoppingListQueue(this.props.shoppingListId, this.state.text)
            // } else {
                this.props.addToShoppingList(this.props.shoppingListId, this.state.text)
            // }
        };

        return (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={()=>addToShoppingList()}>
                    <View style={{height: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                        <Ionicons name={'md-add'} size={30} style={{color: 'grey', padding: 10}}/>

                    </View>


                </TouchableOpacity>
                <TextInput
                    onChangeText={(text) => this.setState({text})}
                    value = {this.state.text}
                    placeholder = "Add item..."
                    style={{borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: 'white',
                    height: 50, flex: 1, padding: 5}}
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
export default connect(mapStateToProps, {addToShoppingList, addToShoppingListQueue})(AddItem);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});



