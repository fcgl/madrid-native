import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Recommended extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Recommended</Text>
            </View>
        );
    }
}

export default Recommended;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

