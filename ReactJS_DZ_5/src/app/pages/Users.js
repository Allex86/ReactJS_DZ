import React, {Component} from 'react';
import {Link} from 'react-router';

import UsersList from '../components/UsersList';

export default class Users extends Component
{
	render() {
      return (
         <div className="users_page">
            <h2>This is Users</h2>
            <UsersList/>
      	</div>
      );
   };
}