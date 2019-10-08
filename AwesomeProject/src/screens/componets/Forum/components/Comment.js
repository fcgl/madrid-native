import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

class Comment extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'white', width: '90%', padding: 10, marginTop: 15}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image source={require('../../../../assets/home.jpg')}
                               style={{ height: 25, width: 25,
                                   resizeMode: 'cover', borderRadius: 30}}/>
                        <View style={{justifyContent: 'center', paddingLeft: 5}}>
                            <Text style={{fontSize: 13, fontFamily: 'Avenir', fontWeight: '700', color: '#575757'}}>
                                {this.props.firstName}
                            </Text>
                        </View>
                    </View>

                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'Avenir', fontSize: 10, color: '#4395BF'}}>
                            {this.props.timeSinceCreated}
                        </Text>

                    </View>
                </View>

                <View style={{paddingVertical: 10}}>
                    <Text style={{fontFamily: 'Avenir', fontSize: 12, fontWeight: '400', color: '#575757'}}>
                        {this.props.message}
                    </Text>
                </View>

            </View>
        );
    }
}

export default Comment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

