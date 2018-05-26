import axios from 'axios';
import {FETCH_COMMENTS} from "../constants/commentsConstants";

export function fetchComments() {
    /* let url = 'https://jsonplaceholder.typicode.com/comments'; */
    let url = 'http://localhost:8082/api/comments';
    return {
        type: FETCH_COMMENTS,
        payload: axios.get(url)
    }
}