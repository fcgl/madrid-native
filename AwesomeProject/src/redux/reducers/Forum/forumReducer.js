import {
    FETCHING_POSTS_REQUEST,
    FETCHING_POSTS_SUCCESS,
    FETCHING_POSTS_FAILURE,
    APPEND_NEW_POST
} from "../../actions/actionTypes";

const initialState = {
    featured: {
        isLoading: true,
        hasError: false,
        errorMessage: '',
        posts: [],
        requestTimestamp: 0,
    },
    top: {
        isLoading: true,
        hasError: false,
        errorMessage: '',
        posts: [],
        requestTimestamp: 0,
    },
    new: {
        isLoading: true,
        hasError: false,
        errorMessage: '',
        posts: [],
        requestTimestamp: 0,
    }
};

const formReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCHING_POSTS_REQUEST:
            let stateTypePayload0 = {...state[action.postType], isLoading: true};
            return {...state, [action.postType]: stateTypePayload0};
        case FETCHING_POSTS_FAILURE:
            let stateTypePayload1 = {...state[action.postType], isLoading: false, errorMessage: action.payload};
            return {...state, [action.postType]: stateTypePayload1};
        case FETCHING_POSTS_SUCCESS:
            let stateTypePayload2 = {...state[action.postType],
                isLoading: false,
                posts: action.payload.posts,
                requestTimestamp: action.payload.timestamp
            };
            return {...state, [action.postType]: stateTypePayload2};
        case APPEND_NEW_POST:
            let newPost = [{'post': action.payload.response}];
            let newPostState = newPost.concat(state.new.posts);
            let stateTypePayload3 = {...state['new'],
                isLoading: false,
                posts: newPostState,
                requestTimestamp: action.payload.timestamp
            };
            return {...state, ['new']: stateTypePayload3};
        default:
            return state
    }
};

export default formReducer;
