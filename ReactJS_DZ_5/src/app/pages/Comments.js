import React, {Component} from 'react';
import {Link} from 'react-router';

import Jumbotron from '../components/Jumbotron';
import Marketing from '../components/Marketing';
import CommentsList from '../components/CommentsList';

export default class Comments extends Component
{
	render() {
      return (
         <div className="comments_page">
            <h2>This is Comments</h2>
            <CommentsList/>
      	</div>
      );
   };
}