import React, {Component} from 'react';
import axios from 'axios';

import Comment from './Comment';

export default class CommentsList extends Component
{
    constructor(props){
        super(props);

        this.state = {
            comments: []
        };

        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                this.setState({
                    comments: response.data
                });
            });
    }

    render(){
        if(!this.state.comments.length){
            return null;
        }

        let comments = this.state.comments.map((user, index) => {
            return <Comment key={index} {...user} />;
        });

        return (
            <div>
                {comments}
            </div>
        );
    }
}