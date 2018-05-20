import React from 'react';
import CommentStore from '../stores/CommentsStore';
import {addComment, addNewComment, fetchComments} from "../actions/commentsActions";
import CommentList from './CommentList';

import Comment from './Comment';

export default class Comments extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            comments: []
        };

        this.newComment = this.newComment.bind(this);
        this.onCommentChange = this.onCommentChange.bind(this);
    }

    newComment()
    {   /*
        let body = 'Новый комментарий';
        let userId = 1;
        let title = 'Название комментария';
        addComment(title, userId, body);
        */
        let postId = 100500;
        let id = 100500;
        let name = 'Название комментария';
        let email = "Eliseo@gardner.biz";
        let body = 'Новый комментарий';
        addNewComment(postId, id, name, email, body);
    }

    onCommentChange(comments)
    {
        this.setState({
            comments
        });
    }

    componentWillMount()
    {
        CommentStore.on('change', this.onCommentChange);
    }

    componentDidMount()
    {
        fetchComments();
    }

    componentWillUnmount(){
        CommentStore.removeListener('change', this.onCommentChange);
    }

    render(){
        let comments = this.state.comments.map((comments, index) => {
            return <Comment key={index} {...comments} />;
        });
        console.log(this.state.comments);
        return (
            <div>
            <button className="btn btn-primary btn-block" onClick={this.newComment}>
                Добавить новый комментарий
            </button>
                {/* <CommentList comments = {this.state.comments} /> */}
                {comments}
            </div>
        );
    }
}