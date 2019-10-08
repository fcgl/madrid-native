import React, {Component} from 'react';
import {
    ActivityIndicator,
    Animated,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput, AsyncStorage
} from 'react-native';
import DiscoveryHeader from "../../Discovery/DiscoveryHeader";
import PostSummary from "../components/PostSummary";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Comment from "../components/Comment";
import {colors} from "../../../../theme";
import {fetchFeaturedPosts, makePostRequest} from "../../../../redux/actions/forumActions";
import {connect} from "react-redux";


class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state ={
            title: '',
            body: '',
        };
    }


    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    };


    _showSubmitOrIndication = () => {
      if (this.props.reduxState.isLoading) {
          return (
              <ActivityIndicator color={'white'}/>
          )
      } else {
          return (
              <Text style={styles.buttonText}>
                  SUBMIT POST
              </Text>
          )
      }
    };


    render() {

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#4395BF'}}>
                <View style={{flex: 1}}>
                    <ScrollView style={{backgroundColor: '#F9F9F9'}} scrollEventThrottle={16} onScroll={Animated.event([{nativeEvent: {contentOffset: {y:this.scrollY}}}])}>
                        <View style={{backgroundColor: '#4395BF', paddingBottom: 15, marginTop: Platform.OS === 'android' ? 30 : null}}>
                            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                                <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}} onPress={() => this.props.navigation.goBack()}>
                                    <AntDesign name={"close"} style={{color: 'white', fontSize: 18}}/>
                                </TouchableOpacity>
                                <View style={{flex: 4, paddingLeft: 10}}>
                                    <Text style={{color: 'white', fontFamily: 'Avenir', fontWeight: '600', fontSize: 22}}>Create Post</Text>
                                </View>

                            </View>
                        </View>
                        <Text>
                            {this.props.reduxState.errorMessage}
                        </Text>
                        <View style={{alignItems: 'center'}}>
                            <View style={{marginTop: 40, width: '90%'}}>
                                <View style={{borderWidth: 0.2, marginBottom: 20, borderColor: '#575757'}}>
                                    <TextInput
                                        placeholder={'Title'}
                                        placeholderTextColor={'#575757'}
                                        value={this.state.title}
                                        onChangeText={val => this.onChangeText('title', val)}
                                        style={{padding: 10, fontFamily: 'Avenir', fontSize: 12}}
                                        autoCapitalize="none"
                                    />
                                </View>
                                <View style={{borderWidth: 0.2, paddingBottom: 20, borderColor: '#575757'}}>
                                    <TextInput
                                        placeholder={'Body (optional)'}
                                        placeholderTextColor={'#575757'}
                                        value={this.state.body}
                                        onChangeText={val => this.onChangeText('body', val)}
                                        style={{paddingTop: 10, paddingHorizontal: 10, fontFamily: 'Avenir', fontSize: 12, height: 200}}
                                        autoCapitalize="none"
                                        multiline={true}
                                        scrollEnabled={true}
                                    />
                                </View>
                                <View style={{alignItems: 'center', marginTop: 20}}>
                                    <TouchableOpacity
                                        onPress={() => this.props.makePostRequest(this.state.title, this.state.body, this.props.navigation)}
                                        activeOpacity={0.6}
                                        style={{width: '70%'}}
                                    >
                                        <View style={styles.button}>
                                            {this._showSubmitOrIndication()}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        reduxState: state.addPost
    }
};

export default connect(mapStateToProps, {makePostRequest})(CreatePost);


const styles = StyleSheet.create({
    button :{
        height: 40,
        backgroundColor: '#4395BF',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 4,
        shadowOpacity: 0.2
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#FFFFFF',
        fontSize: 11
    }
});

