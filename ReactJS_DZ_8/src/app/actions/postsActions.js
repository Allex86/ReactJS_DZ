import axios from 'axios';
import {FETCH_POSTS} from "../constants/postsConstants.js";

export function fetchPosts() {
    /* let url = 'https://jsonplaceholder.typicode.com/posts'; */
    let url = 'http://localhost:8082/api/posts';
    return {
        type: FETCH_POSTS,
        payload: axios.get(url)
    }
}