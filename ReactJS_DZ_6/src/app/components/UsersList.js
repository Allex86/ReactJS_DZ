import React, {Component} from 'react';
import axios from 'axios';

import User from './User';

export default class UsersList extends Component
{
    constructor(props){
        super(props);

        this.state = {
            users: []
        };

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({
                    users: response.data
                });
            });
    }

    render(){
        if(!this.state.users.length){
            return null;
        }

        let users = this.state.users.map((user, index) => {
            return <User key={index} {...user} />;
        });

        return (
            <div>
                {users}
            </div>
        );
    }
}