import React, {Component} from 'react';
import CommentsList from '../components/CommentsList';

import {fetchComments} from '../actions/commentsActions.js';
import {connect} from 'react-redux';

import WaitingLoad from '../components/WaitingLoad';

class Comments extends Component
{
    constructor() {
        super(...arguments);

        let comments = fetchComments(); //Вызываем метод получения пользователей
        this.props.dispatch(comments);
    }

	render() {
        return (
            <div>
                {
                    (!this.props.children) ?
                        (this.props.is_fetching ? <WaitingLoad/> : <CommentsList comments={this.props.comments} />) :
                        (this.props.children)
                }
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        comments: store.comments.comments,
        is_fetching: store.comments.is_fetching
    };
}

export default connect(mapStateToProps)(Comments);