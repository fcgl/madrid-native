import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage, TouchableOpacity} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import CounterApp from './src/CounterApp'
// import SignUp from './src/SignUp'
import CityApp from "./src/CityApp";
import AirbnbApp from "./src/AirbnbApp";
import store from "./src/redux/store"

const initialState = {
    counter: 0
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'INCREASE_COUNTER':
            return {counter:state.counter + 1};
        case 'DECREASE_COUNTER':
            return {counter:state.counter - 1};
    }
    return state;
};

// const store = createStore(reducer);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AirbnbApp/>
            </Provider>
        )
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
