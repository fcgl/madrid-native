import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class ProjectBudgetTransactions extends Component {
    render() {
        return (
            <View>
                <Text style={{fontWeight: '700', paddingVertical: 15, paddingLeft: 15, fontFamily: 'Avenir', fontSize: 12, color: '#575757'}}>
                    JULY TRANSACTIONS
                </Text>
                <View>
                    <Text style={{marginBottom: 10, paddingLeft: 15, color: '#575757', fontFamily: 'Avenir', fontSize: 11}}>JULY 20</Text>
                    <View style={{alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>

                        <View style={{borderColor: '#F7F7F7', borderWidth: 5, shadowOpacity: 0.02, shadowColor: 'black', shadowRadius: 3, paddingBottom: 10, flex: 1, flexDirection: 'row', backgroundColor: 'white', width: '95%'}}>
                            <View style={{flex: 3, paddingLeft: 15, paddingVertical: 10}}>
                                <Text style={{fontFamily: 'Avenir', fontSize: 14, fontWeight: '800', color: '#575757'}}>
                                    Kim's Convenience
                                </Text>
                                <Text style={{fontFamily: 'Avenir', fontSize: 12, color: '#575757'}}>
                                    Bought all ingredients for Sunday meal prep
                                </Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Avenir', fontSize: 14, color: '#9ABE99'}}>
                                    10,00 $
                                </Text>
                            </View>
                        </View>

                        <View style={{borderColor: '#F7F7F7', borderWidth: 5, shadowOpacity: 0.02, shadowColor: 'black', shadowRadius: 3, paddingBottom: 10, flex: 1, flexDirection: 'row', backgroundColor: 'white', width: '95%'}}>
                            <View style={{flex: 3, paddingLeft: 15, paddingVertical: 10}}>
                                <Text style={{fontFamily: 'Avenir', fontSize: 14, fontWeight: '800', color: '#575757'}}>
                                    Kim's Convenience
                                </Text>
                                <Text style={{fontFamily: 'Avenir', fontSize: 12, color: '#575757'}}>
                                    Bought all ingredients for Sunday meal prep
                                </Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'Avenir', fontSize: 14, color: '#9ABE99'}}>
                                    10,00 $
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default ProjectBudgetTransactions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

