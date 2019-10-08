import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class Category extends Component {
    render() {
        return (
            <View style={{height: 90, width: 300, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd', backgroundColor: 'white'}}>
                <View style={{flex: 1, paddingLeft: 20, paddingTop: 10}}>
                    <Text style={{fontSize: 10, color: '#4290b7', fontWeight: '700'}}>
                        NEW RECOMMENDATION
                    </Text>
                    <View style={{flex: 1, flexDirection: 'row', paddingTop: 10}}>
                        <View style={{flex: 1}}>
                            <Image source={this.props.imageUri}
                                   style={{width: 63, height: 43, resizeMode: 'cover'}}/>
                        </View>
                        <View style={{flex: 4, paddingLeft: 40, paddingTop: 5}}>
                            <Text style={{fontSize: 12, fontWeight: '600', color: '#575757', paddingBottom: 4}}>
                                {/*{this.props.name}*/}
                                Stir-fry Vegetables
                            </Text>
                            <Text style={{fontSize: 11, color: '#4290b7'}}>
                                Now 0,89 $ at Market Store!
                            </Text>
                        </View>
                        <View style={{paddingTop: 5, paddingRight: 10}}>
                            <Icon name="ios-arrow-forward" size={18} style={{color: '#4290b7'}}/>
                            {/*<Text>*/}
                            {/*    >*/}
                            {/*</Text>*/}
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

