import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class ShoppingListComponent extends Component {
    render() {
        return (
            <View>
                <View>
                    <View style={{marginBottom: 2, paddingHorizontal: 15, flexDirection: 'row', flex: 1, height: 60, backgroundColor: 'white'}}>
                        <View style={{flex: 3, justifyContent: 'space-around', paddingVertical: 10}}>
                            <Text style={{fontFamily: 'Avenir', fontSize: 12, color: '#4395BF'}}>
                                July 30
                            </Text>
                            <Text style={{fontFamily: 'Avenir', fontSize: 10, color: '#575757'}}>
                                eggs, cereal, cheese, frozen veggies...
                            </Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'flex-end'}}>
                            <Text style={{fontFamily: 'Avenir', fontSize: 12, color: '#79A977'}}>
                                36,54 $
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{marginBottom: 2, paddingHorizontal: 15, flexDirection: 'row', flex: 1, height: 60, backgroundColor: 'white'}}>
                        <View style={{flex: 3, justifyContent: 'space-around', paddingVertical: 10}}>
                            <Text style={{fontFamily: 'Avenir', fontSize: 12, color: '#4395BF'}}>
                                July 22
                            </Text>
                            <Text style={{fontFamily: 'Avenir', fontSize: 10, color: '#575757'}}>
                                onions, bacon, bread
                            </Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'flex-end'}}>
                            <Text style={{fontFamily: 'Avenir', fontSize: 12, color: '#79A977'}}>
                                7,65 $
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default ShoppingListComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

