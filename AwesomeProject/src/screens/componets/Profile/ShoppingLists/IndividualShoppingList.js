import React, {Component} from 'react';
import {
    Animated,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import ShoppingList from "../../Todo/ShoppingList";
import AddItem from "../../Todo/AddItem";
import Ionicons from "react-native-vector-icons/Ionicons";
import PostSummary from "../../Forum/components/PostSummary";
import CreateComment from "../../Forum/Post/CreateComment";
import ShoppingListView from "../../Explore/ShoppingListView";

class IndividualShoppingList extends Component {
    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    };

    constructor(props){
        super(props);
        this.state ={
            shoppingListName: this.props.navigation.getParam('name', '')
        };
    }
    render() {

        return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#4395BF'}}>
                    <View style={{flex: 1, backgroundColor: '#4395BF', paddingBottom: 15, marginTop: Platform.OS === 'android' ? 30 : null}}>
                        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}} onPress={() => this.props.navigation.goBack()}>
                                <Ionicons name={"ios-arrow-back"} style={{color: 'white', fontSize: 20}}/>
                            </TouchableOpacity>
                            <View style={{flex: 2, paddingLeft: 10, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                                <TextInput
                                    placeholder={'title'}
                                    placeholderTextColor={'#e6e6e6'}
                                    value={this.state.shoppingListName}
                                    onChangeText={val => this.onChangeText('shoppingListName', val)}
                                    style={{paddingHorizontal: 10, fontFamily: 'Avenir', fontWeight: '600', fontSize: 20, color: 'white'}}
                                    autoCapitalize="none"
                                    autoFocus={true}
                                    selectionColor={'white'}
                                />
                            </View>
                            <View style={{flex: 1}}>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 20, backgroundColor: '#F9F9F9'}}>
                        <ShoppingListView shoppingListId={this.props.navigation.getParam('id', -1)} paddingTop={20} paddingBottom={10}/>
                    </View>
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

