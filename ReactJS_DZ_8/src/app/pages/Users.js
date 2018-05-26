import React, {Component} from 'react';
import UsersList from '../components/UsersList';

import {fetchUsers} from '../actions/usersActions';
import {connect} from 'react-redux';

import WaitingLoad from '../components/WaitingLoad';

class Users extends Component {
    constructor() {
        super(...arguments);

        let users = fetchUsers(); //Вызываем метод получения пользователей
        this.props.dispatch(users);
    }

    render() {
        return (
            <div>
                {
                    (!this.props.children) ?
                        (this.props.is_fetching ? <WaitingLoad/> : <UsersList users={this.props.users} /> ) :
                        (this.props.children)
                }
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        users: store.users.users,
        is_fetching: store.users.is_fetching
    };
}

export default connect(mapStateToProps)(Users);