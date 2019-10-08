import {combineReducers} from "redux";
import todos from './ShoppingList/todos'
import forumReducer from './Forum/forumReducer'
import addPost from './Forum/Post/makePostReducer'
import addComment from './Forum/Comment/makeCommentReducer'
import fetchingCommentReducer from './Forum/Comment/fetchingCommentReducer'
import userPointReducer from "./Profile/UserPoint/UserDetailsReducer";
import userPointHistoryReducer from "./Profile/UserPoint/UserPointHistoryReducer";
import userTrophies from "./Profile/UserTrophy/UserTrophyReducer"

export default combineReducers({
    todos,
    forum: forumReducer,
    addPost: addPost,
    addComment: addComment,
    fetchingCommentReducer: fetchingCommentReducer,
    userPointReducer: userPointReducer,
    userPointHistoryReducer: userPointHistoryReducer,
    userTrophies: userTrophies
})
