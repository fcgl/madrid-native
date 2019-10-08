import {
    FETCHING_POSTS_REQUEST,
    FETCHING_POSTS_SUCCESS,
    FETCHING_POSTS_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
    APPEND_NEW_POST,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
    APPEND_NEW_COMMENT,
    FETCHING_POST_COMMENTS_REQUEST,
    FETCHING_POST_COMMENTS_SUCCESS, FETCHING_POST_COMMENTS_FAILURE, UPDATE_NEW_COMMENT
} from "./actionTypes";

export const fetchingFeaturedPostsRequest = (postType) => ({
   type: FETCHING_POSTS_REQUEST,
    postType: postType
});


export const fetchingFeaturedPostsSuccess = (json, postType) => ({
    type: FETCHING_POSTS_SUCCESS,
    payload: json,
    postType: postType
});


export const fetchingFeaturedPostsFailure = (error, postType) => ({
   type: FETCHING_POSTS_FAILURE,
    payload: error,
    postType: postType
});

export const addPostRequest = () => ({
   type: ADD_POST_REQUEST,
});

export const addPostSuccess = () => ({
    type: ADD_POST_SUCCESS
});

export const addPostFailure = (error) => ({
    type: ADD_POST_FAILURE,
    payload: error,
});

export const appendNewPost = (json) => ({
    type: APPEND_NEW_POST,
    payload: json
});

export const addCommentRequest = () => ({
   type: ADD_COMMENT_REQUEST,
});

export const addCommentSuccess = (response) => ({
    type: ADD_COMMENT_SUCCESS,
    payload: response
});

export const addCommentFailure = (error) => ({
    type: ADD_COMMENT_FAILURE,
    payload: error,
});

export const appendNewComment = (json) => ({
    type: APPEND_NEW_COMMENT,
    payload: json
});

export const fetchingPostCommentsRequest = () => ({
    type: FETCHING_POST_COMMENTS_REQUEST,
});


export const fetchingPostCommentsSuccess = (json) => ({
    type: FETCHING_POST_COMMENTS_SUCCESS,
    payload: json,
});


export const fetchingPostCommentsFailure = (error) => ({
    type: FETCHING_POST_COMMENTS_FAILURE,
    payload: error
});

export const updateNewComment = (newComment) => ({
    type: UPDATE_NEW_COMMENT,
    newComment: newComment
});


export const fetchFeaturedPosts = (postType) => {
    return async dispatch => {
        dispatch(fetchingFeaturedPostsRequest(postType));
        try {
            const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg'
            const cityId = 1;
            const page = 0;
            const size = 10;
            const userId = 1;
            const url = 'http://localhost:8082/forum/post/v1/cityPosts/' + postType + '?cityId=' + cityId + '&page=' + page + '&size=' + size + '&userId=' + userId;
            const response = await fetch(url, {
                method: 'GET',
                headers: {'content-type': 'application/json', 'Authorization': token},
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                dispatch(fetchingFeaturedPostsSuccess(jsonResponse, postType));
            } else {
                const errorResponse = await response.text();
                dispatch(fetchingFeaturedPostsFailure(errorResponse, postType));
            }
        } catch (error) {
            dispatch(fetchingFeaturedPostsFailure(error, postType))
        }

    }
};

//TODO: I think we should have a standard as to how we do this because most of it will be duplicate code minus the inputs
export const makePostRequest = (title, body, navigation) => {
    return async dispatch => {
        dispatch(addPostRequest());
        try {
            const userId = 1;
            const cityId = 1;
            const userFirstName = 'Jean Paul';
            const url = 'http://localhost:8082/forum/post/v1/post';
            const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },

                body: JSON.stringify({
                    title: title,
                    description: body,
                    cityId: cityId,
                    userId: userId,
                    userFirstName: userFirstName,
                }),
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                dispatch(appendNewPost(jsonResponse));
                dispatch(addPostSuccess());
                navigation.navigate('New')
            } else {
                const errorResponse = await response.json();
                const message = errorResponse.status.messages[0];
                dispatch(addPostFailure(message));
            }
        } catch (error) {
            // dispatch(addPostFailure(error, postType))
            dispatch(addPostFailure('Network Issue'))
        }
    }
};

export const makeCommentRequest = (postId, newComment) => {
    return async dispatch => {
        dispatch(addCommentRequest());
        try {
            const userId = 1;
            const firstName = 'Jean Paul';
            const url = 'http://localhost:8082/forum/comment/v1/postComment';
            const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },

                body: JSON.stringify({
                    message: newComment,
                    userId: userId,
                    postId: postId,
                    firstName: firstName,
                }),
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                dispatch(appendNewComment(jsonResponse));
                dispatch(addCommentSuccess(jsonResponse));
            } else {
                const errorResponse = await response.json();
                const message = errorResponse.status.messages[0];
                dispatch(addCommentFailure(message))
            }
        } catch(e) {
            dispatch(addCommentFailure(e.message))

        }
    }
};


export const fetchPostComments = (postId) => {
    return async dispatch => {
        dispatch(fetchingPostCommentsRequest());
        const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg'
        const page = 0;
        const size = 10;
        const url = 'http://localhost:8082/forum/comment/v1/getComment?postId=' + postId + '&page=' + page + '&size=' + size;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {'content-type': 'application/json', 'Authorization': token},
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                dispatch(fetchingPostCommentsSuccess(jsonResponse))
            } else {
                const errorResponse = await response.text();
                dispatch(fetchingPostCommentsFailure(errorResponse))

            }
        } catch (e) {
            dispatch(fetchingPostCommentsFailure(e.message))
        }
    }
};
