import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

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

const notEmptyList = (todos, toggleTodo) => {
    return (
        <View>
            {listHeader(getCheckedOffCount(todos), todos.length)}
            <View style={{backgroundColor: 'white'}}>
                {todos.map(todo=>
                    <TouchableOpacity key={"box-" + todo.id} onPress={()=>toggleTodo(todo.id)}>
                        <View key={"view-1" + todo.id}  style={{padding: 10, flex: 1, flexDirection: 'row', backgroundColor: todo.completed ? '#F9F9F9' : 'white' }}>
                            <View style={{flex: 1}}>
                                <Icon name={todo.completed ? "md-checkmark": 'ios-square-outline' }
                                      style={[todo.completed ? styles.checked : styles.unChecked]}
                                />
                            </View>
                            <View style={{flex: 10}}>
                                <Text style={{fontSize: 14, textDecorationLine: todo.completed? 'line-through': 'none'}}>{todo.text}</Text>
                            </View>
                            <View style={{flex: 2}}>
                                {/*TODO: NEED TO HAVE AN API REQUEST THAT GETS THE PRICES!!!*/}
                                <Text style={{fontSize: 14}}>~ $1.34</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                )}
            </View>
        </View>
    )
};



const test = (todos, toggleTodo) => {
  if (todos.length === 0) {
      return emptyList()
  } else {
      return notEmptyList(todos, toggleTodo)
  }
};

const ShoppingList = ({todos, toggleTodo}) => {
    return test(todos, toggleTodo);
};

export default ShoppingList;

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

