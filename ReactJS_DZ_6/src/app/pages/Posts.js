import React, {Component} from 'react';
import {Link} from 'react-router';

import PostsList from '../components/PostsList';

export default class Posts extends Component
{
	render() {
      return (
         <div className="posts_page">
            <h2>This is Posts</h2>
            <PostsList/>
      	</div>
      );
   };
}