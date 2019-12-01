import {
    ActivityIndicator,
    Animated,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import DiscoveryHeader from "../../Discovery/DiscoveryHeader";
import PostSummary from "../components/PostSummary";
import React, {Component} from 'react';
import {fetchFeaturedPosts} from "../../../../redux/actions/forumActions";
import {connect} from 'react-redux';

class AllPosts extends Component {

    constructor(props){
        super(props);
        this.state ={

        }
    }

    componentDidMount = async () => {
        this.props.fetchFeaturedPosts(this.props.postType);
    };


    render(){

        const getTimeSinceCreated = (created, now) => {
            // console.log("_________TIME SINCE CREATED_______");
            let delta = now - created;
            // console.log(delta);
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

        if(this.props.reduxState[this.props.postType].isLoading){
            return(
                <SafeAreaView style={{flex: 1, backgroundColor: '#4395BF'}}>
                    <View style={{flex: 1}}>
                        <ScrollView style={{backgroundColor: '#F9F9F9'}} scrollEventThrottle={16} onScroll={Animated.event([{nativeEvent: {contentOffset: {y:this.scrollY}}}])}>
                            <DiscoveryHeader headerNav={[{nav: 'Forum', title: 'Featured'}, {nav: 'Top', title: 'Top'}, {nav: 'New', title: 'New'}]} headerName={'Forum'} navigation={this.props.navigation}/>
                            <View style={{flex: 1, padding: 20}}>
                                <ActivityIndicator/>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            )
        }

        return(
            <SafeAreaView style={{flex: 1, backgroundColor: '#4395BF'}}>
                <View style={{flex: 1}}>
                    <Text>{this.props.reduxState.errorMessage}</Text>
                    <ScrollView style={{backgroundColor: '#F9F9F9'}} scrollEventThrottle={16} onScroll={Animated.event([{nativeEvent: {contentOffset: {y:this.scrollY}}}])}>
                        <DiscoveryHeader headerNav={[{nav: 'Forum', title: 'Featured'}, {nav: 'Top', title: 'Top'}, {nav: 'New', title: 'New'}]} headerName={'Forum'} navigation={this.props.navigation}/>
                        <Text>
                            {this.props.reduxState[this.props.postType].errorMessage[0]}
                        </Text>
                        <View style={{alignItems: 'center'}}>
                            {/*{console.log(this.props.reduxState)}*/}

                            {
                                this.props.reduxState[this.props.postType].posts.map((post) => (
                                    <PostSummary
                                        navigation={this.props.navigation}
                                        key={post.post.id}
                                        id={post.post.id}
                                        title={post.post.title}
                                        description={post.post.description}
                                        likeCount = {post.post.userLikeCount}
                                        commentCount = {post.post.userCommentCount}
                                        firstname = {post.post.userFirstName}
                                        liked = {post.liked}
                                        timeSinceCreated = {getTimeSinceCreated(post.post.createdDate, this.props.reduxState[this.props.postType].requestTimestamp)}
                                    />
                                ))

                            }
                        </View>
                    </ScrollView>
                    <View style={{shadowOpacity: 0.3,shadowColor: '#575757', margin: 20, bottom: 0,right: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: '#4293BD', height: 42, width: 42, borderRadius: 42/2}}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('CreatePost')}
                        >
                            <AntDesign name={'plus'} style={{color: 'white', fontSize: 24, fontWeight: '900'}}/>
                        </TouchableOpacity>

                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        reduxState: state.forum
    }
};

export default connect(mapStateToProps, {fetchFeaturedPosts})(AllPosts);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

