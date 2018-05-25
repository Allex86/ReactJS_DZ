import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentsList extends Component
{
    render(){
        if(!this.props.comments.length){
            return null;
        }

        let comments = this.props.comments.map((comment, index) => {
            return <Comment key={index} {...comment} />;
        });

        return (
            <div>
                {comments}
            </div>
        );
    }
}