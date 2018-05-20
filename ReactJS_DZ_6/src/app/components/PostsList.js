import React, {Component} from 'react';
import axios from 'axios';

import Post from './Post';

export default class PostsList extends Component
{
    constructor(props){
        super(props);

        this.state = {
            posts: []
        };

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                this.setState({
                    posts: response.data
                });
            });
    }

    render(){
        if(!this.state.posts.length){
            return null;
        }

        let posts = this.state.posts.map((user, index) => {
            return <Post key={index} {...user} />;
        });

        return (
            <div>
                {posts}
            </div>
        );
    }
}