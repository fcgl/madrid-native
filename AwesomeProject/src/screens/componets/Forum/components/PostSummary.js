import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, AsyncStorage} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

class PostSummary extends Component {

    state = {
        liked: this.props.liked,
        likeCount: this.props.likeCount === 0 && this.props.liked ? 1 : this.props.likeCount
    };
    render() {

        const likeCountReder = () => {
            if (this.state.liked) {
                return (
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity activeOpacity={0.6} onPress={postLike}>
                            <AntDesign name={'heart'} style={{fontSize: 16, color: '#B20701'}}/>
                        </TouchableOpacity>

                        <Text style={{paddingLeft: 8, color: '#4395BF', fontSize: 14, fontFamily: 'Avenir', fontWeight: '700'}}>
                            {this.state.likeCount}
                        </Text>
                    </View>
                )
            } else {
                return (
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity activeOpacity={0.6} onPress={postLike}>
                            <AntDesign name={'hearto'} style={{fontSize: 16, color: '#4395BF'}}/>
                        </TouchableOpacity>
                    <Text style={{paddingLeft: 8, color: '#4395BF', fontSize: 14, fontFamily: 'Avenir', fontWeight: '700'}}>
                        {this.state.likeCount}
                    </Text>
                </View>
                )
            }
        };



        const postLike = async () => {
            try {
                const userId = 1;
                const url = 'http://localhost:8082/forum/post/v1/like';
                const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg';
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': token,
                    },
                    // headers: {'content-type': 'application/json'},

                    body: JSON.stringify({userId: userId, postId: this.props.id}),
                });

                if (response.ok) {
                    let newLikedCount = this.state.likeCount + (this.state.liked ? -1 : 1);
                    this.setState({
                        liked: !this.state.liked,
                        likeCount: newLikedCount
                    })
                } else {
                    const errorResponse = await response.json();
                    const message = errorResponse.internalStatus.messages[0];
                    this.setState({errorMessage: message})
                }
            } catch(e) {
                //TODO: Do something
            }

        };

        const postRedirection = () => {
            let postData = (
                <View key={"postDescription-" + this.props.id} style={{paddingVertical: 10}}>
                    <Text style={{fontFamily: 'Avenir', fontSize: 20, fontWeight: '600', color: '#575757'}}>
                        {this.props.title}
                    </Text>
                    <Text style={{fontFamily: 'Avenir', fontSize: 12, fontWeight: '400', color: '#575757'}}>
                        {this.props.description}
                    </Text>
                 </View>
            );
            if (this.props.navigation.state.routeName === 'Post') {
                return postData;
            } else {
                return (
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Post',
                            {
                                postId: this.props.id,
                                liked: this.state.liked,
                                firstName: this.props.firstname,
                                timeSinceCreated: this.props.timeSinceCreated,
                                title: this.props.title,
                                description: this.props.description,
                                likeCount: this.state.likeCount,
                                commentCount: this.props.commentCount

                            })}
                    >
                        {postData}
                    </TouchableOpacity>
                )
            }
        };

        return (
            <View key={"post-" + this.props.id} style={{backgroundColor: 'white', width: '90%', padding: 10, marginTop: 15}}>
                <View key={"postUser-" + this.props.id} style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image source={require('../../../../assets/home.jpg')}
                               style={{ height: 25, width: 25,
                                   resizeMode: 'cover', borderRadius: 30}}/>
                        <View style={{justifyContent: 'center', paddingLeft: 5}}>
                            <Text style={{fontSize: 13, fontFamily: 'Avenir', fontWeight: '700', color: '#575757'}}>
                                {this.props.firstname}
                            </Text>
                        </View>
                    </View>

                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'Avenir', fontSize: 10, color: '#4395BF'}}>
                            {this.props.timeSinceCreated}
                        </Text>

                    </View>
                </View>

                {postRedirection()}

                <View style={{borderTopWidth: 0.2, borderColor: '#707070', opacity: 0.3, marginBottom: 10}}>
                </View>
                <View key={"postAttributes-" + this.props.id} style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    {likeCountReder()}
                    <View style={{flexDirection: 'row'}}>
                        <Feather name={'message-circle'} style={{fontSize: 16, color: '#4395BF'}}/>
                        <Text style={{paddingLeft: 8, color: '#4395BF', fontSize: 14, fontFamily: 'Avenir', fontWeight: '700'}}>
                            {this.props.commentCount}
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <AntDesign name={'sharealt'} style={{fontSize: 16, color: '#4395BF'}}/>
                        <Text style={{paddingLeft: 8, color: '#4395BF', fontSize: 14, fontFamily: 'Avenir', fontWeight: '700'}}>
                            Share
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default PostSummary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activeLike: {
        color: '#B20701'
    },
    inActiveLike: {
        color: '#4395BF'
    }
});

