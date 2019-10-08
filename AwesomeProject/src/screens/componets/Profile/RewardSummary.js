import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class RewardSummary extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Reward Summary</Text>
            </View>
        );
    }
}

export default RewardSummary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

