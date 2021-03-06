import React, {Component} from 'react';
import User from './User';

export default class UsersList extends Component
{
    render(){
        if(!this.props.users.length){
            return null;
        }

        let users = this.props.users.map((user, index) => {
            return <User key={index} {...user} />;
        });

        return (
            <div>
                {users}
            </div>
        );
    }
}