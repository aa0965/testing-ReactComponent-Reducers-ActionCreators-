import { combineReducers } from 'redux';
import CommentsReducer from './comments';
import AuthReducer from './auth';

export default combineReducers({
  comments: CommentsReducer,
  auth: AuthReducer
})
