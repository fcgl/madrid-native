import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class AllPoints extends Component {
    render() {
        return (
            <View>
                <View>
                    <View style={{marginBottom: 2, paddingHorizontal: 15, flexDirection: 'row', height: 60, backgroundColor: 'white'}}>
                        <View style={{flex: 3, justifyContent: 'space-around', paddingVertical: 10}}>
                            <Text style={{fontFamily: 'Avenir', fontSize: 12, color: '#4395BF'}}>
                                {this.props.date}
                            </Text>
                            <Text style={{fontFamily: 'Avenir', fontSize: 10, color: '#575757'}}>
                                {this.props.name}
                            </Text>
                        </View>
                        <View style={{flex: 2, justifyContent: 'space-around', paddingVertical: 10, alignItems: 'flex-end'}}>
                            <Text style={{fontFamily: 'Avenir', fontSize: 12, color: '#4395BF'}}>
                                {this.props.type}
                            </Text>
                            <Text style={{fontFamily: 'Avenir', fontSize: 10, fontWeight: '700', color: '#575757'}}>
                                +{this.props.points} Points
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default AllPoints;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

