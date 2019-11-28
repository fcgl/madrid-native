import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class ShoppingListSummary extends Component {
    render() {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const date = new Date(this.props.createdDate);
        const month = months[date.getMonth()];
        const day = date.getDate();
        const name = this.props.name + " - " + month + " " + day;
        const id = this.props.active ? "active": this.props.id;
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('IndividualShoppingList', {
                    id: id,
                    name: this.props.name,
                    totalPrice: this.props.totalPrice,
                })}
            >
                <View key={id}>
                    <View style={{marginBottom: 2, paddingHorizontal: 15, flexDirection: 'row', flex: 1, height: 60, backgroundColor: 'white'}}>
                        <View style={{flex: 3, justifyContent: 'space-around', paddingVertical: 10}}>
                            <Text style={{fontFamily: 'Avenir', fontSize: 12, color: '#4395BF'}}>
                                {name}
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
            </TouchableOpacity>
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

