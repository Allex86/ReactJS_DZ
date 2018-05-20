import React, {Component} from 'react';
import {Link} from 'react-router';

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