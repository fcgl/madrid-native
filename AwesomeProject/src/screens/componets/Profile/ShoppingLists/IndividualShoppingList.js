import React, {Component} from 'react';
import {Animated, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ShoppingList from "../../Todo/ShoppingList";
import AddItem from "../../Todo/AddItem";
import Ionicons from "react-native-vector-icons/Ionicons";
import PostSummary from "../../Forum/components/PostSummary";
import CreateComment from "../../Forum/Post/CreateComment";
import ShoppingListView from "../../Explore/ShoppingListView";

class IndividualShoppingList extends Component {
    render() {
        return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#4395BF'}}>
            {/*<View style={{flex: 1}}>*/}
                    <View style={{flex: 1, backgroundColor: '#4395BF', paddingBottom: 15, marginTop: Platform.OS === 'android' ? 30 : null}}>
                        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}} onPress={() => this.props.navigation.goBack()}>
                                <Ionicons name={"ios-arrow-back"} style={{color: 'white', fontSize: 20}}/>
                            </TouchableOpacity>
                            <View style={{flex: 2, paddingLeft: 10, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: 'white', fontFamily: 'Avenir', fontWeight: '600', fontSize: 20}}>{this.props.navigation.getParam('name', 'shopping list')}</Text>
                            </View>
                            <View style={{flex: 1}}>
                            </View>
                        </View>
                    </View>
                    {/*<View style={{flex: 20, backgroundColor: '#F9F9F9'}}>*/}
                    {/*    <View style={{flex: 1}}>*/}
                    {/*        <ShoppingList shoppingListId={this.props.navigation.getParam('id', -1)}/>*/}
                    {/*    </View>*/}
                    {/*    <AddItem shoppingListId={this.props.navigation.getParam('id', -1)}/>*/}
                    {/*</View>*/}
                    <View style={{flex: 20, backgroundColor: '#F9F9F9'}}>
                        <ShoppingListView shoppingListId={this.props.navigation.getParam('id', -1)} paddingTop={20} paddingBottom={10}/>
                    </View>
            {/*</View>*/}
        </SafeAreaView>
        );
    }
}

export default IndividualShoppingList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

