import React, {Component} from 'react';
import {Animated, AsyncStorage, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity} from 'react-native';
import DiscoveryHeader from "./componets/Discovery/DiscoveryHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import PostSummary from "./componets/Forum/components/PostSummary";
import AllPosts from "./componets/Forum/Post/AllPosts";

class Forum extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <AllPosts
                navigation={this.props.navigation}
                postType={"featured"}
            />
            )
    }
    }


export default Forum;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

