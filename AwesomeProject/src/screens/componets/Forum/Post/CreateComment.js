import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import {connect} from "react-redux";
import {makeCommentRequest, updateNewComment} from "../../../../redux/actions/forumActions";

class CreateComment extends Component {

    constructor(props){
        super(props);
        this.nav = this.props.navigation;
        this.state ={
            newCommentHeight: 30
        };
    }

    render() {
        return (
            <View style={{backgroundColor: '#F9F9F9'}}>
                <Text>
                    {this.props.reduxState.errorMessage}
                </Text>
                <View style={{flexDirection: 'row', backgroundColor: 'white', marginBottom: 3}}>
                    <TextInput
                        multiline={true}
                        // onChangeText={val => this.onChangeText('newComment', val)}
                        onChangeText={val => this.props.updateNewComment(val)}
                        onContentSizeChange={(event) => {
                            let test = event.nativeEvent.contentSize.height;
                            this.setState({newCommentHeight: test <= 30 ? 30 : test})
                        }}
                        value = {this.props.reduxState.newComment}
                        placeholder={"TYPE AWAY..."}
                        placeholderColor={'#C4C4C4'}
                        style={{fontSize: 12, borderTopWidth: 1, borderColor: '#C4C4C4', backgroundColor: 'white', paddingHorizontal: 15, paddingTop: 15, flex: 1
                            ,
                            height: this.state.newCommentHeight >= 75 ? 75 : this.state.newCommentHeight
                        }}
                    />
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={{alignItems: 'flex-end', justifyContent: 'flex-end', borderTopWidth: 1, borderColor: '#C4C4C4'}}
                        onPress={() => this.props.makeCommentRequest(this.props.postId, this.props.reduxState.newComment)}
                    >
                        <View style={{backgroundColor: 'white', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                            <AntDesign name={'right'} size={18} style={{color: '#4395BF', padding: 10}}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const mapStateToProps = state => {
    return {
        reduxState: state.addComment
    }
};

export default connect(mapStateToProps, {makeCommentRequest, updateNewComment})(CreateComment);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

