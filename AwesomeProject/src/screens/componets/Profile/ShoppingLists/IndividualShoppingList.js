import React, {Component} from 'react';
import {
    ActivityIndicator,
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
import {connect} from "react-redux";
import {fetchActiveShoppingList, generateRandomShoppingList, resetRandomShoppingListKey, updateShoppingListNameLocally} from "../../../../redux/actions/shoppingListActions";

class IndividualShoppingList extends Component {
    onChangeText = (key, value) => {
        let id = this.props.navigation.getParam('id', this.props.reduxState.generatedKey);
        this.props.updateShoppingListNameLocally(id, value);
    };

    constructor(props){
        super(props);
        this.state ={
            shoppingListName: this.props.navigation.getParam('name', '')
        };
    }

    componentDidMount() {
        if (this.props.navigation.getParam('id', null) === null) {
            // console.log("GENERATE A RANDOM SHOPPING LIST!!!");
            this.props.generateRandomShoppingList()
        }
    }

    render() {

        const shoppingListViewLoader = () => {
            if (this.props.reduxState.generateLoading) {
                return(<ActivityIndicator color={'white'}/>)
            } else {
                return(
                    <View style={{flex: 20, backgroundColor: '#F9F9F9'}}>
                        <ShoppingListView navigation={this.props.navigation} shoppingListId={this.props.navigation.getParam('id', this.props.reduxState.generatedKey)} placeHolder={this.props.reduxState.generatedKey !== null} paddingTop={20} paddingBottom={10}/>
                    </View>)
            }
        };

        const goBack = () => {
          this.props.resetRandomShoppingListKey();
            this.props.navigation.goBack();
        };

        return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#4395BF'}}>
                    <View style={{flex: 1, backgroundColor: '#4395BF', paddingBottom: 15, marginTop: Platform.OS === 'android' ? 30 : null}}>
                        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}} onPress={() => goBack()}>
                                <Ionicons name={"ios-arrow-back"} style={{color: 'white', fontSize: 20}}/>
                            </TouchableOpacity>
                            <View style={{flex: 2, paddingLeft: 10, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                                <TextInput
                                    placeholder={'title'}
                                    placeholderTextColor={'#e6e6e6'}
                                    value={this.props.reduxState[this.props.navigation.getParam('id', this.props.reduxState.generatedKey)] === undefined ? '' : this.props.reduxState[this.props.navigation.getParam('id', this.props.reduxState.generatedKey)].name}
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
                    {shoppingListViewLoader()}
        </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        reduxState: state.activeShoppingList
    }
};

//Connects the props to the TodoList
export default connect(mapStateToProps, {generateRandomShoppingList, resetRandomShoppingListKey, updateShoppingListNameLocally})(IndividualShoppingList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

