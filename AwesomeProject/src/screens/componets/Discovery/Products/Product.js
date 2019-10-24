import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class Product extends Component {
    render() {
        return (
                <View style={{marginBottom: 15, flex:1, flexDirection: 'row', backgroundColor: 'white', height: 100}}>
                    <View style={{flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                        <MaterialIcons name={'image'} size={100}/>
                    </View>
                    <View style={{flex: 2, flexDirection: 'row'}}>
                        <View style={{flex: 1, paddingVertical: 10}}>
                            <View style={{flex: 1}}>
                                <Text style={{fontFamily: 'Avenir', fontSize: 14, fontWeight: '700', color: '#1F1F1F'}}>{this.props.name}</Text>
                                <Text style={{fontFamily: 'Avenir', fontSize: 12, fontWeight: '600', color: '#71AFCF'}}>{this.props.category}</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                                <Text style={{fontWeight: '600',fontFamily: 'Avenir', fontSize: 12, color: '#71AFCF'}}>{this.props.price}</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, paddingRight: 15, paddingBottom: 10}}>
                            <View style={{flex: 1, justifyContent: 'flex-start',alignItems: 'flex-end',marginBottom: 35}}>
                                <Text style={{color: '#4395BF', fontSize: 30, fontWeight: '600'}}>
                                    +
                                </Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                                <Text style={{fontWeight: '600', fontFamily: 'Avenir', fontSize: 12, color: '#71AFCF'}}>
                                    {this.props.distance} KM away
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

        );
    }
}

export default Product;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

