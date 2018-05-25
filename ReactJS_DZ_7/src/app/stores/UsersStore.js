import { EventEmitter } from 'events';
import {ADD_USER, FETCH_USERS_START, FETCH_USERS_END} from "../constants/usersConstants";
import dispatcher from '../dispatcher';
import axios from 'axios';

class UsersStore extends EventEmitter {
    constructor()
    {
        super(...arguments);

        this.users = [];

        this.fetchUsersStart = this.fetchUsersStart.bind(this);
        this.fetchUsersEnd = this.fetchUsersEnd.bind(this);
        this.change = this.change.bind(this);
        this.addUser = this.addUser.bind(this);
        this.handleUserActions = this.handleUserActions.bind(this);
    }

    fetchUsersStart()
    {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                dispatcher.dispatch({
                    type: FETCH_USERS_END,
                    payload: response.data
                });
            });
    }

    fetchUsersEnd(users)
    {
        this.users = users;
        this.change();
    }

    change()
    {
        this.emit('change', this.users);
    }

    addUser(user)
    {
        this.users.push(user);
        this.change();
    }

    handleUserActions(action)
    {
        switch (action.type)
        {
            case ADD_USER: {
                this.addUser(action.payload);
                break;
            }
            case FETCH_USERS_START: {
                this.fetchUsersStart();
                break;
            }
            case FETCH_USERS_END: {
                this.fetchUsersEnd(action.payload);
                break;
            }
        }
    }
}

const cS = new UsersStore;
dispatcher.register(cS.handleUserActions);
export default cS;