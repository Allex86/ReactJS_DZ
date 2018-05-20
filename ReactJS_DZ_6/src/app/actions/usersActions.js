import dispacher from '../dispatcher';
import {ADD_USER, FETCH_USERS_START} from "../constants/usersConstants";

export function addUser(id, name, email, phone) {
    const user = {
        id,
        name,
        email,
        phone
    };

    dispacher.dispatch({
        type: ADD_USER,
        payload: user
    });
}

export function fetchUsers() {
    dispacher.dispatch({
        type: FETCH_USERS_START
    });
}