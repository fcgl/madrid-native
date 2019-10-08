import React from 'react';
import {AsyncStorage, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import uuidV4 from 'uuid/v4'
import {colors} from './theme'

export default class AddCity extends React.Component {
    state = {
        email: '',
        password: '',
        pendingSignupRequest: false,
        errorMessage: ''
    };

    _storeData = async () => {
        try {
            await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
        } catch (error) {
            // Error saving data
        }
    };

    _loggedIn = async () => {
        let value = '';
        try {
            value = await AsyncStorage.getItem('fakeKey');
            if (value !== null) {
                this.setState({errorMessage: "TOKEN FOUND"});
            } else {
                this.setState({errorMessage: "TOKEN NOT FOUND"});
            }
        } catch (error) {
            this.setState({errorMessage: "TOKEN ERROR?????"});
        }
    };

    _login = async () => {
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: this.state.email, password: this.state.password}),
        });

        if (response.ok) {
            const message = await response.json();
            const token = message['response']['accessToken'];
            try {
                await AsyncStorage.setItem('token', token);
            } catch (error) {
                this.setState({errorMessage: "TOKEN ERROR"});
            }
            this.props.navigation.navigate('Cities')
        } else {
            const errorResponse = await response.json();
            const message = errorResponse.internalStatus.messages[0];
            this.setState({errorMessage: message})
        }
    };

    TYPE_USERNAME = 'TYPE_USERNAME';
    typeUsername = (text) => ({
        type: TYPE_USERNAME,
    });
    // const typeUserName = (text) => ({
    //    type: this.TYPE_USERNAME
    // });

    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    };

    handleCityChange = email => {
        this.setState({email})
    };

    handleCountryChange = password => {
        this.setState({password})
    };

    submit = () => {
        if (this.state.email === '' || this.state.password === '') {
            return;
        }
        const email = {
            email: this.state.email,
            password: this.state.password,
            locations: [],
            id: uuidV4()
        };
        this.props.screenProps.addCity(email);
        this.setState({
            city: '',
            password: ''
        }, () => {
            this.props.navigation.navigate('Cities')
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerOne}>

                </View>
                <View style={styles.containerTwo}>
                    <Text style={styles.logo}>
                        €
                    </Text>
                    <Text style={styles.logoText}>
                        SPARE
                    </Text>
                </View>
                <View style={styles.containerThree}>
                    <Text style={styles.heading}>
                        Welcome back!
                    </Text>
                    <Text style={styles.headingTwo}>
                        Ready to make your pockets happy?
                    </Text>
                    <Text style={styles.error}>{this.state.errorMessage}</Text>
                    <TextInput
                        placeholder={'EMAIL ADDRESS'}
                        value={this.state.email}
                        onChangeText={val => this.onChangeText('email', val)}
                        style={styles.input}
                        autoCapitalize="none"
                    />
                    <TextInput
                        placeholder={'PASSWORD'}
                        value={this.state.password}
                        onChangeText={val => this.onChangeText('password', val)}
                        style={styles.input}
                        autoCapitalize="none"
                        secureTextEntry="true"
                    />
                    <TouchableOpacity onPress={this._login}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                LOGIN
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.forgotPassword}>
                        Forgot password?
                    </Text>
                </View>
                <Text style={styles.alternativeLoginText}>
                    or login with
                </Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{width: 50, height: 40, backgroundColor: colors.primary}} />
                    <View style={{borderRadius: 3, width: 100, height: 40, backgroundColor: '#4267B2'}} />
                    <View style={{borderRadius: 3, width: 100, height: 40, backgroundColor: '#DB4437'}} />
                    <View style={{ width: 50, height: 40, backgroundColor: colors.primary}} />
                </View>
                <View styles={styles.containerFour}>
                    <Text style={styles.alternativeLoginText}>
                        DON'T HAVE AN ACCOUNT? SIGN UP
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        margin: 10,
        paddingHorizontal: 8,
        height: 50,
        // placeholderTextColor: '#E4E4E4',
    },
    button :{
        height: 50,
        backgroundColor: '#4395BF',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white'
    },
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center'
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        color: '#575757',
        fontFamily: 'Avenir'
    },
    headingTwo: {
        fontSize: 15,
        textAlign: 'center',
        color: '#575757'
    },
    logoText: {
        fontSize: 22,
        textAlign: 'center',
        color: '#4395BF'
    },
    logo: {
        fontSize: 40,
        textAlign: 'center',
        color: '#4395BF'
    },
    containerOne: {
        flex: 1,
    },
    containerTwo: {
        flex: 1
    },
    containerThree: {
        flex: 4
    },
    forgotPassword: {
        textAlign: 'right',
         paddingRight: 10,
    },
    alternativeLoginText: {
        textAlign: 'center',
        padding: 10
    },
    containerFour: {
        flex: 1
    },
    error: {
        color: 'red',
        textAlign: 'center'
    }

});
