import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Post extends Component {
    render() {

        let show_comments = `https://jsonplaceholder.typicode.com/comments?postId=${this.props.id}`;

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.props.id} {this.props.title}
                    </h3>
                </div>
                <div className="panel-body">
                    <p>{this.props.body}</p>
                    <p>UserId: {this.props.userId}</p>
                    <Link to={show_comments}>Show Comments</Link>
                </div>
            </div>
        );
    }
}