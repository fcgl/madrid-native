import React, {Component} from 'react';
import {
    ActivityIndicator,
    Animated,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import DiscoveryHeader from "../../Discovery/DiscoveryHeader";
import PostSummary from "../components/PostSummary";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Comment from "../components/Comment";
import CreateComment from "./CreateComment";
import {connect} from "react-redux";
import {fetchPostComments} from "../../../../redux/actions/forumActions";


class Post extends Component {
    constructor(props){
        super(props);
        this.nav = this.props.navigation;
        this.state ={
            postId: this.nav.getParam('postId', -1),
            liked: this.nav.getParam('liked',false),
            firstName: this.nav.getParam('firstName',''),
            timeSinceCreated: this.nav.getParam('timeSinceCreated',''),
            title: this.nav.getParam('title',''),
            description:this.nav.getParam('description',''),
            likeCount: this.nav.getParam('likeCount',0),
            commentCount: this.nav.getParam('commentCount',0),
            // comments: [],
            // commentsLoading: true,
            // newComment: '',
            // newCommentHeight: 30
        };
    }

    // onChangeText = (key, value) => {
    //     this.setState({
    //         [key]: value
    //     })
    // };


    componentDidMount = async () => {
        this.props.fetchPostComments(this.state.postId);
        // const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg'
        // const page = 0;
        // const size = 10;
        // const url = 'http://localhost:8082/forum/comment/v1/getComment?postId=' + this.state.postId + '&page=' + page + '&size=' + size;
        // try {
        //     const response = await fetch(url, {
        //         method: 'GET',
        //         headers: {'content-type': 'application/json', 'Authorization': token},
        //     });
        //     if (response.ok) {
        //         // const message = await response.text();
        //         const jsonResponse = await response.json();
        //         this.setState({
        //             commentsLoading: false,
        //             errorMessage: null,
        //             comments: jsonResponse.comments,
        //             requestTimeStamp: jsonResponse.timestamp
        //             // requestTimestamp: jsonResponse.timestamp
        //         }, function(){
        //         });
        //     } else {
        //         const errorResponse = await response.text();
        //         this.setState({
        //             commentsLoading: false,
        //             errorMessage: errorResponse,
        //             comments: []
        //         }, function(){
        //         });
        //
        //     }
        // } catch(e) {
        //     this.setState({
        //         commentsLoading: false,
        //         errorMessage: 'Network Error',
        //         comments: []
        //     }, function(){
        //     });
        // }
    };

    render() {
        const getTimeSinceCreated = (created, now) => {
            let delta = now - created;
            let seconds = Math.floor(delta / 1000);
            let minutes = Math.floor(seconds / 60);
            let hours = Math.floor(minutes / 60);
            let days = Math.floor(hours / 24);
            let weeks = Math.floor(days / 7);
            if (seconds <= 0) {
                return 0 + ' seconds ago'
            }
            if (minutes === 0) {
                return seconds + ' seconds ago';
            }
            if (hours === 0) {
                return minutes + ' minutes ago';
            }
            if (days === 0) {
                return hours + ' hours ago'
            }
            if (weeks === 0) {
                return days + ' days ago'
            }
            return weeks + ' weeks ago'
        };

        const testing = () => {
            if (this.props.reduxState.commentsLoading) {
                return (
                    <View style={{flex: 1, padding: 20}}>
                        <ActivityIndicator/>
                    </View>
                )
            } else {
             return this.props.reduxState.comments.map((comment) => (
                     <Comment
                         key={comment.id}
                         id={comment.id}
                         message={comment.message}
                         userId={comment.userId}
                         firstName={comment.firstName}
                         timeSinceCreated={getTimeSinceCreated(comment.createdDate, this.props.reduxState.requestTimeStamp)}
                     />
                   ))
            }

        };
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#4395BF'}}>
                <View style={{flex: 1}}>
                    <ScrollView style={{backgroundColor: '#F9F9F9'}} scrollEventThrottle={16} onScroll={Animated.event([{nativeEvent: {contentOffset: {y:this.scrollY}}}])}>
                        <View style={{backgroundColor: '#4395BF', paddingBottom: 15, marginTop: Platform.OS === 'android' ? 30 : null}}>
                            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                                <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}} onPress={() => this.props.navigation.goBack()}>
                                    <Ionicons name={"ios-arrow-back"} style={{color: 'white', fontSize: 20}}/>
                                </TouchableOpacity>
                                <View style={{flex: 4, paddingLeft: 10}}>
                                    <Text style={{color: 'white', fontFamily: 'Avenir', fontWeight: '600', fontSize: 24}}>Post</Text>
                                </View>

                            </View>
                        </View>
                        <Text>
                            {this.props.reduxState.errorMessage}
                        </Text>
                        <View style={{alignItems: 'center'}}>
                            <PostSummary
                                navigation={this.props.navigation}
                                key={this.state.postId}
                                id={this.state.postId}
                                title={this.state.title}
                                description={this.state.description}
                                likeCount = {this.state.likeCount}
                                commentCount = {this.state.commentCount}
                                firstname = {this.state.firstName}
                                timeSinceCreated = {this.state.timeSinceCreated}
                                liked = {this.state.liked}
                            />
                            {testing()}
                        </View>

                    </ScrollView>
                    <CreateComment
                        postId={this.state.postId}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        reduxState: state.fetchingCommentReducer
    }
};

export default connect(mapStateToProps, {fetchPostComments})(Post);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

