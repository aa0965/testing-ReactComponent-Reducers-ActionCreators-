import { SAVE_COMMENT } from './types.js';
import { FETCH_COMMENT , CHANGE_AUTH} from './types.js';
import axios from 'axios';

export function saveComment(comment){
  return {
    type : SAVE_COMMENT,
    payload : comment
  }
}


export function fetchComment(){
  const response = axios.get('https://jsonplaceholder.typicode.com/comments')

  return {
    type: FETCH_COMMENT,
    payload: response
  }
}


export function changeauth(isLoggedIn){
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}
