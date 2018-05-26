import React, {Component} from 'react';
import Post from './Post';

export default class PostsList extends Component
{
    render(){
        if(!this.props.posts.length){
            return null;
        }

        let posts = this.props.posts.map((post, index) => {
            return <Post key={index} {...post} />;
        });

        return (
            <div>
                {posts}
            </div>
        );
    }
}