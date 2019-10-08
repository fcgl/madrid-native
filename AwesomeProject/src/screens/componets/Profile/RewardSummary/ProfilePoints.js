import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class ProfilePoints extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Points</Text>
            </View>
        );
    }
}

export default ProfilePoints;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

