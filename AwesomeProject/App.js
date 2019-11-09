import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage, TouchableOpacity, StatusBar} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import SignUp from './src/SignUp'
import AirbnbApp from "./src/AirbnbApp";
import store from "./src/redux/store"
import DropdownAlert from 'react-native-dropdownalert';
import {AlertHelper} from './pages/AlertHelper'
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
                <DropdownAlert
                    defaultContainer={{ padding: 8, paddingTop: StatusBar.currentHeight, flexDirection: 'row' }}
                    ref={ref => AlertHelper.setDropDown(ref)}
                    onClose={() => AlertHelper.invokeOnClose()}
                />
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
