import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'
import {addTodo} from '../../../redux/actions'

class AddList extends Component {

    state = {
        text: ''
    };

    addTodo = (text) => {
        //update store
        this.props.dispatch(addTodo(text));
        this.setState({text: ''})
    };

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={()=>this.addTodo(this.state.text)}>
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

export default connect()(AddList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

