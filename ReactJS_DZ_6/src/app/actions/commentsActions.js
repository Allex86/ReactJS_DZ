import dispacher from '../dispatcher';
import {ADD_COMMENT, FETCH_COMMENTS_START} from "../constants/commentsConstants";

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