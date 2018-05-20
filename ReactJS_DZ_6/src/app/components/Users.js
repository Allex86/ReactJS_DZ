import React from 'react';
import UsersStore from '../stores/UsersStore';
import {addUser, fetchUsers} from "../actions/usersActions";

import User from './User';

export default class Users extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            users: []
        };

        this.newUser = this.newUser.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
    }

    newUser()
    {   
        let id = 100500;
        let name = 'Vasya Pupkin';
        let email = "Vasya_Pup@gmail.ru";
        let phone = '+0-000-0000000';
        addUser(id, name, email, phone);
    }

    onUserChange(users)
    {
        this.setState({
            users
        });
    }

    componentWillMount()
    {
        UsersStore.on('change', this.onUserChange);
    }

    componentDidMount()
    {
        fetchUsers();
    }

    componentWillUnmount(){
        UsersStore.removeListener('change', this.onUserChange);
    }

    render(){
        let users = this.state.users.map((users, index) => {
            return <User key={index} {...users} />;
        });
        console.log(this.state.users);
        return (
            <div>
            <button className="btn btn-primary btn-block" onClick={this.newUser}>
                Добавить нового пользователя
            </button>
                {/* <CommentList users = {this.state.users} /> */}
                {/* <Comment users = {this.state.users} /> */}
                {users}
            </div>
        );
    }
}