import React, {Component} from 'react';
import {Animated, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import DiscoveryHeader from "../Discovery/DiscoveryHeader";
import PostSummary from "./components/PostSummary";
import AllPosts from "./Post/AllPosts";

class Top extends Component {
    render() {
        return (
            <AllPosts
                navigation={this.props.navigation}
                postType={"top"}
            />
        );
    }
}

export default Top;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

