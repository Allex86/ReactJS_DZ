import React, {Component} from 'react';
import CommentsList from '../components/CommentsList';

import {fetchComments} from '../actions/commentsActions.js';
import {connect} from 'react-redux';

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
                        (this.props.is_fetching ?
                            (<div>
                                <p>Идёт загрузка . . .</p>
                                <i className="fa fa-spinner fa-pulse fa-3x fa-fw" aria-hidden="true" />
                            </div>):
                            <CommentsList comments={this.props.comments} />
                        ) :
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