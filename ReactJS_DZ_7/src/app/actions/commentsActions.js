//import dispacher from '../dispatcher';
import axios from 'axios';
import {FETCH_COMMENTS} from "../constants/commentsConstants";

/*
export function addComment(title, userId, body) {
    const comment = {
        title,
        userId,
        body
    };

    dispacher.dispatch({
        type: ADD_COMMENT,
        payload: comment
    });
}

export function addNewComment(postId, id, name, email, body) {
    const comment = {
        postId,
        id,
        name,
        email,
        body
    };

    dispacher.dispatch({
        type: ADD_COMMENT,
        payload: comment
    });
}

export function fetchComments() {
    dispacher.dispatch({
        type: FETCH_COMMENTS_START
    });
}
*/

export function fetchComments() {
    let url = 'https://jsonplaceholder.typicode.com/comments';
    return {
        type: FETCH_COMMENTS,
        payload: axios.get(url)
    }
}