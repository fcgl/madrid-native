import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class ProfileBudgetSummary extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'white'}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', paddingVertical: 10}}>
                    <Text style={{fontFamily: 'Avenir', fontSize: 14, fontWeight: '300', paddingTop: 5, paddingHorizontal: 15}}>
                        JUN
                    </Text>
                    <Text style={{fontFamily: 'Avenir', fontSize: 18, fontWeight: '700'}}>
                        JUL
                    </Text>
                    <Text style={{fontFamily: 'Avenir', fontSize: 14, fontWeight: '300', paddingTop: 5, paddingHorizontal: 15}}>
                        AUG
                    </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={{alignItems: 'center', backgroundColor: '#F9F9F9', width: '80%'}}>
                        <Text style={{fontSize: 48, fontFamily: 'Avenir', color: '#575757', fontWeight: '900'}}>
                            $ 15,50
                        </Text>
                        <Text style={{fontSize: 16, fontFamily: 'Avenir', fontWeight: '200'}}>
                            Remaining
                        </Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', marginVertical: 20}}>
                    <View style={{flexDirection: 'row', flex: 1, width: '80%', height: 65}}>
                        <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#4395BF', marginRight: 10, flex: 1, borderRadius: 2}}>
                            <Text style={{color: 'white', fontSize: 18, fontWeight: '800', fontFamily: 'Avenir'}}>
                                150,00 $
                            </Text>
                            <Text style={{color: 'white', fontFamily: 'Avenir', fontSize: 12}}>
                                Budget
                            </Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#F1BF59', marginLeft: 10, flex: 1, borderRadius: 2}}>
                            <Text style={{color: 'white', fontSize: 18, fontWeight: '800', fontFamily: 'Avenir'}}>
                                134,50 $
                            </Text>
                            <Text style={{color: 'white', fontFamily: 'Avenir', fontSize: 12}}>
                                Spent
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default ProfileBudgetSummary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

