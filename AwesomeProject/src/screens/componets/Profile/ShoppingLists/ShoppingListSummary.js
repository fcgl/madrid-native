import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class ShoppingListSummary extends Component {
    render() {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const date = new Date(this.props.createdDate);
        const month = months[date.getMonth()];
        const day = date.getDate();
        return (
                <View key={this.props.id}>
                    <View style={{marginBottom: 2, paddingHorizontal: 15, flexDirection: 'row', flex: 1, height: 60, backgroundColor: 'white'}}>
                        <View style={{flex: 3, justifyContent: 'space-around', paddingVertical: 10}}>
                            <Text style={{fontFamily: 'Avenir', fontSize: 12, color: '#4395BF'}}>
                                {this.props.name} - {month} {day}
                            </Text>
                            <Text style={{fontFamily: 'Avenir', fontSize: 10, color: '#575757'}}>
                                {this.props.summary}
                            </Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'flex-end'}}>
                            <Text style={{fontFamily: 'Avenir', fontSize: 12, color: '#79A977'}}>
                                {this.props.totalPrice}
                            </Text>
                        </View>
                    </View>
                </View>
        );
    }
}

export default ShoppingListSummary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

